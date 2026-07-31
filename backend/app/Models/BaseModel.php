<?php
declare(strict_types=1);

namespace App\Models;

use App\Core\Database;

abstract class BaseModel
{
    protected static string $table = '';

    private static function isValidColumn(string $key): bool
    {
        return preg_match('/^[a-zA-Z_][a-zA-Z0-9_]*$/', $key) === 1;
    }

    public static function findById(int $id): ?array
    {
        $sql = "SELECT * FROM `" . static::$table . "` WHERE id = :id AND archived = 0 LIMIT 1";
        $stmt = Database::query($sql, ['id' => $id]);
        $result = $stmt->fetch();
        
        return $result ?: null;
    }

    public static function findAll(array $conditions = [], string $orderBy = 'id DESC'): array
    {
        $sql = "SELECT * FROM `" . static::$table . "` WHERE archived = 0";
        $params = [];

        foreach ($conditions as $key => $value) {
            if (!self::isValidColumn($key)) {
                throw new \InvalidArgumentException('Nom de colonne invalide: ' . $key);
            }
            $sql .= " AND `$key` = :$key";
            $params[$key] = $value;
        }

        if ($orderBy && !self::isValidColumn($orderBy)) {
            throw new \InvalidArgumentException('OrderBy invalide: ' . $orderBy);
        }
        $sql .= " ORDER BY $orderBy";
        
        $stmt = Database::query($sql, $params);
        return $stmt->fetchAll();
    }

    public static function create(array $data): int
    {
        foreach ($data as $key => $value) {
            if (!self::isValidColumn($key)) {
                throw new \InvalidArgumentException('Nom de colonne invalide: ' . $key);
            }
        }

        $columns = implode(', ', array_keys($data));
        $placeholders = ':' . implode(', :', array_keys($data));
        
        $sql = "INSERT INTO `" . static::$table . "` ($columns) VALUES ($placeholders)";
        Database::query($sql, $data);
        
        return (int) Database::getInstance()->lastInsertId();
    }

    public static function update(int $id, array $data): bool
    {
        $setClause = [];
        foreach ($data as $key => $value) {
            if (!self::isValidColumn($key)) {
                throw new \InvalidArgumentException('Nom de colonne invalide: ' . $key);
            }
            $setClause[] = "`$key` = :$key";
        }
        $setClause = implode(', ', $setClause);
        
        $sql = "UPDATE `" . static::$table . "` SET $setClause WHERE id = :id";
        $data['id'] = $id;
        
        $stmt = Database::query($sql, $data);
        return $stmt->rowCount() > 0;
    }

    public static function softDelete(int $id): bool
    {
        $sql = "UPDATE `" . static::$table . "` SET archived = 1 WHERE id = :id";
        $stmt = Database::query($sql, ['id' => $id]);
        return $stmt->rowCount() > 0;
    }
}
