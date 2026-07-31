<?php
declare(strict_types=1);

namespace App\Services;

class UploadService
{
    /**
     * Uploader un fichier de manière sécurisée hors du webroot si possible.
     */
    public static function upload(array $file, string $subDir = 'general'): ?string
    {
        if ($file['error'] !== UPLOAD_ERR_OK) {
            return null;
        }
        
        // Size validation (max 10MB)
        $maxSize = 10 * 1024 * 1024;
        if ($file['size'] > $maxSize) {
            throw new \Exception('Fichier trop volumineux (max 10 Mo)');
        }
        
        // Extension whitelist
        $allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'pdf', 'doc', 'docx'];
        $fileInfo = pathinfo($file['name']);
        $extension = strtolower($fileInfo['extension'] ?? '');
        
        if (!in_array($extension, $allowedExtensions)) {
            throw new \Exception('Type de fichier non autorisé');
        }
        
        // MIME type validation
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mime = finfo_file($finfo, $file['tmp_name']);
        finfo_close($finfo);
        
        $imageMimes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
        $docMimes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        
        if (!in_array($mime, array_merge($imageMimes, $docMimes))) {
            throw new \Exception('Type MIME non autorisé');
        }
        
        $newFileName = uniqid('file_') . '.' . $extension;
        $uploadDir = __DIR__ . '/../../storage/uploads/' . $subDir;
        
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }
        
        $destination = $uploadDir . '/' . $newFileName;
        if (move_uploaded_file($file['tmp_name'], $destination)) {
            return 'storage/uploads/' . $subDir . '/' . $newFileName;
        }
        
        return null;
    }
}
