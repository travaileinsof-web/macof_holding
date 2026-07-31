import { Hono } from 'hono';
import { eq } from 'drizzle-orm';
import { db } from '../db/client';
import { administrateurs } from '../db/schema';
import { compare } from 'bcryptjs';
import { generateToken, verifyToken } from '../services/jwt';
import { success, error } from '../utils/response';
import { loginSchema } from '../utils/validation';

const authRoutes = new Hono();

// Helper to get validation error message (Zod v4 uses .issues not .errors)
function getValidationError(err: unknown): string {
  if (err && typeof err === 'object' && 'issues' in err) {
    const issues = (err as { issues: Array<{ message: string }> }).issues;
    return issues[0]?.message || 'Donnees invalides';
  }
  if (err instanceof Error) return err.message;
  return 'Donnees invalides';
}

// POST /api/auth/login
authRoutes.post('/login', async (c) => {
  const body = await c.req.json();
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, getValidationError(parsed.error), 422);
  }

  const { email, password } = parsed.data;

  const [admin] = await db
    .select()
    .from(administrateurs)
    .where(eq(administrateurs.email, email))
    .limit(1);

  if (!admin) {
    return error(c, 'Email ou mot de passe incorrect', 401);
  }

  if (admin.archived) {
    return error(c, 'Compte desactive. Contactez l\'administrateur.', 403);
  }

  const isValid = await compare(password, admin.password_hash);
  if (!isValid) {
    return error(c, 'Email ou mot de passe incorrect', 401);
  }

  const token = await generateToken({
    sub: admin.id,
    email: admin.email,
    role: admin.role,
    nom: admin.nom,
    filialeAttribuee: admin.filiale_attribuee,
  });

  return success(c, {
    token,
    user: {
      id: admin.id,
      nom: admin.nom,
      email: admin.email,
      role: admin.role,
      filiale_attribuee: admin.filiale_attribuee,
    },
  }, 'Connexion reussie');
});

// GET /api/auth/me
authRoutes.get('/me', async (c) => {
  const authHeader = c.req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return error(c, 'Token manquant', 401);
  }

  const token = authHeader.substring(7);

  let payload;
  try {
    payload = await verifyToken(token);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Token invalide ou expire';
    return error(c, message, 401);
  }

  const [admin] = await db
    .select()
    .from(administrateurs)
    .where(eq(administrateurs.id, payload.sub))
    .limit(1);

  if (!admin) {
    return error(c, 'Utilisateur non trouve', 404);
  }

  return success(c, {
    id: admin.id,
    nom: admin.nom,
    email: admin.email,
    role: admin.role,
    filiale_attribuee: admin.filiale_attribuee,
  });
});

export default authRoutes;
