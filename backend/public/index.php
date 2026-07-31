<?php
declare(strict_types=1);

// Si on utilise le serveur interne de PHP, on sert les fichiers statiques (CSS, JS, images)
if (php_sapi_name() === 'cli-server') {
    $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    $requestedFile = realpath(__DIR__ . $path);
    if ($path !== '/' && $requestedFile !== false && strpos($requestedFile, realpath(__DIR__)) === 0 && is_file($requestedFile)) {
        return false; // Let PHP built-in server serve static files
    }
}

// Autoloader basique PSR-4
spl_autoload_register(function ($class) {
    $prefix = 'App\\';
    $base_dir = __DIR__ . '/../app/';
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) {
        return;
    }
    $relative_class = substr($class, $len);
    $file = $base_dir . str_replace('\\', '/', $relative_class) . '.php';
    if (file_exists($file)) {
        require $file;
    }
});

use App\Core\Request;

// Initialiser les routes (en isolant la portée pour éviter l'écrasement de la variable $router)
$apiRouter = (function() {
    return require __DIR__ . '/../routes/api.php';
})();
$webRouter = (function() {
    return require __DIR__ . '/../routes/web.php';
})();

// Fusionner les routes web dans le routeur principal
foreach ($webRouter->getRoutes() as $route) {
    $apiRouter->addRouteRaw($route);
}

set_exception_handler(function ($e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur interne du serveur']);
    exit;
});

$request = new App\Core\Request();
$apiRouter->dispatch($request);
