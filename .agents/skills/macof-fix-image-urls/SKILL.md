---
name: macof-fix-image-urls
description: "Sécurise et standardise la résolution des chemins d'images (uploads) entre l'API Hono et le frontend Vite pour éviter tout problème d'images cassées en production."
---

# MISSION DU SKILL
Ce skill garantit que toutes les images uploadées depuis le Dashboard Admin s'affichent correctement sur le Site Public et dans l'Admin lui-même, peu importe l'environnement (développement, staging, production). Il centralise la gestion des URLs d'images pour éviter les erreurs de chemins relatifs.

## ÉTAPES D'EXÉCUTION

### ÉTAPE 1 : Standardisation de la fonction d'Upload (API)
- Vérifier `api/src/services/upload.ts` : s'assurer que les chemins retournés en base de données sont cohérents (ex: commencer toujours par `/uploads/...`).
- S'assurer que la route de contenu statique (`serveStatic`) dans `api/src/index.ts` est correctement configurée pour exposer le dossier `/uploads/`.

### ÉTAPE 2 : Création d'un utilitaire Frontend (React)
- Dans le frontend, créer un utilitaire `getImageUrl(path: string | undefined): string` (par exemple dans `src/utils/image.ts`).
- Cet utilitaire doit :
  1. Si le chemin est vide, retourner un placeholder.
  2. Si le chemin est déjà une URL absolue (`http://` ou `https://`), le retourner tel quel.
  3. Sinon, concaténer `import.meta.env.VITE_API_URL` avec le chemin relatif (en gérant correctement les slashes).

### ÉTAPE 3 : Refactorisation globale des balises Image
- Rechercher dans tout le projet frontend (`src/pages/**/*.tsx`, `src/components/**/*.tsx`) les balises `<img src={...} />` ou les `backgroundImage` affichant du contenu dynamique.
- Envelopper ces sources dynamiques avec la fonction `getImageUrl()`.

### ÉTAPE 4 : Vérification de la configuration d'Environnement
- Vérifier la présence de `.env` et `.env.example` côté frontend pour s'assurer que `VITE_API_URL` est bien documenté et utilisé.

## CRITÈRES DE SUCCÈS
- Aucune erreur 404 (Not Found) sur les images dans la console du navigateur.
- Les images téléchargées par l'administrateur s'affichent parfaitement sur toutes les pages publiques (Galerie, Filiales, Accueil).
- Le comportement est robuste même si `VITE_API_URL` possède un slash de fin ou non.
