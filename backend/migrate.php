<?php
$host = getenv('DB_HOST') ?: '127.0.0.1';
$port = getenv('DB_PORT') ?: '3306';
$name = getenv('DB_NAME') ?: 'gestion_admin';
$user = getenv('DB_USER') ?: 'root';
$pass = getenv('DB_PASSWORD') ?: '';

try {
    $pdo = new PDO("mysql:host={$host};port={$port};dbname={$name};charset=utf8mb4", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Table des filiales
    $pdo->exec("CREATE TABLE IF NOT EXISTS `filiales` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `nom` VARCHAR(255) NOT NULL,
        `slug` VARCHAR(255) NOT NULL UNIQUE,
        `description` TEXT,
        `secteur` VARCHAR(255),
        `image_url` VARCHAR(500),
        `details_json` JSON,
        `email` VARCHAR(255),
        `telephone` VARCHAR(50),
        `adresse` TEXT,
        `site_web` VARCHAR(255),
        `statut` ENUM('actif', 'inactif') DEFAULT 'actif',
        `archived` TINYINT(1) DEFAULT 0,
        `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;");
    echo "Table 'filiales' : OK\n";

    // Table des contenus de pages (CMS)
    $pdo->exec("CREATE TABLE IF NOT EXISTS `page_contents` (
        `id` INT AUTO_INCREMENT PRIMARY KEY,
        `page_slug` VARCHAR(100) NOT NULL,
        `section_key` VARCHAR(100) NOT NULL,
        `content_value` TEXT,
        `content_type` ENUM('text', 'html', 'image', 'json') DEFAULT 'text',
        `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        UNIQUE KEY `unique_section` (`page_slug`, `section_key`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;");
    echo "Table 'page_contents' : OK\n";

    // Indexes (ignorer l'erreur si déjà existants)
    $indexes = [
        'idx_demandes_filiale' => 'CREATE INDEX idx_demandes_filiale ON demandes_contact(filiale)',
        'idx_demandes_statut' => 'CREATE INDEX idx_demandes_statut ON demandes_contact(statut)',
        'idx_demandes_type' => 'CREATE INDEX idx_demandes_type ON demandes_contact(type_demande)',
        'idx_demandes_date' => 'CREATE INDEX idx_demandes_date ON demandes_contact(created_at)',
        'idx_galerie_filiale' => 'CREATE INDEX idx_galerie_filiale ON galerie(filiale)',
        'idx_catalogues_filiale' => 'CREATE INDEX idx_catalogues_filiale ON catalogues(filiale)',
    ];
    foreach ($indexes as $idxName => $sql) {
        try {
            $pdo->exec($sql);
            echo "Index '{$idxName}' : OK\n";
        } catch (\PDOException $e) {
            echo "Index '{$idxName}' : deja existant (ignore)\n";
        }
    }

    echo "Migration terminee avec succes.\n";
} catch (\PDOException $e) {
    echo "Erreur de migration. Verifiez la configuration de la base de donnees.\n";
}
