<?php
declare(strict_types=1);

use App\Core\Router;
use App\Core\Response;

$router = new Router();

// Routes publiques
$router->group('/api/v1', [], function(Router $r) {
    
    // Auth
    $r->post('/auth/login', 'App\Controllers\AuthController@login');
    
    // Demandes (leads depuis le site)
    $r->post('/demandes', 'App\Controllers\DemandeController@store');

    // Catalogues (consultation publique)
    $r->get('/catalogues', 'App\Controllers\CatalogueController@index');

    // Galerie (consultation publique)
    $r->get('/galerie', 'App\Controllers\GalerieController@index');

    // Filiales (consultation publique)
    $r->get('/filiales', 'App\Controllers\FilialeController@index');

    // Pages (consultation publique)
    $r->get('/pages/{slug}', 'App\Controllers\PageContentController@show');
});

// Routes protégées (Dashboard)
$router->group('/api/v1/admin', ['App\Middlewares\AuthMiddleware'], function(Router $r) {
    
    // Contenu Pages
    $r->get('/pages/{slug}', 'App\Controllers\PageContentController@getAdmin');
    $r->put('/pages', 'App\Controllers\PageContentController@update');

    // Demandes
    $r->get('/demandes', 'App\Controllers\DemandeController@index');
    $r->get('/demandes/{id}', 'App\Controllers\DemandeController@show');
    $r->patch('/demandes/{id}/status', 'App\Controllers\DemandeController@updateStatus');
    $r->delete('/demandes/{id}', 'App\Controllers\DemandeController@destroy');
    
    // Catalogues
    $r->post('/catalogues', 'App\Controllers\CatalogueController@store');
    $r->put('/catalogues/{id}', 'App\Controllers\CatalogueController@update');
    $r->delete('/catalogues/{id}', 'App\Controllers\CatalogueController@destroy');

    // Galerie
    $r->get('/galerie', 'App\Controllers\GalerieController@index');
    $r->post('/galerie', 'App\Controllers\GalerieController@store');
    $r->delete('/galerie/{id}', 'App\Controllers\GalerieController@destroy');

    // Filiales
    $r->get('/filiales', 'App\Controllers\FilialeController@index');
    $r->post('/filiales', 'App\Controllers\FilialeController@store');
    $r->post('/filiales/{id}', 'App\Controllers\FilialeController@update');
    $r->delete('/filiales/{id}', 'App\Controllers\FilialeController@destroy');

});

return $router;
