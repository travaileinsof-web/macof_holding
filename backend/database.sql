-- Base de données pour MACOF Holding

CREATE TABLE IF NOT EXISTS `administrateurs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nom` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` ENUM('admin', 'editeur') DEFAULT 'editeur',
  `filiale_attribuee` VARCHAR(100) NULL, -- Si NULL, accès complet
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `archived` TINYINT(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `demandes_contact` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `reference` VARCHAR(50) NOT NULL UNIQUE, -- Ex: IMMO-20260623-001
  `filiale` VARCHAR(100) NOT NULL,
  `type_demande` ENUM('devis', 'reservation', 'partenariat', 'contact', 'commande') NOT NULL,
  `civilite` VARCHAR(20) NULL,
  `nom_complet` VARCHAR(150) NOT NULL,
  `email` VARCHAR(150) NOT NULL,
  `telephone` VARCHAR(50) NOT NULL,
  `societe` VARCHAR(150) NULL,
  `fonction` VARCHAR(100) NULL,
  `objet` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  `details_json` JSON NULL, -- Données spécifiques (surface, budget, date evénement, etc.)
  `piece_jointe_path` VARCHAR(255) NULL,
  `statut` ENUM('nouveau', 'en_cours', 'traite', 'rejete', 'archive') DEFAULT 'nouveau',
  `notes_internes` TEXT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `archived` TINYINT(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `catalogues` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `titre` VARCHAR(255) NOT NULL,
  `filiale` VARCHAR(100) NOT NULL,
  `type_document` VARCHAR(50) NOT NULL, -- Plaquette, Catalogue, Fiche technique...
  `file_path` VARCHAR(255) NOT NULL,
  `taille_ko` INT NOT NULL,
  `format` VARCHAR(10) NOT NULL, -- PDF, DOCX
  `telechargements` INT DEFAULT 0,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `archived` TINYINT(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `galerie` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `titre` VARCHAR(255) NOT NULL,
  `filiale` VARCHAR(100) NOT NULL,
  `type_projet` VARCHAR(100) NULL,
  `lieu` VARCHAR(150) NULL,
  `date_realisation` DATE NULL,
  `description_courte` TEXT NULL,
  `image_path` VARCHAR(255) NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `archived` TINYINT(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE IF NOT EXISTS `chatbot_logs` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `session_id` VARCHAR(100) NOT NULL,
  `intention_detectee` VARCHAR(100) NULL,
  `filiale_orientee` VARCHAR(100) NULL,
  `conversation_json` JSON NOT NULL,
  `statut_resolution` ENUM('resolu', 'transfere_humain', 'abandonne') NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Insertion de l'admin principal (mot de passe hashé en bcrypt)
INSERT INTO `administrateurs` (`nom`, `email`, `password_hash`, `role`) VALUES 
('Super Admin', 'admin@macof-holding.com', '$2y$10$eE0L.u42b0.3Yv3.B11xOeZ.BwO9S1y/51R0P35M1P32s9h/H2.9C', 'admin');

-- Table des filiales
CREATE TABLE IF NOT EXISTS `filiales` (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table des contenus de pages (CMS)
CREATE TABLE IF NOT EXISTS `page_contents` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `page_slug` VARCHAR(100) NOT NULL,
    `section_key` VARCHAR(100) NOT NULL,
    `content_value` TEXT,
    `content_type` ENUM('text', 'html', 'image', 'json') DEFAULT 'text',
    `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY `unique_section` (`page_slug`, `section_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Indexes
CREATE INDEX idx_demandes_filiale ON demandes_contact(filiale);
CREATE INDEX idx_demandes_statut ON demandes_contact(statut);
CREATE INDEX idx_demandes_type ON demandes_contact(type_demande);
CREATE INDEX idx_demandes_date ON demandes_contact(created_at);
CREATE INDEX idx_galerie_filiale ON galerie(filiale);
CREATE INDEX idx_catalogues_filiale ON catalogues(filiale);

-- Foreign Keys
ALTER TABLE demandes_contact ADD CONSTRAINT fk_demandes_filiale FOREIGN KEY (filiale) REFERENCES filiales(nom) ON DELETE SET NULL;
ALTER TABLE galerie ADD CONSTRAINT fk_galerie_filiale FOREIGN KEY (filiale) REFERENCES filiales(nom) ON DELETE SET NULL;
ALTER TABLE catalogues ADD CONSTRAINT fk_catalogues_filiale FOREIGN KEY (filiale) REFERENCES filiales(nom) ON DELETE SET NULL;
