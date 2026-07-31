<?php
declare(strict_types=1);

namespace App\Middlewares;

use App\Core\Request;
use App\Core\Response;
use App\Core\JWT;

class AuthMiddleware
{
    public function handle(Request $request, \Closure $next)
    {
        $authHeader = $request->getHeader('Authorization');

        if (!$authHeader || !preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            Response::error('Non authentifié. Token manquant.', 401);
            return;
        }

        $token = $matches[1];
        $secret = getenv('JWT_SECRET');
        if (!$secret) {
            Response::error('Configuration serveur invalide', 500);
            return;
        }

        $payload = JWT::decode($token, $secret);

        if (!$payload) {
            Response::error('Token invalide ou expiré.', 401);
            return;
        }

        // Ajouter les informations de l'utilisateur à la requête pour les contrôleurs
        $_SERVER['AUTH_USER'] = $payload;

        $next($request);
    }
}
