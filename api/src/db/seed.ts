import 'dotenv/config';
import { db } from './client';
import { administrateurs, filiales, page_contents, settings, galerie } from './schema';
import { hash } from 'bcryptjs';
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
    description: "MACOF Immobilier SARL est la filiale spécialisée dans l'investissement immobilier, la promotion et les travaux publics (BTP). Elle intervient dans la conception, la réalisation et la gestion de projets immobiliers et d'infrastructures structurantes, en Guinée et à l'international. Cette filiale joue un rôle central dans la stratégie du groupe : elle contribue activement au développement urbain et à la modernisation des infrastructures du pays.",
    secteur: 'Immobilier & BTP',
    image_url: '/plaquette-construction.jpeg',
    details_json: { services: ['Acquisition et valorisation de terrains', 'Conception et construction de bâtiments', 'Promotion et commercialisation de biens immobiliers', 'Gestion locative et patrimoniale', 'Travaux publics et infrastructures', 'Réhabilitation et modernisation urbaine'], chiffres: { projets_realises: '50+', employes: '120', annees_experience: '8' }, slogans: ['Bâtir l\'avenir', 'Des projets qui durent', 'Votre partenaire immobilier de confiance'] },
    email: 'immobilier@macof-holding.com',
    telephone: '+224 625 74 46 26',
    adresse: 'Manquepa en face de Banc Bleu, Kaloum, Conakry, République de Guinée',
    site_web: 'https://macof-holding.com',
    statut: 'actif',
  };

  const filiale2: NewFiliale = {
    nom: 'MACOF Restauration SARL',
    slug: 'macof-restauration',
    description: "MACOF Restauration SARL est la filiale spécialisée dans les services de restauration haut de gamme, alliant excellence culinaire, rigueur organisationnelle et standards élevés de qualité. Elle opère à travers trois segments stratégiques complémentaires couvrant l'ensemble du spectre de la restauration professionnelle, de la restauration commerciale grand public à la restauration événementielle de prestige.",
    secteur: 'Restauration & Traiteur',
    image_url: '/plaquette-resto.jpeg',
    details_json: { services: ['Restauration commerciale premium (Restaurants SEBA International)', 'Restauration collective structurée', 'Restauration événementielle & service traiteur', 'Boulangerie-pâtisserie artisanale'], chiffres: { repas_jour: '500+', evenements: '200+', employes: '80' }, slogans: ['L\'art du goût', 'Saveurs d\'excellence', 'Votre moment de bonheur'] },
    email: 'restauration@macof-holding.com',
    telephone: '+224 623 98 75 11',
    adresse: 'Manquepa en face de Banc Bleu, Kaloum, Conakry, République de Guinée',
    site_web: 'https://macof-holding.com',
    statut: 'actif',
  };

  const filiale3: NewFiliale = {
    nom: 'MACOF Print & Com SARL',
    slug: 'macof-print-com',
    description: "MACOF Print & Com SARL est la filiale spécialisée dans l'imprimerie professionnelle, la communication visuelle et l'organisation de grands événements. Elle accompagne entreprises, institutions et organisations dans la conception et la valorisation de leur image de marque, à travers une offre intégrée combinant création, production et organisation logistique.",
    secteur: 'Communication & Impression',
    image_url: '/plaquette-print.jpeg',
    details_json: { services: ['Création d\'identités visuelles et supports institutionnels', 'Impression numérique et offset haute qualité', 'Production de supports publicitaires et signalétique', 'Organisation et gestion de grands événements'], chiffres: { projets_impression: '1000+', clients: '300+', employes: '45' }, slogans: ['Votre image, notre métier', 'Imprimez votre réussite', 'La communication par l\'excellence'] },
    email: 'print@macof-holding.com',
    telephone: '+224 625 74 46 26',
    adresse: 'Manquepa en face de Banc Bleu, Kaloum, Conakry, République de Guinée',
    site_web: 'https://macof-holding.com',
    statut: 'actif',
  };

  const filiale4: NewFiliale = {
    nom: 'MACOF Mining SARL',
    slug: 'macof-mining',
    description: "MACOF Mining SARL est la filiale spécialisée dans les activités minières et la valorisation des ressources naturelles. Elle évolue dans le respect des normes réglementaires et environnementales en vigueur en République de Guinée, avec pour objectif de contribuer au développement durable et structuré du secteur minier, l'un des piliers de l'économie nationale.",
    secteur: 'Activités minières',
    image_url: '/plaquette-mining.jpeg',
    details_json: { services: ['Exploration et exploitation minière (bauxite, or, fer, diamant)', 'Sous-traitance et appui aux opérations minières', 'Transport et commercialisation de produits miniers', 'Assistance technique minière'], chiffres: { sites_exploitation: '5', tonnes_extraites: '10000+', employes: '200' }, slogans: ['Ressources d\'avenir', 'Exploitation responsable', 'L\'excellence minière'] },
    email: 'mining@macof-holding.com',
    telephone: '+224 625 74 46 26',
    adresse: 'Manquepa en face de Banc Bleu, Kaloum, Conakry, République de Guinée',
    site_web: 'https://macof-holding.com',
    statut: 'actif',
  };

  const filiale5: NewFiliale = {
    nom: 'MACOF Transit SARL',
    slug: 'macof-transit',
    description: "MACOF Transit SARL est la filiale spécialisée dans le transit, la logistique, le transport de marchandises et les services de voyage. Grâce à une organisation structurée et à une parfaite maîtrise des procédures réglementaires guinéennes et sous-régionales, elle facilite les échanges commerciaux et les déplacements internationaux, en garantissant fiabilité, conformité et efficacité.",
    secteur: 'Transit, Logistique & Voyages',
    image_url: '/plaquette-logistics.jpeg',
    details_json: { services: ['Dédouanement et formalités administratives', 'Transport national et international de marchandises', 'Gestion logistique et suivi des expéditions', 'Assistance aux opérations d\'import-export', 'Vente de billets d\'avion et accompagnement voyageurs'], chiffres: { conteneurs_geres: '2000+', clients: '150+', employes: '60' }, slogans: ['Votre cargo, notre priorité', 'La logistique sans frontière', 'Rapidité et fiabilité'] },
    email: 'transit@macof-holding.com',
    telephone: '+224 625 74 46 26',
    adresse: 'Manquepa en face de Banc Bleu, Kaloum, Conakry, République de Guinée',
    site_web: 'https://macof-holding.com',
    statut: 'actif',
  };

  const filiale6: NewFiliale = {
    nom: 'MACOF Fishing SARL',
    slug: 'macof-fishing',
    description: "MACOF Fishing SARL est la filiale spécialisée dans les activités halieutiques et la valorisation des ressources maritimes. Elle contribue au développement du secteur de la pêche en garantissant qualité, respect des normes et gestion responsable des ressources, dans une logique de durabilité et de valorisation locale de la production.",
    secteur: 'Pêche & Ressources halieutiques',
    image_url: '/plaquette-fishing.jpeg',
    details_json: { services: ['Pêche artisanale et industrielle', 'Transformation et conservation des produits halieutiques', 'Commercialisation et distribution des produits de la mer', 'Activités liées à l\'exploitation durable des ressources marines'], chiffres: { bateaux: '10', tonnes_par_an: '5000+', employes: '90' }, slogans: ['Les trésors de l\'océan', 'Pêche durable', 'Qualité de la mer à votre table'] },
    email: 'fishing@macof-holding.com',
    telephone: '+224 625 74 46 26',
    adresse: 'Manquepa en face de Banc Bleu, Kaloum, Conakry, République de Guinée',
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
    { titre: 'Cité MACOF Résidence', filiale: 1, type_projet: 'residentiel', lieu: 'Kaloum, Conakry', date_realisation: '2024', description_courte: "Projet résidentiel d'envergure avec 50 unités modernes au cœur de Kaloum.", image_path: '/plaquette-construction.jpeg' },
    { titre: 'SEBA International Catering', filiale: 2, type_projet: 'evenement', lieu: 'Conakry', date_realisation: '2024', description_courte: 'Service traiteur premium pour événements corporatifs et réceptions.', image_path: '/plaquette-resto.jpeg' },
    { titre: 'Impression Offset Haute Qualité', filiale: 3, type_projet: 'production', lieu: 'Atelier MACOF Print', date_realisation: '2024', description_courte: "Production d'impressions offset haute qualité pour nos clients corporatifs.", image_path: '/plaquette-print.jpeg' },
    { titre: 'Opérations Minières', filiale: 4, type_projet: 'autre', lieu: 'Guinée', date_realisation: '2023', description_courte: "Site d'exploitation minière avec équipements modernes et normes sécurité.", image_path: '/plaquette-mining.jpeg' },
    { titre: 'Logistique Portuaire Conakry', filiale: 5, type_projet: 'logistique', lieu: 'Port Autonome de Conakry', date_realisation: '2024', description_courte: 'Gestion logistique complète au port de Conakry, dédouanement et fret.', image_path: '/plaquette-logistics.jpeg' },
    { titre: 'Flotte de Pêche MACOF', filiale: 6, type_projet: 'autre', lieu: 'Côte Atlantique, Guinée', date_realisation: '2024', description_courte: 'Notre flotte de bateaux de pêche industrielle au large des côtes guinéennes.', image_path: '/plaquette-fishing.jpeg' },
    { titre: 'Villa Moderne Dixinn', filiale: 1, type_projet: 'residentiel', lieu: 'Dixinn, Conakry', date_realisation: '2025', description_courte: 'Construction de villas modernes haut standing dans le quartier résidentiel de Dixinn.', image_path: '/plaquette-building.jpeg' },
    { titre: 'Réception Gala MACOF', filiale: 2, type_projet: 'evenement', lieu: 'Hotel Riviera, Conakry', date_realisation: '2025', description_courte: "Organisation complète d'une réception gala pour 300 invités.", image_path: '/plaquette-resto.jpeg' },
    { titre: 'Signalétique Centre Commercial', filiale: 3, type_projet: 'commercial', lieu: 'Conakry', date_realisation: '2025', description_courte: "Conception et installation de la signalétique complète d'un centre commercial.", image_path: '/plaquette-print.jpeg' },
    { titre: 'Transport Fret International', filiale: 5, type_projet: 'logistique', lieu: 'Conakry - Dakar', date_realisation: '2025', description_courte: "Opération de fret international avec suivi en temps réel et livraison assurée.", image_path: '/plaquette-logistics.jpeg' },
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
    // ═══════════════════════════════════════════════════════════════
    // HOME PAGE
    // ═══════════════════════════════════════════════════════════════
    { page_slug: 'home', section_key: 'hero_title_small', content_value: 'MACOF Holding', content_type: 'text' },
    { page_slug: 'home', section_key: 'hero_title_main', content_value: "L'Art de façonner <br/><span class=\"italic text-red-500 font-light\">l'avenir.</span>", content_type: 'text' },
    { page_slug: 'home', section_key: 'hero_desc', content_value: "Groupe guinéen multi-sectoriel, MACOF Holding construit et transforme durablement des secteurs stratégiques de l'économie à travers six filiales spécialisées : Immobilier, Restauration, Communication, Mining, Transit et Pêche.", content_type: 'text' },
    { page_slug: 'home', section_key: 'hero_bg', content_value: '/plaquette-banner.jpeg', content_type: 'text' },
    { page_slug: 'home', section_key: 'vision_title_small', content_value: 'Notre Vision', content_type: 'text' },
    { page_slug: 'home', section_key: 'vision_desc_1', content_value: "MACOF Holding est un groupe de droit guinéen, structuré autour d'une vision ambitieuse : construire, développer et transformer durablement des secteurs stratégiques de l'économie.", content_type: 'text' },
    { page_slug: 'home', section_key: 'vision_desc_2', content_value: "À travers une organisation moderne et une gouvernance rigoureuse, le groupe incarne « l'art de façonner l'avenir » en créant de la valeur durable pour ses partenaires, ses collaborateurs et la nation.", content_type: 'text' },
    { page_slug: 'home', section_key: 'about_preview', content_value: "Forte d'une vision ambitieuse et d'une gouvernance rigoureuse, MACOF Holding est un groupe diversifié implanté à Conakry, en République de Guinée. À travers ses six filiales, le groupe crée de la valeur durable pour ses partenaires, collaborateurs et la nation.", content_type: 'text' },
    { page_slug: 'home', section_key: 'stats_filiales', content_value: '6', content_type: 'text' },
    { page_slug: 'home', section_key: 'stats_employes', content_value: '600+', content_type: 'text' },
    { page_slug: 'home', section_key: 'stats_projets', content_value: '100+', content_type: 'text' },
    { page_slug: 'home', section_key: 'stats_annees', content_value: '2018', content_type: 'text' },
    { page_slug: 'home', section_key: 'stats', content_value: JSON.stringify([
      { value: '2018', label: 'Création' },
      { value: '6', label: 'Filiales' },
      { value: '100+', label: 'Projets réalisés' },
      { value: '600+', label: 'Collaborateurs' }
    ]), content_type: 'json' },
    { page_slug: 'home', section_key: 'reasons', content_value: JSON.stringify([
      { title: "Diversification Stratégique", desc: "Une présence forte dans 6 secteurs clés de l'économie guinéenne et internationale, assurant résilience et croissance continue." },
      { title: "Gouvernance Rigoureuse", desc: "Des processus de décision structurés et une éthique professionnelle irréprochable garantissant transparence et confiance." },
      { title: "Expertise Sectorielle", desc: "Une maîtrise pointue de chaque domaine d'activité grâce à des équipes spécialisées et expérimentées." },
      { title: "Ancrage Local", desc: "Une connaissance profonde du marché local couplée à des standards internationaux de qualité et de sécurité." }
    ]), content_type: 'json' },
    { page_slug: 'home', section_key: 'realisations', content_value: JSON.stringify([
      { title: "Cité MACOF Résidence", category: "Immobilier", image: "/plaquette-construction.jpeg" },
      { title: "SEBA International", category: "Restauration", image: "/plaquette-resto.jpeg" },
      { title: "Opérations Minières", category: "Mining", image: "/plaquette-mining.jpeg" },
      { title: "Impression Offset", category: "Print & Com", image: "/plaquette-print.jpeg" },
      { title: "Logistique Portuaire", category: "Transit", image: "/plaquette-logistics.jpeg" },
      { title: "Flotte Côtière", category: "Fishing", image: "/plaquette-fishing.jpeg" },
    ]), content_type: 'json' },
    { page_slug: 'home', section_key: 'temoignages', content_value: JSON.stringify([
      { text: "L'expertise de MACOF dans l'accompagnement de nos projets immobiliers a été déterminante. Une rigueur et un professionnalisme exemplaires.", auteur: "Directeur Général", entreprise: "Banque d'Investissement" },
      { text: "Nous travaillons avec MACOF Transit pour toutes nos importations. Leur efficacité logistique et leur suivi en temps réel sont inégalés sur le marché.", auteur: "Responsable Achats", entreprise: "Société Industrielle" },
      { text: "La qualité du service traiteur de SEBA International a grandement contribué au succès de notre gala annuel. Une prestation haut de gamme.", auteur: "Directrice Communication", entreprise: "Multinationale Minière" }
    ]), content_type: 'json' },
    { page_slug: 'home', section_key: 'actualites', content_value: JSON.stringify([
      { date: "12 Juin 2026", category: "Institutionnel", title: "MACOF Holding inaugure son nouveau siège à Conakry", image: "/plaquette-building.jpeg" },
      { date: "05 Juin 2026", category: "Immobilier", title: "Lancement du projet résidentiel haut de gamme 'Les Perles de Kaloum'", image: "/plaquette-construction.jpeg" },
      { date: "28 Mai 2026", category: "Restauration", title: "SEBA International remporte le prix du meilleur traiteur B2B", image: "/plaquette-resto.jpeg" },
    ]), content_type: 'json' },

    // ═══════════════════════════════════════════════════════════════
    // ABOUT PAGE
    // ═══════════════════════════════════════════════════════════════
    { page_slug: 'about', section_key: 'hero_title', content_value: "MACOF <span class=\"italic text-gradient-corporate\">Holding</span>", content_type: 'text' },
    { page_slug: 'about', section_key: 'hero_desc', content_value: "MACOF Holding est un groupe de droit guinéen, structuré autour d'une vision ambitieuse : construire, développer et transformer durablement des secteurs stratégiques de l'économie. À travers une organisation moderne et une gouvernance rigoureuse, le groupe incarne « l'art de façonner l'avenir » en créant de la valeur durable pour ses partenaires, ses collaborateurs et la nation.", content_type: 'text' },
    { page_slug: 'about', section_key: 'hero_img', content_value: '/plaquette-building.jpeg', content_type: 'text' },
    { page_slug: 'about', section_key: 'vision_text', content_value: "Devenir un groupe de référence, reconnu pour son excellence, sa performance durable et sa contribution au développement économique de la Guinée et au-delà de la sous-région ouest-africaine.", content_type: 'text' },
    { page_slug: 'about', section_key: 'mission_text', content_value: "Structurer, piloter et développer ses filiales à travers une gouvernance rigoureuse, une stratégie claire et une gestion centralisée, afin de garantir une croissance durable et créatrice de valeur pour l'ensemble des parties prenantes — actionnaires, collaborateurs, partenaires, clients et la collectivité nationale.", content_type: 'text' },
    { page_slug: 'about', section_key: 'valeurs_text', content_value: "Excellence - Viser l'excellence dans tout ce que nous entreprenons\nInnovation - Innover en permanence pour rester à la pointe\nIntégrité - Opérer avec transparence et respect de nos engagements\nEngagement - S'engager envers nos clients, partenaires et communauté\nResponsabilité - Contribuer au développement durable\nEsprit d'équipe - Travailler ensemble pour atteindre l'excellence collective", content_type: 'text' },
    { page_slug: 'about', section_key: 'historique_2018', content_value: "Fondation de MACOF SARL sous la forme d'une Société à Responsabilité Limitée (SARL) en République de Guinée, marquant le point de départ des activités du groupe.", content_type: 'text' },
    { page_slug: 'about', section_key: 'historique_2023', content_value: "Évolution vers une Société Anonyme (SA), traduisant une phase d'expansion et de structuration renforcée, avec une gouvernance formelle et une capacité d'investissement élargie.", content_type: 'text' },
    { page_slug: 'about', section_key: 'historique_2026', content_value: "Adoption d'un modèle de Holding afin d'optimiser la gouvernance, la coordination stratégique et le développement sectoriel du groupe, dans une logique de spécialisation par filiale.", content_type: 'text' },
    { page_slug: 'about', section_key: 'org_text_1', content_value: "MACOF Holding développe ses activités à travers six filiales expertes dans leurs domaines respectifs, chacune dédiée à un secteur stratégique de l'économie guinéenne : Immobilier & BTP, Restauration & Traiteur, Communication & Impression, Activités minières, Transit & Logistique, et Pêche & Ressources halieutiques.", content_type: 'text' },
    { page_slug: 'about', section_key: 'org_text_2', content_value: "La structure holding permet une coordination stratégique efficace tout en offrant à chaque filiale l'autonomie nécessaire pour exceller dans son domaine d'expertise spécifique.", content_type: 'text' },
    { page_slug: 'about', section_key: 'title', content_value: 'À propos de MACOF Holding', content_type: 'text' },
    { page_slug: 'about', section_key: 'subtitle', content_value: "Un groupe, six filiales, une ambition commune", content_type: 'text' },

    // ═══════════════════════════════════════════════════════════════
    // IMMOBILIER PAGE
    // ═══════════════════════════════════════════════════════════════
    { page_slug: 'immobilier', section_key: 'hero_title', content_value: 'MACOF Immobilier SARL', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'hero_subtitle', content_value: 'Immobilier & BTP', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'hero_desc', content_value: "Bâtir l'avenir avec élégance. Promotion immobilière de prestige, ingénierie de pointe et gestion de biens d'exception.", content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'hero_bg', content_value: '/plaquette-construction.jpeg', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'vision_title', content_value: 'Notre Vision', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'vision_text_1', content_value: "MACOF Immobilier SARL est la filiale spécialisée dans l'investissement immobilier, la promotion et les travaux publics (BTP). Elle intervient dans la conception, la réalisation et la gestion de projets immobiliers et d'infrastructures structurantes, en Guinée et à l'international.", content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'vision_text_2', content_value: "Cette filiale joue un rôle central dans la stratégie du groupe : elle contribue activement au développement urbain et à la modernisation des infrastructures du pays.", content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'description', content_value: "MACOF Immobilier SARL est spécialisée dans l'investissement immobilier, la promotion immobilière, la construction et les travaux publics. Forte d'une expertise reconnue, la filiale intervient sur toute la chaîne de valeur, de la conception à la réalisation de projets d'envergure en Guinée.", content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_1_titre', content_value: 'Promotion Immobilière', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_1_desc', content_value: "Conception et réalisation de programmes immobiliers résidentiels et commerciaux de qualité.", content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_2_titre', content_value: 'Construction', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_2_desc', content_value: "Construction de bâtiments à usage résidentiel, commercial et administratif selon les normes internationales.", content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_3_titre', content_value: 'Travaux Publics', content_type: 'text' },
    { page_slug: 'immobilier', section_key: 'service_3_desc', content_value: "Réalisation d'infrastructures publiques : routes, ponts, réseaux d'eau et d'électricité.", content_type: 'text' },

    // ═══════════════════════════════════════════════════════════════
    // RESTAURATION PAGE
    // ═══════════════════════════════════════════════════════════════
    { page_slug: 'restauration', section_key: 'hero_title', content_value: 'MACOF Restauration SARL', content_type: 'text' },
    { page_slug: 'restauration', section_key: 'hero_subtitle', content_value: 'Restauration & Traiteur', content_type: 'text' },
    { page_slug: 'restauration', section_key: 'hero_desc', content_value: "L'art culinaire porté à son paroxysme. Service traiteur, restauration collective et l'excellence SEBA International.", content_type: 'text' },
    { page_slug: 'restauration', section_key: 'hero_bg', content_value: '/plaquette-resto.jpeg', content_type: 'text' },
    { page_slug: 'restauration', section_key: 'vision_title', content_value: 'Notre Philosophie', content_type: 'text' },
    { page_slug: 'restauration', section_key: 'vision_text_1', content_value: "MACOF Restauration SARL est la filiale spécialisée dans les services de restauration haut de gamme, alliant excellence culinaire, rigueur organisationnelle et standards élevés de qualité.", content_type: 'text' },
    { page_slug: 'restauration', section_key: 'vision_text_2', content_value: "Elle opère à travers trois segments stratégiques complémentaires : restauration commerciale premium (Restaurants SEBA International), restauration collective structurée, et restauration événementielle & service traiteur.", content_type: 'text' },
    { page_slug: 'restauration', section_key: 'description', content_value: "MACOF Restauration SARL offre des services de restauration premium, de restauration collective, de traiteur pour événements et de boulangerie-pâtisserie artisanale. Alliant savoir-faire culinaire et exigence de qualité, nous satisfaisons une clientèle diversifiée de particuliers et d'entreprises.", content_type: 'text' },

    // ═══════════════════════════════════════════════════════════════
    // TRANSIT PAGE
    // ═══════════════════════════════════════════════════════════════
    { page_slug: 'transit', section_key: 'hero_title', content_value: 'MACOF Transit SARL', content_type: 'text' },
    { page_slug: 'transit', section_key: 'hero_subtitle', content_value: 'Transit, Logistique & Voyages', content_type: 'text' },
    { page_slug: 'transit', section_key: 'hero_desc', content_value: "La maîtrise globale de votre Supply Chain. Fluidité, sécurité et conformité douanière absolue.", content_type: 'text' },
    { page_slug: 'transit', section_key: 'hero_bg', content_value: '/plaquette-logistics.jpeg', content_type: 'text' },
    { page_slug: 'transit', section_key: 'vision_title', content_value: 'Notre Vocation', content_type: 'text' },
    { page_slug: 'transit', section_key: 'vision_text_1', content_value: "MACOF Transit SARL est la filiale spécialisée dans le transit, la logistique, le transport de marchandises et les services de voyage.", content_type: 'text' },
    { page_slug: 'transit', section_key: 'vision_text_2', content_value: "Grâce à une organisation structurée et à une parfaite maîtrise des procédures réglementaires guinéennes et sous-régionales, elle facilite les échanges commerciaux et les déplacements internationaux, en garantissant fiabilité, conformité et efficacité.", content_type: 'text' },
    { page_slug: 'transit', section_key: 'description', content_value: "MACOF Transit SARL est votre partenaire de confiance pour toutes vos opérations logistiques en Guinée. Nous offrons des services de dédouanement, fret maritime et aérien, logistique de stockage, import-export et billetterie voyage.", content_type: 'text' },

    // ═══════════════════════════════════════════════════════════════
    // MINING PAGE
    // ═══════════════════════════════════════════════════════════════
    { page_slug: 'mining', section_key: 'hero_title', content_value: 'MACOF Mining SARL', content_type: 'text' },
    { page_slug: 'mining', section_key: 'hero_subtitle', content_value: 'Activités Minières', content_type: 'text' },
    { page_slug: 'mining', section_key: 'hero_desc', content_value: "Extraction, logistique et exploitation minière responsable. Un acteur majeur en République de Guinée.", content_type: 'text' },
    { page_slug: 'mining', section_key: 'hero_bg', content_value: '/plaquette-mining.jpeg', content_type: 'text' },
    { page_slug: 'mining', section_key: 'vision_title', content_value: 'Notre Vision', content_type: 'text' },
    { page_slug: 'mining', section_key: 'vision_text_1', content_value: "MACOF Mining SARL est la filiale spécialisée dans les activités minières et la valorisation des ressources naturelles.", content_type: 'text' },
    { page_slug: 'mining', section_key: 'vision_text_2', content_value: "Elle évolue dans le respect des normes réglementaires et environnementales en vigueur en République de Guinée, avec pour objectif de contribuer au développement durable et structuré du secteur minier, l'un des piliers de l'économie nationale.", content_type: 'text' },
    { page_slug: 'mining', section_key: 'description', content_value: "MACOF Mining SARL est spécialisée dans l'exploration, l'exploitation et la commercialisation de ressources minières en Guinée. La filiale offre également des services de sous-traitance minière, de transport et d'assistance technique, dans le respect des normes environnementales et de sécurité.", content_type: 'text' },

    // ═══════════════════════════════════════════════════════════════
    // FISHING PAGE
    // ═══════════════════════════════════════════════════════════════
    { page_slug: 'fishing', section_key: 'hero_title', content_value: 'MACOF Fishing SARL', content_type: 'text' },
    { page_slug: 'fishing', section_key: 'hero_subtitle', content_value: 'Pêche & Ressources Halieutiques', content_type: 'text' },
    { page_slug: 'fishing', section_key: 'hero_desc', content_value: "Exploitation halieutique durable. De la capture hauturière à l'exportation internationale, dans le plus strict respect des écosystèmes.", content_type: 'text' },
    { page_slug: 'fishing', section_key: 'hero_bg', content_value: '/plaquette-fishing.jpeg', content_type: 'text' },
    { page_slug: 'fishing', section_key: 'vision_title', content_value: 'Notre Vocation', content_type: 'text' },
    { page_slug: 'fishing', section_key: 'vision_text_1', content_value: "MACOF Fishing SARL est la filiale spécialisée dans les activités halieutiques et la valorisation des ressources maritimes.", content_type: 'text' },
    { page_slug: 'fishing', section_key: 'vision_text_2', content_value: "Elle contribue au développement du secteur de la pêche en garantissant qualité, respect des normes et gestion responsable des ressources, dans une logique de durabilité et de valorisation locale de la production.", content_type: 'text' },
    { page_slug: 'fishing', section_key: 'description', content_value: "MACOF Fishing SARL est spécialisée dans la pêche artisanale et industrielle, la transformation et la distribution de produits de la mer. La filiale contribue à la sécurité alimentaire et au développement économique de la région, en promouvant une pêche durable et respectueuse des écosystèmes marins.", content_type: 'text' },

    // ═══════════════════════════════════════════════════════════════
    // PRINT PAGE
    // ═══════════════════════════════════════════════════════════════
    { page_slug: 'print', section_key: 'hero_title', content_value: 'MACOF Print & Com SARL', content_type: 'text' },
    { page_slug: 'print', section_key: 'hero_subtitle', content_value: 'Communication & Impression', content_type: 'text' },
    { page_slug: 'print', section_key: 'hero_desc', content_value: "Communication visuelle & Impression. La valorisation absolue de votre image de marque.", content_type: 'text' },
    { page_slug: 'print', section_key: 'hero_bg', content_value: '/plaquette-print.jpeg', content_type: 'text' },
    { page_slug: 'print', section_key: 'vision_title', content_value: 'Notre Mission', content_type: 'text' },
    { page_slug: 'print', section_key: 'vision_text_1', content_value: "MACOF Print & Com SARL est la filiale spécialisée dans l'imprimerie professionnelle, la communication visuelle et l'organisation de grands événements.", content_type: 'text' },
    { page_slug: 'print', section_key: 'vision_text_2', content_value: "Elle accompagne entreprises, institutions et organisations dans la conception et la valorisation de leur image de marque, à travers une offre intégrée combinant création, production et organisation logistique.", content_type: 'text' },
    { page_slug: 'print', section_key: 'description', content_value: "MACOF Print & Com SARL propose une gamme complète de services de communication et d'impression : impression numérique et offset grand format, création d'identité visuelle, signalétique et organisation d'événements.", content_type: 'text' },

    // ═══════════════════════════════════════════════════════════════
    // CONTACT PAGE
    // ═══════════════════════════════════════════════════════════════
    { page_slug: 'contact', section_key: 'title', content_value: 'Contactez-nous', content_type: 'text' },
    { page_slug: 'contact', section_key: 'subtitle', content_value: "Nous sommes à votre écoute pour toute demande d'information, de partenariat ou de devis.", content_type: 'text' },
    { page_slug: 'contact', section_key: 'adresse', content_value: 'Manquepa en face de Banc Bleu, Kaloum, Conakry, République de Guinée', content_type: 'text' },
    { page_slug: 'contact', section_key: 'telephone', content_value: '+224 625 74 46 26 / +224 623 98 75 11', content_type: 'text' },
    { page_slug: 'contact', section_key: 'email', content_value: 'macofholding2018@gmail.com', content_type: 'text' },
  ];

  for (const pc of pagesData) {
    await db.insert(page_contents).values(pc).onConflictDoNothing();
  }

  // ─── Insert default settings ──────────────────────────────────────
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
