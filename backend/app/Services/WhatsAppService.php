<?php
declare(strict_types=1);

namespace App\Services;

class WhatsAppService
{
    /**
     * Envoi d'une notification via l'API WhatsApp Business
     */
    public static function sendNotificationNouveauLead(array $demande): bool
    {
        $apiUrl = getenv('WHATSAPP_API_URL');
        $phoneId = getenv('WHATSAPP_PHONE_ID');
        $token = getenv('WHATSAPP_TOKEN');
        $adminPhone = getenv('ADMIN_WHATSAPP_PHONE');

        if (!$apiUrl || !$token || !$adminPhone) {
            error_log('WhatsAppService: Configuration manquante (URL, token ou téléphone admin)');
            return false;
        }

        $endpoint = "{$apiUrl}/{$phoneId}/messages";
        
        $messageText = "🚨 *Nouvelle Demande - MACOF {$demande['filiale']}*\n\n"
                     . "Ref: {$demande['reference']}\n"
                     . "Nom: {$demande['nom_complet']}\n"
                     . "Sujet: {$demande['objet']}\n\n"
                     . "Veuillez consulter le Dashboard pour plus de détails.";

        $payload = [
            'messaging_product' => 'whatsapp',
            'to' => $adminPhone,
            'type' => 'text',
            'text' => ['body' => $messageText]
        ];

        $ch = curl_init($endpoint);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Authorization: Bearer ' . $token,
            'Content-Type: application/json'
        ]);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        return $httpCode === 200;
    }
}
