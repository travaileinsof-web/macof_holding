<?php
declare(strict_types=1);

namespace App\Core;

class JWT
{
    /**
     * Génère un token JWT
     */
    public static function encode(array $payload, string $secret, int $expiryMinutes = 1440): string
    {
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
        $payload['exp'] = time() + ($expiryMinutes * 60);
        $payload['iat'] = time();
        $payloadJson = json_encode($payload);

        $base64UrlHeader = self::base64UrlEncode($header);
        $base64UrlPayload = self::base64UrlEncode($payloadJson);

        $signature = hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true);
        $base64UrlSignature = self::base64UrlEncode($signature);

        return $base64UrlHeader . "." . $base64UrlPayload . "." . $base64UrlSignature;
    }

    /**
     * Décode et valide un token JWT
     */
    public static function decode(string $token, string $secret): ?array
    {
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            return null; // Format invalide
        }

        list($base64UrlHeader, $base64UrlPayload, $base64UrlSignature) = $parts;

        // Validate algorithm header
        $header = json_decode($this->base64UrlDecode($base64UrlHeader), true);
        if (!$header || ($header['alg'] ?? '') !== 'HS256') {
            return false;
        }

        $signature = self::base64UrlEncode(
            hash_hmac('sha256', $base64UrlHeader . "." . $base64UrlPayload, $secret, true)
        );

        if (!hash_equals($signature, $base64UrlSignature)) {
            return null; // Signature invalide
        }

        $payload = json_decode(self::base64UrlDecode($base64UrlPayload), true);

        if (isset($payload['exp']) && $payload['exp'] < time()) {
            return null; // Expiré
        }

        return $payload;
    }

    private static function base64UrlEncode(string $data): string
    {
        return str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($data));
    }

    private static function base64UrlDecode(string $data): string
    {
        $padding = strlen($data) % 4;
        if ($padding > 0) {
            $data .= str_repeat('=', 4 - $padding);
        }
        return base64_decode(str_replace(['-', '_'], ['+', '/'], $data));
    }
}
