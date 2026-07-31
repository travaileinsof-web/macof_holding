<?php
declare(strict_types=1);

namespace App\Models;

use App\Core\Database;

class AdminModel extends BaseModel
{
    protected static string $table = 'administrateurs';

    public static function findByEmail(string $email): ?array
    {
        $sql = "SELECT * FROM `" . static::$table . "` WHERE email = :email AND archived = 0 LIMIT 1";
        $stmt = Database::query($sql, ['email' => $email]);
        $result = $stmt->fetch();
        
        return $result ?: null;
    }

    public static function verifyPassword(string $password, string $hash): bool
    {
        return password_verify($password, $hash);
    }
}
