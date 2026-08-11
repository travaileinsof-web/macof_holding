---
name: macof-frontend-print-images
description: "Vérifie et met à jour la page MACOF Print & Com (filiales/Print.tsx) avec des images d'usines d'impression et d'imprimerie."
---

# macof-frontend-print-images

## Objectif
Remplacer les images génériques de la filiale MACOF Print & Com par des visuels très pertinents représentant des usines d'impression, des presses industrielles (Offset) ou de l'imprimerie haute définition. Sécuriser également la bannière principale (`hero_bg`).

## Etapes d'exécution
1. **Ouvrir et Analyser le Fichier :**
   - `frontend/src/pages/filiales/Print.tsx`

2. **Remplacer l'image Héro (Header) :**
   - Dans `fallbackContent`, modifier `hero_bg` avec une image Unsplash premium montrant une imprimerie industrielle ou des rouleaux de papier d'impression :
     *Suggestion d'URL Unsplash:* `https://images.unsplash.com/photo-1590493863484-9043e015d5f2?q=80&w=2070&auto=format&fit=crop` (ou équivalent usine/presse offset).

3. **Mettre à jour le Portfolio de Print :**
   - Mettre à jour le tableau `portfolio` dans le composant avec des images liées à l'impression, au façonnage, et à l'identité visuelle industrielle. Utiliser des URL Unsplash de qualité pour remplacer les anciennes.
   - Exemple d'images: 
     - Packaging / Boîtes
     - Offset / Machines d'imprimerie
     - Nuanciers Pantone

4. **Appliquer les principes du skill `macof-fix-broken-images` :**
   - S'assurer que les balises `<img>` (hero bg, portfolio, etc.) disposent de la protection `onError`.
   - S'assurer que le header est bien visible.

## Checklist de complétion
- [ ] Le `hero_bg` représente bien une usine d'impression/imprimerie industrielle.
- [ ] Le `portfolio` utilise des images en rapport avec l'imprimerie.
- [ ] Le `hero-section` utilise l'image en pleine largeur correctement et avec `onError` de protection.
