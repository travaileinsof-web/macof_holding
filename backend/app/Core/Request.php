<?php
declare(strict_types=1);

namespace App\Core;

class Request
{
    private array $get;
    private array $post;
    private array $server;
    private array $files;
    private ?array $jsonBody = null;

    public function __construct()
    {
        $this->get = $_GET;
        $this->post = $_POST;
        $this->server = $_SERVER;
        $this->files = $_FILES;

        // Parsing du body JSON si le Content-Type est application/json
        $contentType = $this->server['CONTENT_TYPE'] ?? '';
        if (strpos($contentType, 'application/json') !== false) {
            $json = file_get_contents('php://input');
            $this->jsonBody = json_decode($json, true) ?? [];
        }
    }

    public function getMethod(): string
    {
        return $this->server['REQUEST_METHOD'] ?? 'GET';
    }

    public function getUri(): string
    {
        $uri = $this->server['REQUEST_URI'] ?? '/';
        $position = strpos($uri, '?');
        if ($position !== false) {
            $uri = substr($uri, 0, $position);
        }
        return $uri;
    }

    public function input(string $key, $default = null)
    {
        if ($this->jsonBody !== null && isset($this->jsonBody[$key])) {
            return $this->jsonBody[$key];
        }
        return $this->post[$key] ?? $this->get[$key] ?? $default;
    }

    public function all(): array
    {
        if ($this->jsonBody !== null) {
            return array_merge($this->get, $this->jsonBody);
        }
        return array_merge($this->get, $this->post);
    }

    public function file(string $key): ?array
    {
        return $this->files[$key] ?? null;
    }

    public function getHeader(string $header): ?string
    {
        $headerName = 'HTTP_' . str_replace('-', '_', strtoupper($header));
        return $this->server[$headerName] ?? null;
    }

    public function csrfToken(): string
    {
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
        if (empty($_SESSION['csrf_token'])) {
            $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
        }
        return $_SESSION['csrf_token'];
    }

    public function validateCsrf(): bool
    {
        $token = $this->input('_token') ?? $this->getHeader('X-CSRF-Token');
        if (session_status() === PHP_SESSION_NONE) {
            session_start();
        }
        return isset($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], $token ?? '');
    }
}
