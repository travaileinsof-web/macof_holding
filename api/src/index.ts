import { Hono } from 'hono';
import { corsMiddleware } from './middleware/cors';
import { errorHandler } from './middleware/errorHandler';
import authRoutes from './routes/auth.routes';
import contactRoutes from './routes/contact.routes';
import filialesRoutes from './routes/filiales.routes';
import galerieRoutes from './routes/galerie.routes';
import cataloguesRoutes from './routes/catalogues.routes';
import pagesRoutes from './routes/pages.routes';
import { adminRoutes } from './routes/admin/auth.routes';

const app = new Hono();

// ─── Global Middleware ──────────────────────────────────────────────────────

app.use('*', corsMiddleware());
app.onError(errorHandler);

// ─── Health Check ──────────────────────────────────────────────────────────

app.get('/api/health', (c) => {
  return c.json({
    success: true,
    message: 'MACOF Holding API - Serveur operationnel',
    timestamp: new Date().toISOString(),
    version: '1.0.0',
  });
});

// ─── Public Routes ──────────────────────────────────────────────────────────

app.route('/api/auth', authRoutes);
app.route('/api/contact', contactRoutes);
app.route('/api/filiales', filialesRoutes);
app.route('/api/galerie', galerieRoutes);
app.route('/api/catalogues', cataloguesRoutes);
app.route('/api/pages', pagesRoutes);

// ─── Admin Routes ──────────────────────────────────────────────────────────

app.route('/api/admin', adminRoutes);

// ─── 404 Handler ──────────────────────────────────────────────────────────

app.notFound((c) => {
  return c.json(
    {
      success: false,
      message: `Route non trouvee: ${c.req.method} ${c.req.url}`,
    },
    404,
  );
});

// ─── Export for Vercel ─────────────────────────────────────────────────────

export default app;
