import nodemailer from 'nodemailer';
import { eq } from 'drizzle-orm';
import { db } from '../db/client';
import { settings } from '../db/schema';

export interface SmtpConfig {
  host: string;
  port: number;
  email: string;
  password: string;
}

async function getSmtpConfig(): Promise<SmtpConfig> {
  try {
    const [smtpHost] = await db.select({ value: settings.value }).from(settings).where(eq(settings.key, 'smtp_host'));
    const [smtpPort] = await db.select({ value: settings.value }).from(settings).where(eq(settings.key, 'smtp_port'));
    const [smtpEmail] = await db.select({ value: settings.value }).from(settings).where(eq(settings.key, 'smtp_email'));
    const [smtpPassword] = await db.select({ value: settings.value }).from(settings).where(eq(settings.key, 'smtp_password'));

    return {
      host: smtpHost?.value || '',
      port: smtpPort ? parseInt(smtpPort.value || '587', 10) : 587,
      email: smtpEmail?.value || '',
      password: smtpPassword?.value || '',
    };
  } catch {
    return {
      host: '',
      port: 587,
      email: '',
      password: '',
    };
  }
}

export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  options?: { from?: string; replyTo?: string },
): Promise<boolean> {
  const smtpConfig = await getSmtpConfig();

  if (!smtpConfig.host || !smtpConfig.email) {
    console.warn('SMTP non configure. Email non envoye.', { to, subject });
    return false;
  }

  const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
    secure: smtpConfig.port === 465,
    auth: {
      user: smtpConfig.email,
      pass: smtpConfig.password,
    },
  });

  try {
    await transporter.sendMail({
      from: options?.from || `"MACOF Holding" <${smtpConfig.email}>`,
      to,
      subject,
      html,
      replyTo: options?.replyTo,
    });
    console.log(`Email envoye a ${to}: ${subject}`);
    return true;
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return false;
  }
}

export async function sendNotificationEmail(demande: {
  reference: string;
  nom_complet: string;
  email: string;
  telephone?: string | null;
  societe?: string | null;
  fonction?: string | null;
  objet?: string | null;
  message: string;
  filiale?: string | null;
}): Promise<boolean> {
  const [notifEmail] = await db
    .select({ value: settings.value })
    .from(settings)
    .where(eq(settings.key, 'notification_email'));

  const recipient = notifEmail?.value || 'macofholding2018@gmail.com';

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #1a365d, #2d3748); color: white; padding: 20px 30px; }
        .header h1 { margin: 0; font-size: 22px; }
        .header p { margin: 5px 0 0; opacity: 0.9; }
        .content { padding: 25px 30px; }
        .field { margin-bottom: 15px; }
        .field-label { font-weight: bold; color: #4a5568; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; }
        .field-value { color: #2d3748; margin-top: 3px; padding: 8px 12px; background: #f7fafc; border-radius: 4px; border-left: 3px solid #1a365d; }
        .footer { background: #edf2f7; padding: 15px 30px; text-align: center; font-size: 12px; color: #718096; }
        .badge { display: inline-block; padding: 3px 10px; background: #ebf8ff; color: #2b6cb0; border-radius: 12px; font-size: 12px; font-weight: 600; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Nouvelle demande de contact</h1>
          <p>Référence: <span class="badge">${demande.reference}</span></p>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Nom complet</div>
            <div class="field-value">${demande.nom_complet}</div>
          </div>
          ${demande.societe ? `
          <div class="field">
            <div class="field-label">Société</div>
            <div class="field-value">${demande.societe}</div>
          </div>` : ''}
          ${demande.fonction ? `
          <div class="field">
            <div class="field-label">Fonction</div>
            <div class="field-value">${demande.fonction}</div>
          </div>` : ''}
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">${demande.email}</div>
          </div>
          ${demande.telephone ? `
          <div class="field">
            <div class="field-label">Téléphone</div>
            <div class="field-value">${demande.telephone}</div>
          </div>` : ''}
          ${demande.objet ? `
          <div class="field">
            <div class="field-label">Objet</div>
            <div class="field-value">${demande.objet}</div>
          </div>` : ''}
          ${demande.filiale ? `
          <div class="field">
            <div class="field-label">Filiale concernée</div>
            <div class="field-value">${demande.filiale}</div>
          </div>` : ''}
          <div class="field">
            <div class="field-label">Message</div>
            <div class="field-value">${demande.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>Cet email a été envoyé automatiquement par le site MACOF Holding.</p>
          <p>&copy; ${new Date().getFullYear()} MACOF Holding - Tous droits réservés</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const subject = `[MACOF Holding] Nouvelle demande - ${demande.reference} - ${demande.nom_complet}`;

  return sendEmail(recipient, subject, html, {
    replyTo: demande.email,
  });
}
