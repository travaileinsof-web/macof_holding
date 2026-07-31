<?php
declare(strict_types=1);

use App\Core\Router;

$router = new Router();

// Routes Web pour l'administration
$router->group('/admin', [], function(Router $r) {

    // Page de connexion
    $r->get('/login', 'App\Controllers\AdminController@login');

    // Pages du dashboard - PROTÉGÉES par middleware JWT
    $r->group('', [\App\Middlewares\AuthMiddleware::class], function ($r) {
        $r->get('', 'App\Controllers\AdminController@dashboard');
        $r->get('/', 'App\Controllers\AdminController@dashboard');
        $r->get('/dashboard', 'App\Controllers\AdminController@dashboard');
        $r->get('/demandes', 'App\Controllers\AdminController@demandes');
        $r->get('/catalogues', 'App\Controllers\AdminController@catalogues');
        $r->get('/galerie', 'App\Controllers\AdminController@galerie');
        $r->get('/filiales', 'App\Controllers\AdminController@filiales');
        $r->get('/pages/home', 'App\Controllers\AdminController@pagesHome');
        $r->get('/pages/about', 'App\Controllers\AdminController@pagesAbout');
    });
});

return $router;
