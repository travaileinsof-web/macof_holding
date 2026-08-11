---
name: macof-audit-pages-sync
description: "Vérifie la synchronisation des données gérées via la table page_contents (Partenaires, Stats, Témoignages, Textes)."
---

# MISSION DU SKILL
Ce skill audite la manière dont les sections de contenu dynamique (sauvegardées via `/api/v1/admin/pages/bulk`) s'affichent sur le site.

## ACTIONS D'AUDIT
1. Vérifie `frontend/src/pages/Home.tsx` :
   - Est-ce que `partenaires`, `stats`, et `temoignages` sont récupérés depuis la réponse de `/api/v1/pages/home` et parsés via `JSON.parse` avec blocs `try/catch` ?
   - Les sections du site itèrent-elles sur ces données (avec un fallback sur `MACOF_DATA`) ?
2. Vérifie la logique globale des routes de contenu (ex: text de la page `About.tsx` ou Hero de `Home.tsx`) :
   - Si `PagesEditor.tsx` modifie `hero_title` ou `hero_desc`, est-ce que `Home.tsx` met à jour ces valeurs dans le state `content` en fusionnant `MACOF_DATA` avec les données récupérées ?

## CORRECTIONS
Si la logique de parsing `JSON.parse` est absente ou si les composants ne se mettent pas à jour, ajoute la logique dans les `useEffect` (ou dans le cache React Query) et protège l'affichage avec des fallbacks. Assure-toi que les images des partenaires ou témoignages utilisent `/uploads/` si elles ne sont pas des liens HTTP directs.
