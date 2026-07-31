<?php
declare(strict_types=1);

namespace App\Controllers;

use App\Core\Request;
use App\Core\Response;
use App\Core\Database;
use PDO;

class FilialeController
{
    public function index(Request $request): void
    {
        $pdo = Database::getInstance();

        $stmt = $pdo->query("SELECT * FROM filiales WHERE archived = 0 ORDER BY id ASC");
        $filiales = $stmt->fetchAll();

        Response::json(['success' => true, 'data' => $filiales]);
    }

    public function store(Request $request): void
    {
        $nom = htmlspecialchars($_POST['nom'] ?? '', ENT_QUOTES, 'UTF-8');
        $description = htmlspecialchars($_POST['description'] ?? '', ENT_QUOTES, 'UTF-8');
        $secteur = htmlspecialchars($_POST['secteur'] ?? '', ENT_QUOTES, 'UTF-8');
        $details = isset($_POST['details']) ? json_encode(array_filter(array_map('trim', explode("\n", $_POST['details'])))) : json_encode([]);

        if (empty($nom)) {
            Response::json(['success' => false, 'message' => 'Le nom de la filiale est obligatoire.'], 400);
            return;
        }

        $imagePath = null;
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $uploadDir = __DIR__ . '/../../public/uploads/filiales/';
            if (!is_dir($uploadDir)) mkdir($uploadDir, 0777, true);
            $ext = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));
            if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp'])) {
                // MIME type validation
                $finfo = finfo_open(FILEINFO_MIME_TYPE);
                $mime = finfo_file($finfo, $_FILES['image']['tmp_name']);
                finfo_close($finfo);
                $allowedMimes = ['image/jpeg', 'image/png', 'image/webp'];
                if (in_array($mime, $allowedMimes)) {
                    $filename = uniqid('filiale_') . '.' . $ext;
                    if (move_uploaded_file($_FILES['image']['tmp_name'], $uploadDir . $filename)) {
                        $imagePath = '/uploads/filiales/' . $filename;
                    }
                }
            }
        }

        $pdo = Database::getInstance();
        $stmt = $pdo->prepare("INSERT INTO filiales (nom, description, secteur, image_path, details_json) VALUES (?, ?, ?, ?, ?)");
        $stmt->execute([$nom, $description, $secteur, $imagePath, $details]);

        Response::json(['success' => true, 'message' => 'Filiale ajoutée avec succès.']);
    }

    public function update(Request $request, $id): void
    {
        $nom = htmlspecialchars($_POST['nom'] ?? '', ENT_QUOTES, 'UTF-8');
        $description = htmlspecialchars($_POST['description'] ?? '', ENT_QUOTES, 'UTF-8');
        $secteur = htmlspecialchars($_POST['secteur'] ?? '', ENT_QUOTES, 'UTF-8');
        $details = isset($_POST['details']) ? json_encode(array_filter(array_map('trim', explode("\n", $_POST['details'])))) : json_encode([]);

        $pdo = Database::getInstance();

        // Get old image
        $stmtOld = $pdo->prepare("SELECT image_url FROM filiales WHERE id = ? AND archived = 0");
        $stmtOld->execute([$id]);
        $oldImage = $stmtOld->fetchColumn();

        $imagePath = null;
        if (isset($_FILES['image']) && $_FILES['image']['error'] === UPLOAD_ERR_OK) {
            $uploadDir = __DIR__ . '/../../public/uploads/filiales/';
            if (!is_dir($uploadDir)) mkdir($uploadDir, 0777, true);
            $ext = strtolower(pathinfo($_FILES['image']['name'], PATHINFO_EXTENSION));
            if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp'])) {
                // MIME type validation
                $finfo = finfo_open(FILEINFO_MIME_TYPE);
                $mime = finfo_file($finfo, $_FILES['image']['tmp_name']);
                finfo_close($finfo);
                $allowedMimes = ['image/jpeg', 'image/png', 'image/webp'];
                if (in_array($mime, $allowedMimes)) {
                    $filename = uniqid('filiale_') . '.' . $ext;
                    if (move_uploaded_file($_FILES['image']['tmp_name'], $uploadDir . $filename)) {
                        $imagePath = '/uploads/filiales/' . $filename;
                    }
                }
            }
        }

        if ($imagePath) {
            $stmt = $pdo->prepare("UPDATE filiales SET nom = ?, description = ?, secteur = ?, image_path = ?, details_json = ? WHERE id = ?");
            $success = $stmt->execute([$nom, $description, $secteur, $imagePath, $details, $id]);
        } else {
            $stmt = $pdo->prepare("UPDATE filiales SET nom = ?, description = ?, secteur = ?, details_json = ? WHERE id = ?");
            $success = $stmt->execute([$nom, $description, $secteur, $details, $id]);
        }

        if ($success && $stmt->rowCount() > 0) {
            // Delete old image after successful update
            if ($imagePath && $oldImage && file_exists(__DIR__ . '/../../public/' . $oldImage)) {
                unlink(__DIR__ . '/../../public/' . $oldImage);
            }
            Response::json(['success' => true, 'message' => 'Filiale mise à jour']);
        } else {
            Response::json(['success' => false, 'message' => 'Filiale non trouvée ou aucune modification'], 404);
        }
    }

    public function destroy(Request $request, $id): void
    {
        $pdo = Database::getInstance();
        $stmt = $pdo->prepare("UPDATE filiales SET archived = 1 WHERE id = ?");
        $stmt->execute([$id]);

        Response::json(['success' => true, 'message' => 'Filiale supprimée.']);
    }
}
