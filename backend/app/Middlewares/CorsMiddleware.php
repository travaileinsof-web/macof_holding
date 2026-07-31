<?php
declare(strict_types=1);

namespace App\Middlewares;

use App\Core\Request;

class CorsMiddleware
{
    public function handle(Request $request, \Closure $next)
    {
        $allowedOrigins = [
            'http://localhost:5173', // Vite Frontend (Dev)
            'http://localhost:3001', // Vite Frontend (Alternate port)
            'https://macof-holding.com', // Frontend Prod
            'https://admin.macof-holding.com' // Dashboard Prod
        ];

        $origin = $request->getHeader('Origin');

        if (in_array($origin, $allowedOrigins)) {
            header("Access-Control-Allow-Origin: $origin");
            header("Access-Control-Allow-Credentials: true");
            header("Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, OPTIONS");
            header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
        }

        // Si requête OPTIONS (Preflight), on répond 200 OK tout de suite
        if ($request->getMethod() === 'OPTIONS') {
            http_response_code(200);
            exit;
        }

        $next($request);
    }
}
