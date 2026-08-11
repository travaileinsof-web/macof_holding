---
name: macof-audit-global-ultrasync
description: "Audit ultra-complet de bout en bout du projet MACOF Holding : vérifie la communication fluide, la cohérence des données et la synchronisation totale entre la base de données, l'API, le Dashboard Admin et le site public."
---

# MISSION DU SKILL
Ce skill orchestre une vérification exhaustive de l'ensemble de l'architecture du projet MACOF Holding (Monorepo Hono/React). L'objectif est de s'assurer qu'absolument chaque modification effectuée dans le **Tableau de bord (Admin)** se répercute instantanément, fidèlement, et sans erreur sur le **Site Public (Frontend)**, et que les données provenant du site public (comme les formulaires de contact/devis) remontent parfaitement dans le dashboard.

Il couvre les 3 couches : **Base de Données (Drizzle/Neon)**, **API (Hono)**, et **Frontend (React/Vite/Axios/React Query)**.

## PHASE 1 : AUDIT DU SCHEMA DE BASE DE DONNÉES (DRIZZLE ORM)
*Fichier de référence : `api/src/db/schema.ts`*
1. **Cohérence des Tables :** S'assurer que les tables essentielles existent et sont structurées correctement pour supporter les fonctionnalités :
   - `filiales` (nom, description, logo, hero_image, color_theme, stats_json)
   - `realisations` (titre, image_url, filiale_id, annee)
   - `temoignages` (nom, poste, message, avatar, filiale_id)
   - `partenaires` (nom, logo_url, lien)
   - `contacts_leads` (nom, email, telephone, filiale_concernee, message, status)
   - `settings` (configurations globales : emails de contact, téléphone central, réseaux sociaux, adresse physique)
   - `page_contents` (contenus textes dynamiques pour l'accueil, à propos, etc.)
2. **Migrations :** Vérifier que la base Neon Database est synchronisée avec `drizzle-kit push` ou équivalent.

## PHASE 2 : AUDIT DES ENDPOINTS DE L'API (HONO)
*Fichiers de référence : `api/src/routes/*.ts`*
1. **CRUD Complet :** Vérifier que chaque entité de la base dispose de ses routes `GET`, `POST`, `PUT/PATCH`, et `DELETE`.
2. **Validation Zod :** Contrôler que les schémas Zod (Body & Params) correspondent exactement aux types du Frontend et de la DB.
3. **Sécurité :** Vérifier que les routes de modification (`POST`, `PUT`, `DELETE`) et les lectures sensibles sont protégées par le middleware d'authentification (vérification du JWT Admin).
4. **Gestion des Fichiers (Uploads) :** Analyser le flux d'upload d'images (logos, galerie, hero). Les URL renvoyées doivent être absolues ou facilement résolubles par le Frontend.
5. **CORS :** Valider que le middleware CORS permet les requêtes depuis l'URL locale et de production du frontend.

## PHASE 3 : AUDIT DU DASHBOARD ADMIN (REACT)
*Fichiers de référence : `frontend/src/pages/admin/*.tsx`*
1. **Formulaires & Soumissions :**
   - Les formulaires envoient-ils bien les payloads correspondant aux schémas Zod de l'API ?
   - Les appels Axios contiennent-ils le token JWT Bearer (`localStorage.getItem('admin_token')`) ?
2. **Gestion de l'État (React Query / useEffect) :**
   - Lorsqu'une entité est ajoutée, modifiée ou supprimée, l'affichage se met-il à jour automatiquement (ex: invalidation de la requête `queryClient.invalidateQueries(...)` ou mise à jour du state local) ?
3. **Feedback Visuel :** Présence de toasts ou d'alertes de succès/erreur pour garantir que l'administrateur comprend si la synchronisation a fonctionné.
4. **Composants d'Upload :** Les images envoyées via le dashboard sont-elles correctement transmises en `FormData` à l'API ?

## PHASE 4 : AUDIT DU SITE PUBLIC (REACT)
*Fichiers de référence : `frontend/src/pages/*.tsx` et `frontend/src/components/*.tsx`*
1. **Récupération des Données (Fetch) :**
   - Les pages (Accueil, À Propos, Filiales, Domaines) utilisent-elles des appels dynamiques `GET /api/v1/...` au lieu de données en dur (mockées) ?
   - En cas d'erreur de l'API ou d'absence de réseau, les pages prévoient-elles un "Fallback" élégant (données statiques par défaut ou squelettes de chargement) pour éviter une page blanche ?
2. **Résolution des URLs d'Images :** 
   - Le composant gère-t-il correctement le préfixe serveur pour les chemins relatifs (ex: `/uploads/...` transformé en `import.meta.env.VITE_API_URL + '/uploads/...'`) ?
3. **Performance :** L'appel aux données se fait-il de manière optimisée (React Query, ou `useEffect` avec dépendances correctes) pour ne pas bloquer les animations GSAP / Lenis au chargement de la page ?
4. **Formulaires Utilisateurs :** Le formulaire de Contact/Devis (`frontend/src/pages/Contact.tsx`) pointe-t-il vers la bonne route `POST /api/v1/demandes` ? Est-ce que les données sont bien insérées en BDD pour être vues par l'admin ?

## PHASE 5 : SCÉNARIOS DE TEST DE BOUT EN BOUT (E2E)
Pour valider l'audit, voici les scénarios à simuler :
1. **Test Settings :** Modifier le numéro de téléphone global dans `Settings (Admin)` -> Vérifier son changement immédiat dans le `Footer` et `Navbar` du site public.
2. **Test Filiale :** Modifier la description d'une filiale existante (ex: MACOF Transit) dans `FilialesManager` -> Vérifier que `frontend/src/pages/filiales/Transit.tsx` affiche la nouvelle description.
3. **Test Galerie/Réalisations :** Uploader une nouvelle image associée à une filiale -> Vérifier son apparition instantanée sur la page `/galerie` avec le bon filtrage.
4. **Test Lead :** Remplir le formulaire sur la page publique `/contact` -> Vérifier l'apparition immédiate de la demande dans `Leads (Admin)`.

## ACTIONS DE CORRECTION (RECOMMANDÉES)
- Si une page publique utilise encore des données en dur (Textes, Images, Listes) alors que le endpoint API existe : *Remplacer par un Fetch React Query ou Axios*.
- Si le Dashboard modifie la BDD mais que le Site Public ne voit pas le changement sans recharger (F5) : *Vérifier l'invalidation du cache React Query*.
- S'il y a des images cassées : *Vérifier l'URL de base de l'API et la construction des `<img src={...}>`.*
