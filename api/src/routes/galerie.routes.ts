import { Hono } from 'hono';
import { eq, and, desc, asc, isNull } from 'drizzle-orm';
import { db } from '../db/client';
import { galerie, filiales } from '../db/schema';
import { success, error } from '../utils/response';

const galerieRoutes = new Hono();

// GET /api/galerie - List gallery items (public)
galerieRoutes.get('/', async (c) => {
  const filialeFilter = c.req.query('filiale');
  const typeFilter = c.req.query('type_projet');
  const page = parseInt(c.req.query('page') || '1', 10);
  const limit = Math.min(parseInt(c.req.query('limit') || '50', 10), 100);
  const offset = (page - 1) * limit;

  const conditions = [eq(galerie.archived, false)];

  if (filialeFilter) {
    const isNumeric = /^\d+$/.test(filialeFilter);
    if (isNumeric) {
      conditions.push(eq(galerie.filiale, parseInt(filialeFilter, 10)));
    } else {
      // Find filiale by slug and use its ID
      const [filiale] = await db
        .select({ id: filiales.id })
        .from(filiales)
        .where(eq(filiales.slug, filialeFilter))
        .limit(1);
      if (filiale) {
        conditions.push(eq(galerie.filiale, filiale.id));
      }
    }
  }

  if (typeFilter) {
    conditions.push(eq(galerie.type_projet, typeFilter as 'residentiel' | 'commercial' | 'infrastructure' | 'evenement' | 'production' | 'logistique' | 'autre'));
  }

  const items = await db
    .select()
    .from(galerie)
    .where(and(...conditions))
    .orderBy(desc(galerie.created_at))
    .limit(limit)
    .offset(offset);

  const [countResult] = await db
    .select({ count: galerie.id })
    .from(galerie)
    .where(and(...conditions));

  return success(c, {
    items,
    pagination: {
      page,
      limit,
      total: countResult?.count || 0,
      totalPages: Math.ceil((countResult?.count || 0) / limit),
    },
  });
});

// GET /api/galerie/:id - Get single gallery item (public)
galerieRoutes.get('/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);

  const [item] = await db
    .select()
    .from(galerie)
    .where(and(
      eq(galerie.id, id),
      eq(galerie.archived, false),
    ))
    .limit(1);

  if (!item) {
    return error(c, 'Element de galerie non trouve', 404);
  }

  return success(c, item);
});

export default galerieRoutes;
