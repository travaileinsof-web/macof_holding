<?php
spl_autoload_register(function ($class) {
    $prefix = 'App\\';
    $base_dir = __DIR__ . '/../app/';
    $len = strlen($prefix);
    if (strncmp($prefix, $class, $len) !== 0) return;
    require $base_dir . str_replace('\\', '/', substr($class, $len)) . '.php';
});

$router = require __DIR__ . '/../routes/api.php';
print_r($router->getRoutes());
