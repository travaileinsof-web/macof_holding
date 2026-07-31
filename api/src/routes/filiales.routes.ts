import { Hono } from 'hono';
import { eq, like, or, and, desc, asc } from 'drizzle-orm';
import { db } from '../db/client';
import { filiales } from '../db/schema';
import { success, error } from '../utils/response';

const filialesRoutes = new Hono();

// GET /api/filiales - List all active filiales (public)
filialesRoutes.get('/', async (c) => {
  const results = await db
    .select()
    .from(filiales)
    .where(and(
      eq(filiales.archived, false),
      eq(filiales.statut, 'actif'),
    ))
    .orderBy(asc(filiales.nom));

  return success(c, results);
});

// GET /api/filiales/:slug - Get single filiale by slug (public)
filialesRoutes.get('/:slug', async (c) => {
  const slug = c.req.param('slug');

  const [filiale] = await db
    .select()
    .from(filiales)
    .where(and(
      eq(filiales.slug, slug),
      eq(filiales.archived, false),
    ))
    .limit(1);

  if (!filiale) {
    return error(c, 'Filiale non trouvee', 404);
  }

  return success(c, filiale);
});

// GET /api/filiales/id/:id - Get single filiale by ID
filialesRoutes.get('/id/:id', async (c) => {
  const id = parseInt(c.req.param('id'), 10);

  const [filiale] = await db
    .select()
    .from(filiales)
    .where(eq(filiales.id, id))
    .limit(1);

  if (!filiale) {
    return error(c, 'Filiale non trouvee', 404);
  }

  return success(c, filiale);
});

export default filialesRoutes;
