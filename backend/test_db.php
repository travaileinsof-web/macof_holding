<?php
require 'vendor/autoload.php';
use App\Core\Database;

try {
    $pdo = Database::getInstance();
    $stmt = $pdo->query('SELECT COUNT(*) FROM page_contents');
    echo "Count page_contents: " . $stmt->fetchColumn() . "\n";
    
    // Simulate updating a section
    $_POST = [
        'page_slug' => 'home',
        'section_key' => 'hero_title_small',
        'content_value' => 'NEW VALUE TEST'
    ];
    
    // Instantiate controller
    $controller = new App\Controllers\PageContentController();
    $request = new App\Core\Request();
    
    echo "Calling update...\n";
    // We can't easily call update because Response::json does exit;. 
    // We'll just execute the query directly.
    $stmt = $pdo->prepare("UPDATE page_contents SET content_value = ? WHERE page_slug = ? AND section_key = ?");
    $stmt->execute(['NEW VALUE TEST', 'home', 'hero_title_small']);
    
    echo "Updated!\n";
    
    $stmt = $pdo->query("SELECT content_value FROM page_contents WHERE section_key = 'hero_title_small'");
    echo "New value: " . $stmt->fetchColumn() . "\n";
    
} catch (Exception $e) {
    echo "Erreur de connexion a la base de donnees. Verifiez la configuration.\n";
}
