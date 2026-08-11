import { Hono } from 'hono';
import { eq, and } from 'drizzle-orm';
import { db } from '../db/client';
import { page_contents } from '../db/schema';
import { success, error } from '../utils/response';

const pagesRoutes = new Hono();

// GET /api/pages/:slug - Get all content for a page slug (public)
// Returns a FLAT { section_key: content_value } map for easy consumption by the frontend
pagesRoutes.get('/:slug', async (c) => {
  const slug = c.req.param('slug');

  const contents = await db
    .select()
    .from(page_contents)
    .where(eq(page_contents.page_slug, slug));

  if (contents.length === 0) {
    return error(c, 'Page non trouvee', 404);
  }

  // Build a FLAT key → value map: { hero_title: "...", stats: "[...]", ... }
  const flat: Record<string, string> = {};
  for (const row of contents) {
    flat[row.section_key] = row.content_value || '';
  }

  return success(c, flat);
});

// GET /api/pages/:slug/:section - Get specific section content (public)
pagesRoutes.get('/:slug/:section', async (c) => {
  const slug = c.req.param('slug');
  const section = c.req.param('section');

  const [content] = await db
    .select()
    .from(page_contents)
    .where(and(
      eq(page_contents.page_slug, slug),
      eq(page_contents.section_key, section),
    ))
    .limit(1);

  if (!content) {
    return error(c, 'Section non trouvee', 404);
  }

  return success(c, {
    page_slug: slug,
    section_key: content.section_key,
    content_value: content.content_value,
    content_type: content.content_type,
    updated_at: content.updated_at,
  });
});

export default pagesRoutes;
