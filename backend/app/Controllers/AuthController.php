<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Core\Request;
use App\Core\Response;
use App\Core\JWT;
use App\Models\AdminModel;

class AuthController
{
    public function login(Request $request)
    {
        $email = $request->input('email');
        $password = $request->input('password');

        if (!$email || !$password) {
            return Response::error('Email et mot de passe requis.', 400);
        }

        // Rate limiting basique (5 tentatives par minute par IP)
        $ip = $_SERVER['REMOTE_ADDR'];
        $rateLimitFile = sys_get_temp_dir() . '/rate_limit_' . md5($ip);
        $attempts = 0;
        $lastAttempt = 0;
        if (file_exists($rateLimitFile)) {
            $data = json_decode(file_get_contents($rateLimitFile), true);
            $attempts = $data['attempts'] ?? 0;
            $lastAttempt = $data['last_attempt'] ?? 0;
        }
        if ($attempts >= 5 && (time() - $lastAttempt) < 60) {
            Response::error('Trop de tentatives. Réessayez dans 1 minute.', 429);
            return;
        }

        $admin = AdminModel::findByEmail($email);

        if (!$admin || !AdminModel::verifyPassword($password, $admin['password_hash'])) {
            $attempts++;
            $lastAttempt = time();
            file_put_contents($rateLimitFile, json_encode(['attempts' => $attempts, 'last_attempt' => $lastAttempt]));
            Response::error('Email ou mot de passe incorrect', 401);
            return;
        }
        // Reset attempts on success
        @unlink($rateLimitFile);

        $secret = getenv('JWT_SECRET');
        if (!$secret) {
            Response::error('Configuration serveur invalide', 500);
            return;
        }

        $payload = [
            'id' => $admin['id'],
            'email' => $admin['email'],
            'role' => $admin['role'],
            'filiale_attribuee' => $admin['filiale_attribuee']
        ];

        $token = JWT::encode($payload, $secret, 1440); // 24h expiration

        return Response::success([
            'token' => $token,
            'user' => [
                'id' => $admin['id'],
                'nom' => $admin['nom'],
                'email' => $admin['email'],
                'role' => $admin['role']
            ]
        ], 'Connexion réussie.');
    }
}
