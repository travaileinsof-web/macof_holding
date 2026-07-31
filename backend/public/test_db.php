<?php
$host = getenv('DB_HOST') ?: '127.0.0.1';
$port = getenv('DB_PORT') ?: '3306';
$name = getenv('DB_NAME') ?: 'gestion_admin';
$user = getenv('DB_USER') ?: 'root';
$pass = getenv('DB_PASSWORD') ?: '';

try {
    $pdo = new PDO("mysql:host={$host};port={$port};dbname={$name};charset=utf8mb4", $user, $pass);
    echo 'OK: ' . $pdo->query('SELECT COUNT(*) FROM administrateurs')->fetchColumn();
} catch (Exception $e) {
    echo 'Erreur de connexion a la base de donnees. Verifiez la configuration.';
}
