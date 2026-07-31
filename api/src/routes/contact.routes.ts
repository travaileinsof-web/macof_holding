import { Hono } from 'hono';
import { eq } from 'drizzle-orm';
import { db } from '../db/client';
import { demandes_contact, filiales } from '../db/schema';
import { success, error } from '../utils/response';
import { demandeSchema } from '../utils/validation';
import { sendNotificationEmail } from '../services/email';
import { generateContactWhatsAppUrl } from '../services/whatsapp';

const contactRoutes = new Hono();

// Generate unique reference
function generateReference(): string {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `DM-${year}${month}${day}-${random}`;
}

// POST /api/contact - Public contact form submission
contactRoutes.post('/', async (c) => {
  const body = await c.req.json();
  const parsed = demandeSchema.safeParse(body);

  if (!parsed.success) {
    return error(c, parsed.error.issues[0].message, 422);
  }

  const data = parsed.data;
  const reference = generateReference();

  // Resolve filiale name if needed
  let filialeName: string | null = null;
  let filialeId: number | null = null;
  if (data.filiale) {
    const filialeValue = String(data.filiale);
    const isNumber = /^\d+$/.test(filialeValue);

    if (isNumber) {
      const [filiale] = await db
        .select({ id: filiales.id, nom: filiales.nom })
        .from(filiales)
        .where(eq(filiales.id, parseInt(filialeValue, 10)))
        .limit(1);
      if (filiale) {
        filialeName = filiale.nom;
        filialeId = filiale.id;
      }
    } else {
      const [filiale] = await db
        .select({ id: filiales.id, nom: filiales.nom })
        .from(filiales)
        .where(eq(filiales.nom, filialeValue))
        .limit(1);
      if (filiale) {
        filialeName = filiale.nom;
        filialeId = filiale.id;
      } else {
        filialeName = filialeValue;
      }
    }
  }

  // Insert demande
  const [inserted] = await db
    .insert(demandes_contact)
    .values({
      reference,
      civilite: data.civilite || null,
      nom_complet: data.nom_complet,
      email: data.email,
      telephone: data.telephone || null,
      societe: data.societe || null,
      fonction: data.fonction || null,
      filiale: filialeId,
      type_demande: data.type_demande || 'information',
      objet: data.objet || null,
      message: data.message,
      details_json: (data.details_json && Object.keys(data.details_json).length > 0) ? data.details_json as Record<string, unknown> : null,
    })
    .returning();

  // Send notification email (non-blocking)
  sendNotificationEmail({
    reference,
    nom_complet: data.nom_complet,
    email: data.email,
    telephone: data.telephone,
    societe: data.societe,
    fonction: data.fonction,
    objet: data.objet,
    message: data.message,
    filiale: filialeName,
  }).catch((err) => {
    console.error('Erreur envoi notification email:', err);
  });

  // Generate WhatsApp URL for the notification
  const whatsappUrl = await generateContactWhatsAppUrl({
    nom_complet: data.nom_complet,
    email: data.email,
    telephone: data.telephone,
    societe: data.societe,
    objet: data.objet,
    message: data.message,
    filiale: filialeName,
  });

  return success(c, {
    reference,
    whatsapp_url: whatsappUrl,
  }, 'Votre demande a ete envoyee avec succes. Reference: ' + reference, 201);
});

export default contactRoutes;
