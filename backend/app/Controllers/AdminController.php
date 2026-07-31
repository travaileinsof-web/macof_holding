<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Core\Request;
use App\Core\View;

class AdminController
{
    public function login(Request $request): void
    {
        View::render('admin/login', [
            'title' => 'Connexion | MACOF Holding Admin'
        ]);
    }

    private function checkAuth(): void
    {
        $headers = getallheaders();
        $token = $_GET['token'] ?? ($_COOKIE['admin_token'] ?? null);
        if ($headers && isset($headers['Authorization'])) {
            $authHeader = $headers['Authorization'];
            if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
                $token = $matches[1];
            }
        }
        if (!$token) {
            header('Location: /admin/login');
            exit;
        }
        // Verify token
        $jwt = new \App\Core\JWT();
        $secret = getenv('JWT_SECRET');
        if (!$secret || !$jwt->decode($token, $secret)) {
            header('Location: /admin/login');
            exit;
        }
    }

    public function dashboard(Request $request): void
    {
        $this->checkAuth();
        View::render('admin/dashboard', [
            'title' => 'Tableau de bord | MACOF Holding Admin'
        ]);
    }

    public function demandes(Request $request): void
    {
        $this->checkAuth();
        View::render('admin/demandes', [
            'title' => 'Gestion des demandes | MACOF Holding Admin'
        ]);
    }

    public function catalogues(Request $request): void
    {
        $this->checkAuth();
        View::render('admin/catalogues', [
            'title' => 'Gestion des catalogues | MACOF Holding Admin'
        ]);
    }

    public function galerie(Request $request): void
    {
        $this->checkAuth();
        View::render('admin/galerie', [
            'title' => 'Gestion de la galerie | MACOF Holding Admin'
        ]);
    }

    public function filiales(Request $request): void
    {
        $this->checkAuth();
        View::render('admin/filiales', [
            'title' => 'Gestion des filiales | MACOF Holding Admin'
        ]);
    }

    public function pagesHome(Request $request): void
    {
        $this->checkAuth();
        View::render('admin/pages', [
            'slug' => 'home',
            'title' => 'Accueil | MACOF Holding Admin'
        ]);
    }

    public function pagesAbout(Request $request): void
    {
        $this->checkAuth();
        View::render('admin/pages', [
            'slug' => 'about',
            'title' => 'À Propos | MACOF Holding Admin'
        ]);
    }
}
