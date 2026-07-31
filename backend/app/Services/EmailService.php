<?php
declare(strict_types=1);

namespace App\Services;

class EmailService
{
    /**
     * Simulation d'envoi d'email via la fonction mail() native de PHP 
     * pour compatibilité avec les hébergements mutualisés basiques
     */
    public static function send(string $to, string $subject, string $htmlBody, string $replyTo = null): bool
    {
        $adminEmail = getenv('SMTP_USER') ?: 'contact@macof-holding.com';
        
        $headers  = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf-8\r\n";
        $headers .= "From: MACOF Holding <no-reply@macof-holding.com>\r\n";
        
        if ($replyTo) {
            // Sanitize to prevent header injection
            $replyTo = str_replace(["\r", "\n", "\t"], '', $replyTo);
            if (!filter_var($replyTo, FILTER_VALIDATE_EMAIL)) {
                $replyTo = null;
            }
        }
        if ($replyTo) {
            $headers .= "Reply-To: $replyTo\r\n";
        }

        // Dans un environnement de production réel, l'utilisation de PHPMailer via Composer 
        // serait recommandée, mais la fonction mail() est la plus simple pour démarrer 
        // sans autoloader complexe sur Hostinger.
        return mail($to, $subject, $htmlBody, $headers);
    }

    public static function sendNotificationNouveauLead(array $demande): void
    {
        $to = getenv('ADMIN_EMAIL') ?: 'direction@macof-holding.com';
        $subject = "[MACOF Holding] Nouvelle demande reçue : " . $demande['reference'];
        
        $html = "<h2>Nouvelle demande de contact / devis</h2>";
        $html .= "<p><strong>Filiale :</strong> " . htmlspecialchars($demande['filiale'], ENT_QUOTES, 'UTF-8') . "</p>";
        $html .= "<p><strong>Nom :</strong> " . htmlspecialchars($demande['nom_complet'], ENT_QUOTES, 'UTF-8') . "</p>";
        $html .= "<p><strong>Email :</strong> " . htmlspecialchars($demande['email'], ENT_QUOTES, 'UTF-8') . "</p>";
        $html .= "<p><strong>Téléphone :</strong> " . htmlspecialchars($demande['telephone'], ENT_QUOTES, 'UTF-8') . "</p>";
        $html .= "<p><strong>Message :</strong><br>" . nl2br(htmlspecialchars($demande['message'], ENT_QUOTES, 'UTF-8')) . "</p>";

        self::send($to, $subject, $html, $demande['email']);
    }
}
