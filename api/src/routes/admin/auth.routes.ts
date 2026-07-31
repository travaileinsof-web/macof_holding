import { Hono } from 'hono';
import { eq, and, desc, sql, asc, like, or } from 'drizzle-orm';
import { db } from '../../db/client';
import { administrateurs, filiales, demandes_contact, catalogues, galerie, page_contents, settings, chatbot_logs } from '../../db/schema';
import { success, error } from '../../utils/response';
import { authMiddleware } from '../../middleware/auth';
import type { AuthUser } from '../../middleware/auth';
import { compare, hash } from 'bcryptjs';
import {
  filialeSchema,
  galerieSchema,
  catalogueSchema,
  pageContentSchema,
  pageContentUpdateSchema,
  settingsUpdateSchema,
  adminUpdateSchema,
  changePasswordSchema,
  chatbotLogSchema,
} from '../../utils/validation';
import { uploadFile, deleteFile } from '../../services/upload';

// Helper to get validation error message (Zod v4 uses .issues not .errors)
function getValidationError(err: unknown): string {
  if (err && typeof err === 'object' && 'issues' in err) {
    const issues = (err as { issues: Array<{ message: string }> }).issues;
    return issues[0]?.message || 'Donnees invalides';
  }
  if (err instanceof Error) return err.message;
  return 'Donnees invalides';
}

// Helper to get user from context
function getUser(c: any): AuthUser {
  return c.get('user') as AuthUser;
}

// Helper to safely get route param as integer
function getIdParam(c: any): number {
  return parseInt(c.req.param('id') || '0', 10);
}

// ─── Admin Dashboard ─────────────────────────────────────────────────────────

const adminDashboard = new Hono();

// GET /api/admin/dashboard/stats
adminDashboard.get('/stats', authMiddleware, async (c) => {
  getUser(c);

  const [totalDemandes] = await db
    .select({ count: sql<number>`count(*)` })
    .from(demandes_contact)
    .where(eq(demandes_contact.archived, false));

  const [nouvellesDemandes] = await db
    .select({ count: sql<number>`count(*)` })
    .from(demandes_contact)
    .where(and(eq(demandes_contact.archived, false), eq(demandes_contact.statut, 'nouveau')));

  const [totalFiliales] = await db
    .select({ count: sql<number>`count(*)` })
    .from(filiales)
    .where(eq(filiales.archived, false));

  const [totalGalerie] = await db
    .select({ count: sql<number>`count(*)` })
    .from(galerie)
    .where(eq(galerie.archived, false));

  const [totalCatalogues] = await db
    .select({ count: sql<number>`count(*)` })
    .from(catalogues)
    .where(eq(catalogues.archived, false));

  return success(c, {
    total_demandes: totalDemandes?.count || 0,
    nouvelles_demandes: nouvellesDemandes?.count || 0,
    total_filiales: totalFiliales?.count || 0,
    total_galerie: totalGalerie?.count || 0,
    total_catalogues: totalCatalogues?.count || 0,
  });
});

// ─── Admin: Demandes ─────────────────────────────────────────────────────────

const adminDemandes = new Hono();

adminDemandes.get('/', authMiddleware, async (c) => {
  getUser(c);
  const page = parseInt(c.req.query('page') || '1', 10);
  const limit = Math.min(parseInt(c.req.query('limit') || '20', 10), 100);
  const offset = (page - 1) * limit;
  const statut = c.req.query('statut');
  const search = c.req.query('search');

  const conditions = [eq(demandes_contact.archived, false)];

  if (statut && ['nouveau', 'en_cours', 'traite', 'archive'].includes(statut)) {
    conditions.push(eq(demandes_contact.statut, statut as 'nouveau' | 'en_cours' | 'traite' | 'archive'));
  }

  if (search) {
    conditions.push(
      or(
        like(demandes_contact.nom_complet, `%${search}%`),
        like(demandes_contact.email, `%${search}%`),
        like(demandes_contact.reference, `%${search}%`),
        like(demandes_contact.societe, `%${search}%`),
      )!,
    );
  }

  const items = await db
    .select()
    .from(demandes_contact)
    .where(and(...conditions))
    .orderBy(desc(demandes_contact.created_at))
    .limit(limit)
    .offset(offset);

  const [countResult] = await db
    .select({ count: sql<number>`count(*)` })
    .from(demandes_contact)
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

adminDemandes.get('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [demande] = await db
    .select()
    .from(demandes_contact)
    .where(eq(demandes_contact.id, id))
    .limit(1);

  if (!demande) {
    return error(c, 'Demande non trouvee', 404);
  }

  return success(c, demande);
});

adminDemandes.patch('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const updateData: Record<string, unknown> = { updated_at: new Date() };

  if (body.statut && ['nouveau', 'en_cours', 'traite', 'archive'].includes(body.statut)) {
    updateData.statut = body.statut;
  }
  if (body.notes_internes !== undefined) {
    updateData.notes_internes = body.notes_internes;
  }

  const [updated] = await db
    .update(demandes_contact)
    .set(updateData as any)
    .where(eq(demandes_contact.id, id))
    .returning();

  if (!updated) {
    return error(c, 'Demande non trouvee', 404);
  }

  return success(c, updated, 'Demande mise a jour');
});

adminDemandes.delete('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [updated] = await db
    .update(demandes_contact)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(demandes_contact.id, id))
    .returning();

  if (!updated) {
    return error(c, 'Demande non trouvee', 404);
  }

  return success(c, null, 'Demande archivee');
});

// ─── Admin: Filiales CRUD ──────────────────────────────────────────────────

const adminFiliales = new Hono();

adminFiliales.get('/', authMiddleware, async (c) => {
  const includeArchived = c.req.query('archived') === 'true';
  const items = await db
    .select()
    .from(filiales)
    .where(includeArchived ? undefined : eq(filiales.archived, false))
    .orderBy(asc(filiales.nom));

  return success(c, items);
});

adminFiliales.post('/', authMiddleware, async (c) => {
  getUser(c);
  const body = await c.req.json();
  const parsed = filialeSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const [created] = await db
    .insert(filiales)
    .values({
      nom: parsed.data.nom,
      slug: parsed.data.slug,
      description: parsed.data.description || null,
      secteur: parsed.data.secteur,
      image_url: parsed.data.image_url || null,
      details_json: Object.keys(parsed.data.details_json).length > 0
        ? parsed.data.details_json as Record<string, unknown>
        : null,
      email: parsed.data.email || null,
      telephone: parsed.data.telephone || null,
      adresse: parsed.data.adresse || null,
      site_web: parsed.data.site_web || null,
      statut: parsed.data.statut,
      archived: parsed.data.archived,
    })
    .returning();

  return success(c, created, 'Filiale creee', 201);
});

adminFiliales.put('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const parsed = filialeSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const [updated] = await db
    .update(filiales)
    .set({
      nom: parsed.data.nom,
      slug: parsed.data.slug,
      description: parsed.data.description || null,
      secteur: parsed.data.secteur,
      image_url: parsed.data.image_url || null,
      details_json: Object.keys(parsed.data.details_json).length > 0
        ? parsed.data.details_json as Record<string, unknown>
        : null,
      email: parsed.data.email || null,
      telephone: parsed.data.telephone || null,
      adresse: parsed.data.adresse || null,
      site_web: parsed.data.site_web || null,
      statut: parsed.data.statut,
      archived: parsed.data.archived,
      updated_at: new Date(),
    })
    .where(eq(filiales.id, id))
    .returning();

  if (!updated) {
    return error(c, 'Filiale non trouvee', 404);
  }

  return success(c, updated, 'Filiale mise a jour');
});

adminFiliales.delete('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [updated] = await db
    .update(filiales)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(filiales.id, id))
    .returning();

  if (!updated) {
    return error(c, 'Filiale non trouvee', 404);
  }

  return success(c, null, 'Filiale archivee');
});

// ─── Admin: Galerie CRUD ──────────────────────────────────────────────────────

const adminGalerie = new Hono();

adminGalerie.get('/', authMiddleware, async (c) => {
  const includeArchived = c.req.query('archived') === 'true';
  const items = await db
    .select()
    .from(galerie)
    .where(includeArchived ? undefined : eq(galerie.archived, false))
    .orderBy(desc(galerie.created_at));

  return success(c, items);
});

adminGalerie.post('/', authMiddleware, async (c) => {
  const body = await c.req.json();
  const parsed = galerieSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const data = parsed.data;
  let filialeId: number | null = null;
  if (data.filiale) {
    const fv = data.filiale;
    if (typeof fv === 'number') filialeId = fv;
    else if (/^\d+$/.test(String(fv))) filialeId = parseInt(String(fv), 10);
    else {
      const [f] = await db.select({ id: filiales.id }).from(filiales).where(eq(filiales.slug, String(fv))).limit(1);
      if (f) filialeId = f.id;
    }
  }

  const [created] = await db
    .insert(galerie)
    .values({
      titre: data.titre,
      filiale: filialeId,
      type_projet: data.type_projet || null,
      lieu: data.lieu || null,
      date_realisation: data.date_realisation || null,
      description_courte: data.description_courte || null,
      image_path: data.image_path,
    })
    .returning();

  return success(c, created, 'Element de galerie cree', 201);
});

adminGalerie.put('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const parsed = galerieSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const data = parsed.data;
  let filialeId: number | null = null;
  if (data.filiale) {
    const fv = data.filiale;
    if (typeof fv === 'number') filialeId = fv;
    else if (/^\d+$/.test(String(fv))) filialeId = parseInt(String(fv), 10);
  }

  const [updated] = await db
    .update(galerie)
    .set({
      titre: data.titre,
      filiale: filialeId,
      type_projet: data.type_projet || null,
      lieu: data.lieu || null,
      date_realisation: data.date_realisation || null,
      description_courte: data.description_courte || null,
      image_path: data.image_path,
      updated_at: new Date(),
    })
    .where(eq(galerie.id, id))
    .returning();

  if (!updated) {
    return error(c, 'Element de galerie non trouve', 404);
  }

  return success(c, updated, 'Element de galerie mis a jour');
});

adminGalerie.patch('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const updateData: Record<string, unknown> = { updated_at: new Date() };
  const allowedFields = ['titre', 'lieu', 'date_realisation', 'description_courte', 'type_projet', 'archived'];

  for (const field of allowedFields) {
    if ((body as Record<string, unknown>)[field] !== undefined) {
      updateData[field] = (body as Record<string, unknown>)[field];
    }
  }
  if ((body as Record<string, unknown>).image_path !== undefined) {
    updateData.image_path = (body as Record<string, unknown>).image_path;
  }

  const [updated] = await db
    .update(galerie)
    .set(updateData as any)
    .where(eq(galerie.id, id))
    .returning();

  if (!updated) {
    return error(c, 'Element de galerie non trouve', 404);
  }

  return success(c, updated, 'Element de galerie mis a jour');
});

adminGalerie.delete('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [existing] = await db
    .select()
    .from(galerie)
    .where(eq(galerie.id, id))
    .limit(1);

  if (!existing) {
    return error(c, 'Element de galerie non trouve', 404);
  }

  if (existing.image_path) {
    deleteFile(existing.image_path).catch(() => {});
  }

  await db.update(galerie).set({ archived: true, updated_at: new Date() }).where(eq(galerie.id, id));
  return success(c, null, 'Element de galerie archive');
});

// ─── Admin: Catalogues CRUD ───────────────────────────────────────────────────

const adminCatalogues = new Hono();

adminCatalogues.get('/', authMiddleware, async (c) => {
  const includeArchived = c.req.query('archived') === 'true';
  const items = await db
    .select()
    .from(catalogues)
    .where(includeArchived ? undefined : eq(catalogues.archived, false))
    .orderBy(desc(catalogues.created_at));

  return success(c, items);
});

adminCatalogues.post('/', authMiddleware, async (c) => {
  const body = await c.req.json();
  const parsed = catalogueSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const data = parsed.data;
  let filialeId: number | null = null;
  if (data.filiale) {
    const fv = data.filiale;
    if (typeof fv === 'number') filialeId = fv;
    else if (/^\d+$/.test(String(fv))) filialeId = parseInt(String(fv), 10);
    else {
      const [f] = await db.select({ id: filiales.id }).from(filiales).where(eq(filiales.slug, String(fv))).limit(1);
      if (f) filialeId = f.id;
    }
  }

  const [created] = await db
    .insert(catalogues)
    .values({
      titre: data.titre,
      filiale: filialeId,
      type_document: data.type_document,
      file_path: data.file_path,
      taille_ko: data.taille_ko || null,
      format: data.format,
    })
    .returning();

  return success(c, created, 'Catalogue cree', 201);
});

adminCatalogues.put('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const parsed = catalogueSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const data = parsed.data;
  let filialeId: number | null = null;
  if (data.filiale) {
    const fv = data.filiale;
    if (typeof fv === 'number') filialeId = fv;
    else if (/^\d+$/.test(String(fv))) filialeId = parseInt(String(fv), 10);
  }

  const [updated] = await db
    .update(catalogues)
    .set({
      titre: data.titre,
      filiale: filialeId,
      type_document: data.type_document,
      file_path: data.file_path,
      taille_ko: data.taille_ko || null,
      format: data.format,
      updated_at: new Date(),
    })
    .where(eq(catalogues.id, id))
    .returning();

  if (!updated) {
    return error(c, 'Catalogue non trouve', 404);
  }

  return success(c, updated, 'Catalogue mis a jour');
});

adminCatalogues.delete('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [existing] = await db
    .select()
    .from(catalogues)
    .where(eq(catalogues.id, id))
    .limit(1);

  if (!existing) {
    return error(c, 'Catalogue non trouve', 404);
  }

  if (existing.file_path) {
    deleteFile(existing.file_path).catch(() => {});
  }

  await db.update(catalogues).set({ archived: true, updated_at: new Date() }).where(eq(catalogues.id, id));
  return success(c, null, 'Catalogue archive');
});

// ─── Admin: Page Contents CRUD ───────────────────────────────────────────────

const adminPages = new Hono();

adminPages.get('/', authMiddleware, async (c) => {
  const slug = c.req.query('slug');
  const items = await db
    .select()
    .from(page_contents)
    .where(slug ? eq(page_contents.page_slug, slug) : undefined)
    .orderBy(asc(page_contents.page_slug), asc(page_contents.section_key));

  return success(c, items);
});

adminPages.post('/', authMiddleware, async (c) => {
  const body = await c.req.json();
  const parsed = pageContentSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const [created] = await db
    .insert(page_contents)
    .values({
      page_slug: parsed.data.page_slug,
      section_key: parsed.data.section_key,
      content_value: parsed.data.content_value || null,
      content_type: parsed.data.content_type,
    })
    .returning();

  return success(c, created, 'Contenu de page cree', 201);
});

adminPages.put('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const body = await c.req.json();
  const parsed = pageContentUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const updateData: Record<string, unknown> = {
    content_value: parsed.data.content_value,
    updated_at: new Date(),
  };

  if (parsed.data.content_type) {
    updateData.content_type = parsed.data.content_type;
  }

  const [updated] = await db
    .update(page_contents)
    .set(updateData as any)
    .where(eq(page_contents.id, id))
    .returning();

  if (!updated) {
    return error(c, 'Contenu non trouve', 404);
  }

  return success(c, updated, 'Contenu mis a jour');
});

adminPages.delete('/:id', authMiddleware, async (c) => {
  const id = getIdParam(c);
  const [deleted] = await db
    .delete(page_contents)
    .where(eq(page_contents.id, id))
    .returning();

  if (!deleted) {
    return error(c, 'Contenu non trouve', 404);
  }

  return success(c, null, 'Contenu supprime');
});

// ─── Admin: Settings CRUD ────────────────────────────────────────────────────

const adminSettings = new Hono();

adminSettings.get('/', authMiddleware, async (c) => {
  getUser(c);
  const items = await db
    .select()
    .from(settings)
    .orderBy(asc(settings.key));

  const settingsMap: Record<string, string> = {};
  for (const item of items) {
    settingsMap[item.key] = item.value || '';
  }

  return success(c, { list: items, map: settingsMap });
});

adminSettings.put('/:key', authMiddleware, async (c) => {
  const rawKey = c.req.param('key');
  const key = rawKey as string;
  const body = await c.req.json();
  const parsed = settingsUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const [existing] = await db
    .select()
    .from(settings)
    .where(eq(settings.key, key))
    .limit(1);

  if (!existing) {
    const [created] = await db
      .insert(settings)
      .values({ key, value: parsed.data.value } as any)
      .returning();
    return success(c, created, 'Parametre cree', 201);
  }

  const [updated] = await db
    .update(settings)
    .set({ value: parsed.data.value, updated_at: new Date() } as any)
    .where(eq(settings.key, key))
    .returning();

  return success(c, updated, 'Parametre mis a jour');
});

adminSettings.post('/bulk', authMiddleware, async (c) => {
  getUser(c);
  const body = await c.req.json();
  const updates = body.settings as Record<string, string>;

  if (!updates || typeof updates !== 'object') {
    return error(c, 'Format invalide. Attendu: { settings: { key: value } }', 422);
  }

  const results: Array<{ key: string; status: string }> = [];

  for (const [key, value] of Object.entries(updates)) {
    const [existing] = await db
      .select()
      .from(settings)
      .where(eq(settings.key, key))
      .limit(1);

    if (existing) {
      await db.update(settings).set({ value, updated_at: new Date() } as any).where(eq(settings.key, key));
      results.push({ key, status: 'updated' });
    } else {
      await db.insert(settings).values({ key, value } as any);
      results.push({ key, status: 'created' });
    }
  }

  return success(c, results, `${results.length} parametres mis a jour`);
});

// ─── Admin: Profile & Password ───────────────────────────────────────────────

const adminProfile = new Hono();

adminProfile.get('/', authMiddleware, async (c) => {
  const user = getUser(c);
  const [admin] = await db
    .select()
    .from(administrateurs)
    .where(eq(administrateurs.id, user.sub))
    .limit(1);

  if (!admin) {
    return error(c, 'Administrateur non trouve', 404);
  }

  return success(c, {
    id: admin.id,
    nom: admin.nom,
    email: admin.email,
    role: admin.role,
    filiale_attribuee: admin.filiale_attribuee,
    created_at: admin.created_at,
  });
});

adminProfile.put('/', authMiddleware, async (c) => {
  const user = getUser(c);
  const body = await c.req.json();
  const parsed = adminUpdateSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const updateData: Record<string, unknown> = { updated_at: new Date() };
  if (parsed.data.nom) updateData.nom = parsed.data.nom;
  if (parsed.data.email) updateData.email = parsed.data.email;
  if (parsed.data.role) updateData.role = parsed.data.role;
  if (parsed.data.filiale_attribuee !== undefined) updateData.filiale_attribuee = parsed.data.filiale_attribuee;

  const [updated] = await db
    .update(administrateurs)
    .set(updateData as any)
    .where(eq(administrateurs.id, user.sub))
    .returning();

  if (!updated) {
    return error(c, 'Administrateur non trouve', 404);
  }

  const { generateToken } = await import('../../services/jwt');
  const token = await generateToken({
    sub: updated.id,
    email: updated.email,
    role: updated.role,
    nom: updated.nom,
    filialeAttribuee: updated.filiale_attribuee,
  });

  return success(c, {
    token,
    user: {
      id: updated.id,
      nom: updated.nom,
      email: updated.email,
      role: updated.role,
      filiale_attribuee: updated.filiale_attribuee,
    },
  }, 'Profil mis a jour');
});

adminProfile.post('/change-password', authMiddleware, async (c) => {
  const user = getUser(c);
  const body = await c.req.json();
  const parsed = changePasswordSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const { currentPassword, newPassword } = parsed.data;
  const [admin] = await db
    .select()
    .from(administrateurs)
    .where(eq(administrateurs.id, user.sub))
    .limit(1);

  if (!admin) {
    return error(c, 'Administrateur non trouve', 404);
  }

  const isValid = await compare(currentPassword, admin.password_hash);
  if (!isValid) {
    return error(c, 'Mot de passe actuel incorrect', 401);
  }

  const newHash = await hash(newPassword, 12);
  await db
    .update(administrateurs)
    .set({ password_hash: newHash, updated_at: new Date() })
    .where(eq(administrateurs.id, user.sub));

  return success(c, null, 'Mot de passe modifie avec succes');
});

// ─── Admin: Upload ────────────────────────────────────────────────────────────

const adminUpload = new Hono();

adminUpload.post('/', authMiddleware, async (c) => {
  getUser(c);
  const formData = await c.req.formData();
  const file = formData.get('file') as File | null;
  const folder = (formData.get('folder') as string) || 'uploads';

  if (!file) {
    return error(c, 'Aucun fichier fourni', 400);
  }

  const maxSize = 10 * 1024 * 1024;
  if (file.size > maxSize) {
    return error(c, 'Fichier trop volumineux (max 10 Mo)', 422);
  }

  const allowedTypes = [
    'image/jpeg', 'image/png', 'image/gif', 'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ];

  if (!allowedTypes.includes(file.type)) {
    return error(c, 'Type de fichier non autorise', 422);
  }

  const url = await uploadFile(file, folder);

  return success(c, {
    url,
    name: file.name,
    size: file.size,
    type: file.type,
    folder,
  }, 'Fichier uploade', 201);
});

adminUpload.delete('/', authMiddleware, async (c) => {
  getUser(c);
  const body = await c.req.json();
  const url = (body as { url: string }).url;

  if (!url) {
    return error(c, 'URL du fichier requise', 400);
  }

  await deleteFile(url);
  return success(c, null, 'Fichier supprime');
});

// ─── Admin: Chatbot Logs ──────────────────────────────────────────────────────

const adminChatbot = new Hono();

adminChatbot.post('/logs', async (c) => {
  const body = await c.req.json();
  const parsed = chatbotLogSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const data = parsed.data;

  const [created] = await db
    .insert(chatbot_logs)
    .values({
      session_id: data.session_id,
      intention_detectee: data.intention_detectee || null,
      filiale_orientee: data.filiale_orientee || null,
      conversation_json: Object.keys(data.conversation_json).length > 0
        ? data.conversation_json as Record<string, unknown>
        : null,
      statut_resolution: data.statut_resolution,
    })
    .returning();

  return success(c, created, 'Log chatbot enregistre', 201);
});

adminChatbot.get('/logs', authMiddleware, async (c) => {
  getUser(c);
  const page = parseInt(c.req.query('page') || '1', 10);
  const limit = Math.min(parseInt(c.req.query('limit') || '50', 10), 100);
  const offset = (page - 1) * limit;

  const items = await db
    .select()
    .from(chatbot_logs)
    .orderBy(desc(chatbot_logs.created_at))
    .limit(limit)
    .offset(offset);

  const [countResult] = await db
    .select({ count: sql<number>`count(*)` })
    .from(chatbot_logs);

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

// ─── Admin: Admins Management ────────────────────────────────────────────────

const adminAdmins = new Hono();

adminAdmins.get('/', authMiddleware, async (c) => {
  const user = getUser(c);
  if (user.role !== 'admin') {
    return error(c, 'Acces refuse. Droits administrateur requis.', 403);
  }

  const items = await db
    .select({
      id: administrateurs.id,
      nom: administrateurs.nom,
      email: administrateurs.email,
      role: administrateurs.role,
      filiale_attribuee: administrateurs.filiale_attribuee,
      archived: administrateurs.archived,
      created_at: administrateurs.created_at,
    })
    .from(administrateurs)
    .orderBy(asc(administrateurs.nom));

  return success(c, items);
});

adminAdmins.post('/', authMiddleware, async (c) => {
  const user = getUser(c);
  if (user.role !== 'admin') {
    return error(c, 'Acces refuse. Droits administrateur requis.', 403);
  }

  const body = await c.req.json();
  const { nom, email, password, role, filiale_attribuee } = body as {
    nom: string;
    email: string;
    password: string;
    role?: string;
    filiale_attribuee?: number | null;
  };

  if (!nom || !email || !password) {
    return error(c, 'Nom, email et mot de passe sont requis', 422);
  }

  const passwordHash = await hash(password, 12);

  const [created] = await db
    .insert(administrateurs)
    .values({
      nom,
      email,
      password_hash: passwordHash,
      role: (role || 'gestionnaire') as 'admin' | 'gestionnaire',
      filiale_attribuee: filiale_attribuee || null,
    })
    .returning({
      id: administrateurs.id,
      nom: administrateurs.nom,
      email: administrateurs.email,
      role: administrateurs.role,
      filiale_attribuee: administrateurs.filiale_attribuee,
      archived: administrateurs.archived,
      created_at: administrateurs.created_at,
    });

  return success(c, created, 'Administrateur cree', 201);
});

adminAdmins.delete('/:id', authMiddleware, async (c) => {
  const user = getUser(c);
  if (user.role !== 'admin') {
    return error(c, 'Acces refuse. Droits administrateur requis.', 403);
  }

  const id = getIdParam(c);
  if (id === user.sub) {
    return error(c, 'Vous ne pouvez pas archiver votre propre compte', 400);
  }

  const [updated] = await db
    .update(administrateurs)
    .set({ archived: true, updated_at: new Date() })
    .where(eq(administrateurs.id, id))
    .returning();

  if (!updated) {
    return error(c, 'Administrateur non trouve', 404);
  }

  return success(c, null, 'Administrateur archive');
});

// ─── Export all admin sub-routes ─────────────────────────────────────────────

export const adminRoutes = new Hono();

adminRoutes.route('/stats', adminDashboard);
adminRoutes.route('/demandes', adminDemandes);
adminRoutes.route('/filiales', adminFiliales);
adminRoutes.route('/galerie', adminGalerie);
adminRoutes.route('/catalogues', adminCatalogues);
adminRoutes.route('/pages', adminPages);
adminRoutes.route('/settings', adminSettings);
adminRoutes.route('/profile', adminProfile);
adminRoutes.route('/upload', adminUpload);
adminRoutes.route('/chatbot', adminChatbot);
adminRoutes.route('/admins', adminAdmins);
