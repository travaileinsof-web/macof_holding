<?php
require 'app/Core/Database.php';

use App\Core\Database;

try {
    $pdo = Database::getInstance();
    $stmt = $pdo->query("SELECT COUNT(*) FROM page_contents");
    $count = $stmt->fetchColumn();
    echo "Count page_contents: " . $count . "\n";
    
    $stmt = $pdo->query("SELECT * FROM filiales");
    echo "Count filiales: " . count($stmt->fetchAll()) . "\n";

} catch (Exception $e) {
    echo "Erreur de connexion a la base de donnees. Verifiez la configuration.\n";
}
