<?php
declare(strict_types=1);

namespace App\Core;

class Database
{
    private static ?\PDO $instance = null;

    public static function getInstance(): \PDO {
        if (self::$instance === null) {
            // Lecture des variables d'environnement
            $host = getenv('DB_HOST');
            $port = getenv('DB_PORT');
            $name = getenv('DB_NAME');
            $user = getenv('DB_USER');
            $pass = getenv('DB_PASSWORD');

            if (!$host || !$name || !$user) {
                die(json_encode(['success' => false, 'message' => 'Variables de base de données non configurées']));
            }
            $port = $port ?: 3306;

            try {
                self::$instance = new \PDO(
                    "mysql:host={$host};port={$port};dbname={$name};charset=utf8mb4",
                    $user,
                    $pass,
                    [
                        \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
                        \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
                        \PDO::ATTR_EMULATE_PREPARES => false,
                    ]
                );
            } catch (\PDOException $e) {
                die(json_encode(['success' => false, 'message' => 'Erreur de connexion à la base de données']));
            }
        }
        return self::$instance;
    }

    public static function query(string $sql, array $params = []): \PDOStatement
    {
        $stmt = self::getInstance()->prepare($sql);
        $stmt->execute($params);
        return $stmt;
    }
}
