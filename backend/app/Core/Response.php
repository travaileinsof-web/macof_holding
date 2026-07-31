<?php
declare(strict_types=1);

namespace App\Core;

class Response
{
    public static function json(array $data, int $statusCode = 200): void
    {
        http_response_code($statusCode);
        header('Content-Type: application/json; charset=utf-8');
        $json = json_encode($data, JSON_UNESCAPED_UNICODE);
        if ($json === false) {
            echo json_encode(['success' => false, 'message' => 'Erreur de réponse']);
        } else {
            echo $json;
        }
        exit;
    }

    public static function success($data = null, string $message = 'Opération réussie', array $meta = null): void
    {
        $response = [
            'success' => true,
            'message' => $message
        ];

        if ($data !== null) {
            $response['data'] = $data;
        }

        if ($meta !== null) {
            $response['meta'] = $meta;
        }

        self::json($response, 200);
    }

    public static function error(string $message, int $statusCode = 400, array $errors = []): void
    {
        $response = [
            'success' => false,
            'message' => $message
        ];

        if (!empty($errors)) {
            $response['errors'] = $errors;
        }

        self::json($response, $statusCode);
    }
}
