import { Hono } from 'hono';
import { eq } from 'drizzle-orm';
import { db } from '../db/client';
import { settings } from '../db/schema';
import { success } from '../utils/response';

const settingsRoutes = new Hono();

// Liste des cles publiques autorisees
const PUBLIC_KEYS = [
  'contact_email',
  'contact_phone',
  'contact_address',
  'social_facebook',
  'social_linkedin',
  'social_instagram',
  'social_twitter',
  'whatsapp_number'
];

// GET /api/v1/settings
settingsRoutes.get('/', async (c) => {
  const allSettings = await db.select().from(settings);
  
  // Filtrer uniquement les cles publiques
  const publicSettings = allSettings.filter(s => PUBLIC_KEYS.includes(s.key));
  
  const map = publicSettings.reduce((acc, curr) => {
    acc[curr.key] = curr.value || '';
    return acc;
  }, {} as Record<string, string>);

  return success(c, { map });
});

// PUT /api/v1/settings
// Body expected: { "contact_email": "...", "contact_phone": "..." }
settingsRoutes.put('/', async (c) => {
  const body = await c.req.json();
  const keysToUpdate = Object.keys(body).filter(k => PUBLIC_KEYS.includes(k));

  // For each valid key, update or insert
  for (const key of keysToUpdate) {
    const value = body[key];
    // In PostgreSQL with drizzle, upsert can be done using onConflictDoUpdate
    // but settings table might not have key as primary, let's check schema
    // usually we do an insert onConflictDoUpdate or a simple select then update
    const existing = await db.select().from(settings).where(eq(settings.key, key)).limit(1);
    if (existing.length > 0) {
      await db.update(settings).set({ value, updated_at: new Date() }).where(eq(settings.key, key));
    } else {
      await db.insert(settings).values({ key, value } as any);
    }
  }

  return success(c, { message: 'Settings updated successfully' });
});

export default settingsRoutes;
