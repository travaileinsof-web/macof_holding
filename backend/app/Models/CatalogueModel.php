<?php
declare(strict_types=1);

namespace App\Models;

class CatalogueModel extends BaseModel
{
    protected static string $table = 'catalogues';

    public static function incrementDownloads(int $id): bool
    {
        $sql = "UPDATE `" . static::$table . "` SET telechargements = telechargements + 1 WHERE id = :id";
        $stmt = \App\Core\Database::query($sql, ['id' => $id]);
        return $stmt->rowCount() > 0;
    }
}
