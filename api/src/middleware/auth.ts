import type { Context, Next } from 'hono';
import { verifyToken, type TokenPayload } from '../services/jwt';
import { error } from '../utils/response';

export interface AuthUser extends TokenPayload {}

export const authMiddleware = async (c: Context, next: Next) => {
  const authHeader = c.req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return error(c, 'Token d\'authentification manquant', 401);
  }

  const token = authHeader.substring(7);

  try {
    const payload = await verifyToken(token);
    c.set('user', payload as AuthUser);
    await next();
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Token invalide ou expire';
    return error(c, message, 401);
  }
};
