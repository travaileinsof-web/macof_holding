<?php
declare(strict_types=1);

namespace App\Core;

class Router
{
    private array $routes = [];
    private array $middleware = [];

    public function get(string $path, string $handler, array $middleware = []): void {
        $this->addRoute('GET', $path, $handler, $middleware);
    }

    public function post(string $path, string $handler, array $middleware = []): void {
        $this->addRoute('POST', $path, $handler, $middleware);
    }

    public function put(string $path, string $handler, array $middleware = []): void {
        $this->addRoute('PUT', $path, $handler, $middleware);
    }

    public function patch(string $path, string $handler, array $middleware = []): void {
        $this->addRoute('PATCH', $path, $handler, $middleware);
    }

    public function delete(string $path, string $handler, array $middleware = []): void {
        $this->addRoute('DELETE', $path, $handler, $middleware);
    }

    public function group(string $prefix, array $middleware, callable $callback): void {
        $tempRouter = new Router();
        $callback($tempRouter);
        foreach ($tempRouter->getRoutes() as $route) {
            $route['path'] = $prefix . $route['path'];
            $route['middleware'] = array_merge($middleware, $route['middleware']);
            $this->routes[] = $route;
        }
    }

    private function addRoute(string $method, string $path, string $handler, array $middleware): void {
        $this->routes[] = [
            'method' => $method,
            'path' => $path,
            'handler' => $handler,
            'middleware' => $middleware
        ];
    }

    public function getRoutes(): array {
        return $this->routes;
    }

    public function addRouteRaw(array $route): void {
        $this->routes[] = $route;
    }

    public function dispatch(Request $request): void
    {
        $uri = $request->getUri();
        $method = $request->getMethod();

        // CORS is handled by CorsMiddleware on route groups
        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, PATCH, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');

        // Handling CORS preflight
        if ($method === 'OPTIONS') {
            http_response_code(200);
            exit;
        }

        foreach ($this->routes as $route) {
            $pattern = preg_replace('/\{([a-zA-Z0-9_]+)\}/', '(?P<$1>[a-zA-Z0-9_-]+)', $route['path']);
            $pattern = '#^' . $pattern . '$#';

            if ($route['method'] === $method && preg_match($pattern, $uri, $matches)) {

                // Exécuter les middlewares
                foreach ($route['middleware'] as $middlewareClass) {
                    // Instanciation simple du middleware (à améliorer avec IoC plus tard)
                    $middleware = new $middlewareClass();
                    $middleware->handle($request, function($req) {});
                }

                $params = [];
                foreach ($matches as $key => $value) {
                    if (is_string($key)) {
                        $params[$key] = $value;
                    }
                }

                // After middleware loop, call the actual controller
                $controllerMethod = $route['handler'];
                [$controllerClass, $methodName] = explode('@', $controllerMethod);

                if (class_exists($controllerClass)) {
                    $controllerInstance = new $controllerClass();
                    if (method_exists($controllerInstance, $methodName)) {
                        $controllerInstance->$methodName($request, ...array_values($params));
                        return;
                    }
                }
            }
        }

        // After the route loop, check if path exists with different method
        $pathExists = false;
        foreach ($this->routes as $route) {
            if ($route['path'] === $uri) {
                $pathExists = true;
                break;
            }
        }
        if ($pathExists) {
            http_response_code(405);
            Response::error('Méthode non autorisée', 405);
        } else {
            Response::error('Page non trouvée', 404);
        }
    }
}
