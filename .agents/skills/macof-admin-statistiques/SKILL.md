---
name: macof-admin-statistiques
description: "Configure et intègre la gestion dynamique des statistiques et chiffres clés dans le Dashboard Admin (StatsManager.tsx) et le site public."
---

# MISSION DU SKILL
Ce skill est dédié à l'implémentation de la gestion dynamique des **Statistiques / Chiffres Clés** via le Dashboard Administrateur.

## INSTRUCTIONS D'IMPLÉMENTATION
1. **Dashboard Admin (`StatsManager.tsx`)** :
   - Vérifie et finalise l'interface existante permettant de modifier les chiffres globaux (Page d'accueil) et les chiffres spécifiques (Par filiale).
2. **Site Public (`Home.tsx` et Pages Filiales)** :
   - Sur `Home.tsx`, la section des statistiques ("Année de création", "Collaborateurs", etc.) doit récupérer les données de `page_contents` (via `section_key = stats`).
   - Sur les pages des filiales (ex: `Transit.tsx`), les deux chiffres mis en avant dans la section Vision/Chiffres doivent provenir de l'API (via les colonnes `stat_1_value`, etc. de la filiale, ou de `page_contents`).
   - Maintiens les animations de compteurs (counters) avec GSAP si elles existent.
   - Prévois un fallback solide si l'API est indisponible.
3. **Vérification** :
   - Mettre à jour "50+ projets" en "100+ projets" dans l'admin doit s'actualiser immédiatement sur le site.
