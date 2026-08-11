---
name: macof-audit-galerie-sync
description: "Vérifie la synchronisation des données de la Galerie (Images, Réalisations) entre le Dashboard et les pages publiques."
---

# MISSION DU SKILL
Ce skill audite la manière dont les images (et projets) gérées dans le `GalerieManager` du Dashboard s'affichent sur le site public.

## ACTIONS D'AUDIT
1. Vérifie `frontend/src/pages/Galerie.tsx` :
   - Est-ce que les images affichées utilisent l'appel API `/api/v1/galerie` ?
   - Les catégories (Masonry / Filtres) correspondent-elles aux métadonnées des images de la base ?
2. Vérifie `frontend/src/pages/Home.tsx` (Section Réalisations) :
   - Le composant fait-il un appel à `/api/v1/galerie?limit=4` (ou similaire) ?
   - Les images dynamiques utilisent-elles le préfixe `/uploads/` si nécessaire (via une logique `startsWith('http')`) ?

## CORRECTIONS
Si les images sont statiques, implémente la récupération API dans `Galerie.tsx` et `Home.tsx` avec des fallbacks robustes et assure-toi que les chemins d'images sont corrects pour s'afficher publiquement.
