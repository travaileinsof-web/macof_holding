<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Core\Request;
use App\Core\Response;
use App\Core\Database;
use PDO;

class GalerieController
{
    public function index(Request $request): void
    {
        $pdo = Database::getInstance();
        $stmt = $pdo->query("SELECT * FROM galerie WHERE archived = 0 ORDER BY id ASC");
        $galerie = $stmt->fetchAll();
        
        Response::json(['success' => true, 'data' => $galerie]);
    }
    
    public function store(Request $request): void
    {
        if (!isset($_FILES['image'])) {
            Response::json(['success' => false, 'message' => 'Aucune image envoyée.'], 400);
            return;
        }

        $titre = htmlspecialchars($_POST['titre'] ?? 'Sans titre', ENT_QUOTES, 'UTF-8');
        $filiale = htmlspecialchars($_POST['filiale'] ?? 'MACOF Holding', ENT_QUOTES, 'UTF-8');
        
        $uploadDir = __DIR__ . '/../../public/uploads/galerie/';
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0777, true);
        }

        $fileInfo = pathinfo($_FILES['image']['name']);
        $extension = strtolower($fileInfo['extension']);
        $allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif'];

        if (!in_array($extension, $allowedExtensions)) {
            Response::json(['success' => false, 'message' => 'Type de fichier non autorisé'], 422);
            return;
        }
        // Validate MIME type
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime = finfo_file($finfo, $_FILES['image']['tmp_name']);
        finfo_close($finfo);
        $allowedMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        if (!in_array($mime, $allowedMimes)) {
            Response::json(['success' => false, 'message' => 'Type MIME non autorisé'], 422);
            return;
        }

        $newFileName = uniqid('img_') . '.' . $extension;
        $destination = $uploadDir . $newFileName;

        if (move_uploaded_file($_FILES['image']['tmp_name'], $destination)) {
            $pdo = Database::getInstance();
            $stmt = $pdo->prepare("INSERT INTO galerie (titre, filiale, image_path) VALUES (?, ?, ?)");
            $stmt->execute([$titre, $filiale, '/uploads/galerie/' . $newFileName]);

            Response::json(['success' => true, 'message' => 'Image uploadée avec succès.']);
        } else {
            Response::json(['success' => false, 'message' => 'Erreur lors de l\'upload.'], 500);
        }
    }

    public function destroy(Request $request, $id): void
    {
        if (!$id) {
            Response::json(['success' => false, 'message' => 'ID manquant.'], 400);
            return;
        }

        $pdo = Database::getInstance();
        $stmt = $pdo->prepare("UPDATE galerie SET archived = 1 WHERE id = ?");
        $stmt->execute([$id]);

        Response::json(['success' => true, 'message' => 'Image supprimée avec succès.']);
    }
}
