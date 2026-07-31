import 'dotenv/config';
import { db } from './client';
// dotenv/config is safe here: on Vercel env vars are already set, locally it loads .env
import { administrateurs, filiales, page_contents, settings, galerie } from './schema';
import { hash } from 'bcryptjs';
import { eq } from 'drizzle-orm';
import type { NewFiliale } from './schema';

async function seed() {
  console.log('Seeding database...');

  // ─── Hash admin password ─────────────────────────────────────────────────
  const passwordHash = await hash('Makoff@2026', 12);

  // ─── Insert admin ────────────────────────────────────────────────────────
  console.log('Inserting admin...');
  await db.insert(administrateurs).values({
    nom: 'Administrateur MACOF',
    email: 'admin@macof-holding.com',
    password_hash: passwordHash,
    role: 'admin',
  }).onConflictDoNothing();

  // ─── Insert filiales ─────────────────────────────────────────────────────
  console.log('Inserting filiales...');

  const filiale1: NewFiliale = {
    nom: 'MACOF Immobilier SARL',
    slug: 'macof-immobilier',
    description: 'MACOF Immobilier SARL, filiale du groupe MACOF Holding, est specialisee dans l\'investissement immobilier, la promotion immobiliere, la construction de batiments residentiels et commerciaux, les travaux publics et les infrastructures. Forte d\'une expertise reconnue en Guinee, MACOF Immobilier intervient sur l\'ensemble de la chaine de valeur immobiliere, de la conception a la realisation de projets d\'envergure, en passant par la gestion de chantiers et la livraison de biens de qualite.',
    secteur: 'Immobilier & BTP',
    image_url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop',
    details_json: { services: ['Promotion immobiliere', 'Construction residentielle', 'Travaux publics', 'Infrastructure', 'Renovation', 'Conseil immobilier'], chiffres: { projets_realises: '50+', employes: '120', annees_experience: '8' }, slogans: ['Batir l\'avenir', 'Des projets qui durent', 'Votre partenaire immobilier de confiance'] },
    email: 'immobilier@macof-holding.com',
    telephone: '+224 625 74 46 26',
    adresse: 'Manquepa, face Banc Bleu, Kaloum, Conakry, Guinee',
    site_web: 'https://macof-holding.com',
    statut: 'actif',
  };

  const filiale2: NewFiliale = {
    nom: 'MACOF Restauration SARL',
    slug: 'macof-restauration',
    description: 'MACOF Restauration SARL est la filiale gastronomique du groupe MACOF Holding. Elle offre des services de restauration premium, de restauration collective pour entreprises et institutions, de traiteur pour evenements, ainsi que des produits de boulangerie-patisserie artisanale. MACOF Restauration allie savoir-faire culinaire et exigence de qualite pour satisfaire une clientele diverse, allant des particuliers aux entreprises, en passant par les organisateurs d\'evenements.',
    secteur: 'Restauration & Traiteur',
    image_url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1000&auto=format&fit=crop',
    details_json: { services: ['Restauration premium', 'Restauration collective', 'Service traiteur', 'Boulangerie-patisserie', 'Evenementiel', 'Catering entreprise'], chiffres: { repas_jour: '500+', evenements: '200+', employes: '80' }, slogans: ['L\'art du gout', 'Saveurs d\'excellence', 'Votre moment de bonheur'] },
    email: 'restauration@macof-holding.com',
    telephone: '+224 623 98 75 11',
    adresse: 'Manquepa, face Banc Bleu, Kaloum, Conakry, Guinee',
    site_web: 'https://macof-holding.com',
    statut: 'actif',
  };

  const filiale3: NewFiliale = {
    nom: 'MACOF Print & Com SARL',
    slug: 'macof-print-com',
    description: 'MACOF Print & Com SARL est le pole communication et impression du groupe MACOF Holding. Elle propose une gamme complete de services : impression numerique et offset grand format, creation d\'identite visuelle (logos, chartes graphiques, supports de communication), signalétique, et organisation d\'evenements. MACOF Print & Com accompagne les entreprises dans leur strategie de communication globale, de la conception graphique a la production materielle.',
    secteur: 'Communication & Impression',
    image_url: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=1000&auto=format&fit=crop',
    details_json: { services: ['Impression offset', 'Impression grand format', 'Identite visuelle', 'Signalétique', 'Organisation d\'evenements', 'Supports publicitaires'], chiffres: { projets_impression: '1000+', clients: '300+', employes: '45' }, slogans: ['Votre image, notre metier', 'Imprimez votre reussite', 'La communication par l\'excellence'] },
    email: 'print@macof-holding.com',
    telephone: '+224 625 74 46 26',
    adresse: 'Manquepa, face Banc Bleu, Kaloum, Conakry, Guinee',
    site_web: 'https://macof-holding.com',
    statut: 'actif',
  };

  const filiale4: NewFiliale = {
    nom: 'MACOF Mining SARL',
    slug: 'macof-mining',
    description: 'MACOF Mining SARL est la filiale miniere du groupe MACOF Holding. Elle est specialisee dans l\'exploration, l\'exploitation et la commercialisation de ressources minieres. MACOF Mining offre egalement des services de sous-traitance miniere, de transport de produits miniers et d\'assistance technique. Avec une presence sur plusieurs sites d\'exploitation en Guinee, la filiale contribue activement au developpement du secteur minier national, dans le respect des normes environnementales et de securite.',
    secteur: 'Activites minieres',
    image_url: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=1000&auto=format&fit=crop',
    details_json: { services: ['Exploration miniere', 'Exploitation', 'Sous-traitance', 'Transport minier', 'Commercialisation', 'Assistance technique'], chiffres: { sites_exploitation: '5', tonnes_extraites: '10000+', employes: '200' }, slogans: ['Ressources d\'avenir', 'Exploitation responsable', 'L\'excellence miniere'] },
    email: 'mining@macof-holding.com',
    telephone: '+224 625 74 46 26',
    adresse: 'Manquepa, face Banc Bleu, Kaloum, Conakry, Guinee',
    site_web: 'https://macof-holding.com',
    statut: 'actif',
  };

  const filiale5: NewFiliale = {
    nom: 'MACOF Transit SARL',
    slug: 'macof-transit',
    description: 'MACOF Transit SARL est la filiale logistique et transport du groupe MACOF Holding. Elle offre des services complets de dedouanement, fret maritime et aerien, logistique de stockage, import-export, et billetterie voyage. MACOF Transit est un partenaire de confiance pour les entreprises importatrices et exportatrices, assurant une gestion fluide et efficace de toutes les operations logistiques, du port de Conakry aux destinations finales.',
    secteur: 'Transit, Logistique & Voyages',
    image_url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop',
    details_json: { services: ['Dedouanement', 'Fret maritime', 'Fret aerien', 'Logistique de stockage', 'Import-export', 'Billetterie voyage'], chiffres: { conteneurs_geres: '2000+', clients: '150+', employes: '60' }, slogans: ['Votre cargo, notre priorite', 'La logistique sans frontiere', 'Rapidite et fiabilite'] },
    email: 'transit@macof-holding.com',
    telephone: '+224 625 74 46 26',
    adresse: 'Manquepa, face Banc Bleu, Kaloum, Conakry, Guinee',
    site_web: 'https://macof-holding.com',
    statut: 'actif',
  };

  const filiale6: NewFiliale = {
    nom: 'MACOF Fishing SARL',
    slug: 'macof-fishing',
    description: 'MACOF Fishing SARL est la filiale halieutique du groupe MACOF Holding. Elle est specialisee dans la peche artisanale et industrielle, la transformation des produits de la mer, et leur distribution sur les marches locaux et regionaux. MACOF Fishing contribue a la securite alimentaire et au developpement economique de la region, tout en promouvant une peche durable et respectueuse des ecosystemes marins.',
    secteur: 'Peche & Ressources',
    image_url: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=1000&auto=format&fit=crop',
    details_json: { services: ['Peche artisanale', 'Peche industrielle', 'Transformation produits de la mer', 'Distribution', 'Export', 'Conseil halieutique'], chiffres: { bateaux: '10', tonnes_par_an: '5000+', employes: '90' }, slogans: ['Les tresors de l\'ocean', 'Peche durable', 'Qualite de la mer a votre table'] },
    email: 'fishing@macof-holding.com',
    telephone: '+224 625 74 46 26',
    adresse: 'Manquepa, face Banc Bleu, Kaloum, Conakry, Guinee',
    site_web: 'https://macof-holding.com',
    statut: 'actif',
  };

  for (const f of [filiale1, filiale2, filiale3, filiale4, filiale5, filiale6]) {
    await db.insert(filiales).values(f).onConflictDoNothing();
  }

  // ─── Insert galerie items ─────────────────────────────────────────────────
  console.log('Inserting galerie...');
  const galerieData: Array<{
    titre: string;
    filiale: number;
    type_projet: string;
    lieu: string;
    date_realisation: string;
    description_courte: string;
    image_path: string;
  }> = [
    { titre: 'Cite MACOF Residence', filiale: 1, type_projet: 'residentiel', lieu: 'Kaloum, Conakry', date_realisation: '2024', description_courte: 'Projet residentiel d\'envergure avec 50 unites modernes au coeur de Kaloum.', image_path: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop' },
    { titre: 'SEBA International Catering', filiale: 2, type_projet: 'evenement', lieu: 'Conakry', date_realisation: '2024', description_courte: 'Service traiteur premium pour evenements corporatifs et receptions.', image_path: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1000&auto=format&fit=crop' },
    { titre: 'Impression Offset Haute Qualite', filiale: 3, type_projet: 'production', lieu: 'Atelier MACOF Print', date_realisation: '2024', description_courte: 'Production d\'impressions offset haute qualite pour nos clients corporatifs.', image_path: 'https://images.unsplash.com/photo-1562664377-709f2c337eb2?q=80&w=1000&auto=format&fit=crop' },
    { titre: 'Operations Minieres Boke', filiale: 4, type_projet: 'autre', lieu: 'Boke, Guinee', date_realisation: '2023', description_courte: 'Site d\'exploitation miniere avec equipements modernes et normes securite.', image_path: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=1000&auto=format&fit=crop' },
    { titre: 'Logistique Portuaire Conakry', filiale: 5, type_projet: 'logistique', lieu: 'Port Autonome de Conakry', date_realisation: '2024', description_courte: 'Gestion logistique complete au port de Conakry, dedouanement et fret.', image_path: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop' },
    { titre: 'Flotte de Peche MACOF', filiale: 6, type_projet: 'autre', lieu: 'Cote Atlantique, Guinee', date_realisation: '2024', description_courte: 'Notre flotte de bateaux de peche industrielle au large des cotes guineennes.', image_path: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?q=80&w=1000&auto=format&fit=crop' },
    { titre: 'Villa Moderne Dixinn', filiale: 1, type_projet: 'residentiel', lieu: 'Dixinn, Conakry', date_realisation: '2025', description_courte: 'Construction de villas modernes haut standing dans le quartier residential de Dixinn.', image_path: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop' },
    { titre: 'Reception Gala MACOF', filiale: 2, type_projet: 'evenement', lieu: 'Hotel Riviera, Conakry', date_realisation: '2025', description_courte: 'Organisation complete d\'une reception gala pour 300 invites.', image_path: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?q=80&w=1000&auto=format&fit=crop' },
    { titre: 'Signalétique Centre Commercial', filiale: 3, type_projet: 'commercial', lieu: 'Conakry', date_realisation: '2025', description_courte: 'Conception et installation de la signalétique complete d\'un centre commercial.', image_path: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?q=80&w=1000&auto=format&fit=crop' },
    { titre: 'Transport Fret International', filiale: 5, type_projet: 'logistique', lieu: 'Conakry - Dakar', date_realisation: '2025', description_courte: 'Operation de fret international avec suivi en temps reel et livraison assuree.', image_path: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1000&auto=format&fit=crop' },
  ];

  for (const item of galerieData) {
    await db.insert(galerie).values({
      titre: item.titre,
      filiale: item.filiale,
      type_projet: item.type_projet as 'residentiel' | 'commercial' | 'infrastructure' | 'evenement' | 'production' | 'logistique' | 'autre',
      lieu: item.lieu,
      date_realisation: item.date_realisation,
      description_courte: item.description_courte,
      image_path: item.image_path,
    });
  }

  // ─── Insert page contents ─────────────────────────────────────────────────
  console.log('Inserting page contents...');

  const pagesData: Array<{ page_slug: string; section_key: string; content_value: string; content_type: string }> = [
    // Home page
    { page_slug: 'home', section_key: 'hero_title', content_value: 'MACOF Holding', content_type: 'text' },
    { page_slug: 'home', section_key: 'hero_subtitle', content_value: 'L\'art de faconner l\'avenir', content_type: 'text' },
    { page_slug: 'home', section_key: 'hero_description', content_value: 'Groupe guineen de reference, MACOF Holding construit et transforme durablement des secteurs strategiques de l\'economie a travers six filiales specialisees : Immobilier, Restauration, Communication, Mining, Transit et Peche.', content_type: 'text' },
    { page_slug: 'home', section_key: 'about_preview', content_value: 'Forte d\'une vision ambitieuse et d\'une gouvernance rigoureuse, MACOF Holding est un groupe diversifie implante a Conakry, en Republique de Guinee. A travers ses six filiales, le groupe cree de la valeur durable pour ses partenaires, collaborateurs et la nation.', content_type: 'text' },
    { page_slug: 'home', section_key: 'stats_filiales', content_value: '6', content_type: 'text' },
    { page_slug: 'home', section_key: 'stats_employes', content_value: '600+', content_type: 'text' },
    { page_slug: 'home', section_key: 'stats_projets', content_value: '100+', content_type: 'text' },
    { page_slug: 'home', section_key: 'stats_annees', content_value: '8', content_type: 'text' },

    // About page
    { page_slug: 'about', section_key: 'title', content_value: 'A propos de MACOF Holding', content_type: 'text' },
    { page_slug: 'about', section_key: 'subtitle', content_value: 'Un groupe, six filiales, une ambition commune', content_type: 'text' },
    { page_slug: 'about', section_key: 'mission', content_value: 'Construire, developper et transformer durablement des secteurs strategiques de l\'economie guineenne, en creant de la valeur pour nos partenaires, collaborateurs et la nation.', content_type: 'text' },
    { page_slug: 'about', section_key: 'vision', content_value: 'Devenir un groupe de reference reconnu internationalement, pilier du developpement economique de la Guinee et de l\'Afrique de l\'Ouest, en excelant dans chacun de nos domaines d\'activite.', content_type: 'text' },
    { page_slug: 'about', section_key: 'histoire', content_value: 'MACOF Holding est nee de la volonte d\'entrepreneurs guineens visionnaires de creer un groupe diversifie capable de repondre aux defis economiques du pays. Depuis sa creation, le groupe n\'a cesse de grandir, diversifiant ses activites dans des secteurs cles de l\'economie nationale. Aujourd\'hui, MACOF Holding compte six filiales specialisees et plus de 600 collaborateurs, positionnee comme un acteur majeur du developpement economique de la Guinee.', content_type: 'text' },
    { page_slug: 'about', section_key: 'valeurs_title', content_value: 'Nos Valeurs', content_type: 'text' },
    { page_slug: 'about', section_key: 'valeur_1_titre', content_value: 'Excellence', content_type: 'text' },
    { page_slug: 'about', section_key: 'valeur_1_desc', content_value: 'Nous visons l\'excellence dans tout ce que nous entreprenons, de la qualite de nos services a la satisfaction de nos clients.', content_type: 'text' },
    { page_slug: 'about', section_key: 'valeur_2_titre', content_value: 'Innovation', content_type: 'text' },
    { page_slug: 'about', section_key: 'valeur_2_desc', content_value: 'Nous innovons en permanence pour rester a la pointe de nos secteurs d\'activite et anticiper les evolutions du marche.', content_type: 'text' },
    { page_slug: 'about', section_key: 'valeur_3_titre', content_value: 'Integrite', content_type: 'text' },
    { page_slug: 'about', section_key: 'valeur_3_desc', content_value: 'L\'integrite guide chacune de nos actions. Nous operons avec transparence et respect de nos engagements.', content_type: 'text' },
    { page_slug: 'about', section_key: 'valeur_4_titre', content_value: 'Engagement', content_type: 'text' },
    { page_slug: 'about', section_key: 'valeur_4_desc', content_value: 'Nous sommes engages envers nos clients, nos partenaires et notre communaute, contribuant au developpement durable.', content_type: 'text' },

    // Immobilier page
    { page_slug: 'immobilier', section_key: 'hero_title', content_value: 'MACOF Immobilier SARL', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'hero_subtitle', content_value: 'Immobilier & BTP', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'description', content_value: 'MACOF Immobilier SARL est specialisee dans l\'investissement immobilier, la promotion immobiliere, la construction et les travaux publics. Forte d\'une expertise reconnue, la filiale intervient sur toute la chaine de valeur, de la conception a la realisation de projets d\'envergure en Guinee.', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_1_titre', content_value: 'Promotion Immobilieres', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_1_desc', content_value: 'Conception et realisation de programmes immobiliers residentiels et commerciaux de qualite.', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_2_titre', content_value: 'Construction', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_2_desc', content_value: 'Construction de batiments a usage residentiel, commercial et administratif selon les normes internationales.', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_3_titre', content_value: 'Travaux Publics', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_3_desc', content_value: 'Realisation d\'infrastructures publiques : routes, ponts, reseaux d\'eau et d\'electricite.', content_type: 'text' },

    // Restauration page
    { page_slug: 'restauration', section_key: 'hero_title', content_value: 'MACOF Restauration SARL', content_type: 'text' },
    { page_slug: 'restauration', section_key: 'hero_subtitle', content_value: 'Restauration & Traiteur', content_type: 'text' },
    { page_slug: 'restauration', section_key: 'description', content_value: 'MACOF Restauration SARL offre des services de restauration premium, de restauration collective, de traiteur pour evenements et de boulangerie-patisserie artisanale. Alliant savoir-faire culinaire et exigence de qualite, nous satisfaons une clientele diversifiee de particuliers et d\'entreprises.', content_type: 'text' },

    // Transit page
    { page_slug: 'transit', section_key: 'hero_title', content_value: 'MACOF Transit SARL', content_type: 'text' },
    { page_slug: 'transit', section_key: 'hero_subtitle', content_value: 'Transit, Logistique & Voyages', content_type: 'text' },
    { page_slug: 'transit', section_key: 'description', content_value: 'MACOF Transit SARL est votre partenaire de confiance pour toutes vos operations logistiques en Guinee. Nous offrons des services de dedouanement, fret maritime et aerien, logistique de stockage, import-export et billetterie voyage, assurant une gestion fluide du port de Conakry aux destinations finales.', content_type: 'text' },

    // Mining page
    { page_slug: 'mining', section_key: 'hero_title', content_value: 'MACOF Mining SARL', content_type: 'text' },
    { page_slug: 'mining', section_key: 'hero_subtitle', content_value: 'Activites Minieres', content_type: 'text' },
    { page_slug: 'mining', section_key: 'description', content_value: 'MACOF Mining SARL est specialisee dans l\'exploration, l\'exploitation et la commercialisation de ressources minieres en Guinee. La filiale offre egalement des services de sous-traitance miniere, de transport et d\'assistance technique, dans le respect des normes environnementales et de securite.', content_type: 'text' },

    // Fishing page
    { page_slug: 'fishing', section_key: 'hero_title', content_value: 'MACOF Fishing SARL', content_type: 'text' },
    { page_slug: 'fishing', section_key: 'hero_subtitle', content_value: 'Peche & Ressources Halieutiques', content_type: 'text' },
    { page_slug: 'fishing', section_key: 'description', content_value: 'MACOF Fishing SARL est specialisee dans la peche artisanale et industrielle, la transformation et la distribution de produits de la mer. La filiale contribue a la securite alimentaire et au developpement economique de la region, en promouvant une peche durable et respectueuse des ecosystemes marins.', content_type: 'text' },

    // Print page
    { page_slug: 'print', section_key: 'hero_title', content_value: 'MACOF Print & Com SARL', content_type: 'text' },
    { page_slug: 'print', section_key: 'hero_subtitle', content_value: 'Communication & Impression', content_type: 'text' },
    { page_slug: 'print', section_key: 'description', content_value: 'MACOF Print & Com SARL propose une gamme complete de services de communication et d\'impression : impression numerique et offset grand format, creation d\'identite visuelle, signalistique et organisation d\'evenements. Nous accompagnons les entreprises dans leur strategie de communication globale.', content_type: 'text' },

    // Contact page
    { page_slug: 'contact', section_key: 'title', content_value: 'Contactez-nous', content_type: 'text' },
    { page_slug: 'contact', section_key: 'subtitle', content_value: 'Nous sommes a votre ecoute pour toute demande d\'information, de partenariat ou de devis.', content_type: 'text' },
    { page_slug: 'contact', section_key: 'adresse', content_value: 'Manquepa, face Banc Bleu, Kaloum, Conakry, Republique de Guinee', content_type: 'text' },
    { page_slug: 'contact', section_key: 'telephone', content_value: '+224 625 74 46 26 / +224 623 98 75 11', content_type: 'text' },
    { page_slug: 'contact', section_key: 'email', content_value: 'macofholding2018@gmail.com', content_type: 'text' },
  ];

  for (const pc of pagesData) {
    await db.insert(page_contents).values(pc).onConflictDoNothing();
  }

  // ─── Insert default settings ──────────────────────────────────────────────
  console.log('Inserting settings...');
  const settingsData = [
    { key: 'smtp_host', value: '' },
    { key: 'smtp_port', value: '587' },
    { key: 'smtp_email', value: '' },
    { key: 'smtp_password', value: '' },
    { key: 'whatsapp_number', value: '+224625744626' },
    { key: 'site_name', value: 'MACOF Holding' },
    { key: 'site_url', value: 'https://macof-holding.com' },
    { key: 'admin_email', value: 'admin@macof-holding.com' },
    { key: 'notification_email', value: 'macofholding2018@gmail.com' },
  ];

  for (const s of settingsData) {
    await db.insert(settings).values(s).onConflictDoNothing();
  }

  console.log('Seed completed successfully!');
  process.exit(0);
}

seed().catch((error) => {
  console.error('Seed failed:', error);
  process.exit(1);
});
