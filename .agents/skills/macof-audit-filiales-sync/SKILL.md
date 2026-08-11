---
name: macof-audit-filiales-sync
description: "Vérifie la synchronisation des données de Filiales entre le Dashboard (FilialesManager) et les pages publiques (Domaines.tsx, Home.tsx)."
---

# MISSION DU SKILL
Ce skill audite la manière dont les filiales créées ou modifiées dans le Dashboard s'affichent sur le site public.

## ACTIONS D'AUDIT
1. Vérifie `frontend/src/pages/Home.tsx` :
   - Est-ce que le state `filiales` est mis à jour depuis `axios.get('/api/v1/filiales')` dans le `fetchContent` ?
   - Est-ce que la section des piliers / filiales itère sur ce state dynamique (avec fallback) ?
2. Vérifie `frontend/src/pages/Domaines.tsx` :
   - Est-ce que la page fait une requête `useQuery` ou `axios` vers `/api/v1/filiales` ?
   - Les cartes des filiales sont-elles générées à partir des données de l'API (avec logo, nom, description, lien) ?
3. Vérifie les pages filiales (ex: `Mining.tsx`, `Transit.tsx`) :
   - Sont-elles capables de puiser dans `page_contents` (via `api/v1/pages/:slug`) pour obtenir leurs données dynamiques spécifiques ?

## CORRECTIONS
Si `Domaines.tsx` ou la section filiales de `Home.tsx` utilise exclusivement des données statiques sans appeler l'API, intègre l'appel API (React Query ou Axios) pour afficher les vraies données gérées depuis le Dashboard.
