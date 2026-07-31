<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Core\Request;
use App\Core\Response;
use App\Core\Database;
use PDO;

class PageContentController
{
    // Récupérer le contenu d'une page (API PUBLIQUE)
    public function show(Request $request, $slug): void
    {
        $allowedSlugs = ['home', 'about'];
        if (!in_array($slug, $allowedSlugs)) {
            Response::error('Page non trouvée', 404);
            return;
        }

        $pdo = Database::getInstance();
        $stmt = $pdo->prepare("SELECT section_key, content_value, content_type FROM page_contents WHERE page_slug = ?");
        $stmt->execute([$slug]);
        $rows = $stmt->fetchAll();

        // Convert rows to key-value pairs
        $data = [];
        foreach ($rows as $row) {
            $data[$row['section_key']] = $row['content_value'];
        }

        Response::json(['success' => true, 'data' => $data]);
    }

    // Récupérer pour l'admin
    public function getAdmin(Request $request, $slug): void
    {
        $allowedSlugs = ['home', 'about'];
        if (!in_array($slug, $allowedSlugs)) {
            Response::error('Page non trouvée', 404);
            return;
        }

        $pdo = Database::getInstance();
        $stmt = $pdo->prepare("SELECT id, section_key, content_value, content_type FROM page_contents WHERE page_slug = ?");
        $stmt->execute([$slug]);

        Response::json(['success' => true, 'data' => $stmt->fetchAll()]);
    }

    // Mettre à jour une clé (API ADMIN)
    public function update(Request $request): void
    {
        $data = $request->all();
        if (empty($data) && !empty($_POST)) {
            $data = $_POST;
        }

        $page_slug = $_POST['page_slug'] ?? $data['page_slug'] ?? '';
        $section_key = $_POST['section_key'] ?? $data['section_key'] ?? '';

        if (empty($page_slug) || empty($section_key)) {
            Response::json(['success' => false, 'message' => 'Paramètres manquants.'], 400);
            return;
        }

        // Slug whitelist validation
        $allowedSlugs = ['home', 'about'];
        if (!in_array($page_slug, $allowedSlugs)) {
            Response::error('Page non trouvée', 404);
            return;
        }

        $content_value = $_POST['content_value'] ?? $data['content_value'] ?? '';

        // Si une image est envoyée
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $uploadDir = __DIR__ . '/../../public/uploads/pages/';
            if (!is_dir($uploadDir)) {
                mkdir($uploadDir, 0777, true);
            }

            $fileInfo = pathinfo($_FILES['image']['name']);
            $extension = strtolower($fileInfo['extension']);

            // Extension whitelist
            $allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];
            if (!in_array($extension, $allowedExtensions)) {
                Response::error('Type de fichier non autorisé', 422);
                return;
            }

            // MIME type validation
            $finfo = finfo_open(FILEINFO_MIME_TYPE);
            $mime = finfo_file($finfo, $_FILES['image']['tmp_name']);
            finfo_close($finfo);
            $allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
            if (!in_array($mime, $allowedMimes)) {
                Response::error('Type MIME non autorisé', 422);
                return;
            }

            $newFileName = uniqid('page_img_') . '.' . $extension;
            $destination = $uploadDir . $newFileName;

            if (move_uploaded_file($_FILES['image']['tmp_name'], $destination)) {
                $scheme = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https' : 'http';
                $host = $_SERVER['HTTP_HOST'] ?? 'localhost';
                $content_value = $scheme . '://' . $host . '/uploads/pages/' . $newFileName;
            }
        }

        $pdo = Database::getInstance();
        $stmt = $pdo->prepare("UPDATE page_contents SET content_value = ? WHERE page_slug = ? AND section_key = ?");
        $stmt->execute([$content_value, $page_slug, $section_key]);

        Response::json(['success' => true, 'message' => 'Contenu mis à jour avec succès.', 'new_value' => $content_value]);
    }
}
