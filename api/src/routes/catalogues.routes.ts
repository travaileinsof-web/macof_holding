import { Hono } from 'hono';
import { eq, and, desc, sql, isNull } from 'drizzle-orm';
import { db } from '../db/client';
import { catalogues, filiales } from '../db/schema';
import { success, error } from '../utils/response';

const cataloguesRoutes = new Hono();

// GET /api/catalogues - List catalogues (public)
cataloguesRoutes.get('/', async (c) => {
  const filialeFilter = c.req.query('filiale');
  const typeFilter = c.req.query('type_document');
  const page = parseInt(c.req.query('page') || '1', 10);
  const limit = Math.min(parseInt(c.req.query('limit') || '50', 10), 100);
  const offset = (page - 1) * limit;

  const conditions = [eq(catalogues.archived, false)];

  if (filialeFilter) {
    const isNumeric = /^\d+$/.test(filialeFilter);
    if (isNumeric) {
      conditions.push(eq(catalogues.filiale, parseInt(filialeFilter, 10)));
    } else {
      const [filiale] = await db
        .select({ id: filiales.id })
        .from(filiales)
        .where(eq(filiales.slug, filialeFilter))
        .limit(1);
      if (filiale) {
        conditions.push(eq(catalogues.filiale, filiale.id));
      }
    }
  }

  if (typeFilter) {
    conditions.push(eq(catalogues.type_document, typeFilter as 'catalogue' | 'brochure' | 'plaquette' | 'fiche_technique' | 'autre'));
  }

  const items = await db
    .select()
    .from(catalogues)
    .where(and(...conditions))
    .orderBy(desc(catalogues.created_at))
    .limit(limit)
    .offset(offset);

  const [countResult] = await db
    .select({ count: catalogues.id })
    .from(catalogues)
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

// GET /api/catalogues/:id/download - Increment download count
cataloguesRoutes.get('/:id/download', async (c) => {
  const id = parseInt(c.req.param('id'), 10);

  const [catalogue] = await db
    .select()
    .from(catalogues)
    .where(eq(catalogues.id, id))
    .limit(1);

  if (!catalogue) {
    return error(c, 'Catalogue non trouve', 404);
  }

  // Increment download counter
  await db
    .update(catalogues)
    .set({ telechargements: sql`${catalogues.telechargements} + 1` })
    .where(eq(catalogues.id, id));

  return success(c, {
    file_path: catalogue.file_path,
    telechargements: (catalogue.telechargements || 0) + 1,
  });
});

export default cataloguesRoutes;
