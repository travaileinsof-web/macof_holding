---
name: macof-frontend-transit-redesign
description: "Refonte visuelle de la page MACOF Transit (filiales/Transit.tsx) pour l'aligner parfaitement sur le style global haut de gamme (Noir, Blanc, Rouge, Serif) de MACOF Holding."
---

# macof-frontend-transit-redesign

## Objectif
La page MACOF Transit utilise actuellement une palette (`slate-900`, `blue-600`) et une structure de composants différente des autres pages (Print, Mining, Immobilier). L'objectif est de refondre cette page pour appliquer strictement le style global du site :
- Fond principal Blanc / Gris très clair (`bg-white` / `bg-neutral-50`).
- Sections sombres en Noir absolu (`bg-black` / `bg-[#111111]`).
- Accents en Rouge MACOF ou Or (`#C4A47C`), selon la charte (`text-red-600` ou `text-[#C4A47C]`).
- Typographie Serif pour les grands titres (`font-serif`).
- Boutons standards "luxury" (Noir/Or ou Noir/Rouge).

## Etapes d'exécution
1. **Ouvrir et Éditer :**
   - `frontend/src/pages/filiales/Transit.tsx`

2. **Remplacer les teintes Blue/Slate :**
   - Rechercher et remplacer les classes comme `bg-slate-900` par `bg-[#111111]` ou `bg-black`.
   - Rechercher et remplacer `bg-blue-600`, `text-blue-600`, `text-blue-300`, `from-blue-900` par les teintes MACOF (ex: `text-[#C4A47C]`, `bg-[#C4A47C]`, ou du Rouge institutionnel).
   - Remplacer `bg-slate-50` par `bg-white` ou `bg-gray-50`.
   - Retirer les styles de dégradés trop orientés "tech" (`bg-gradient-to-r from-blue-400 to-cyan-300`) pour des tons sobres et élégants (`text-white`, `text-[#C4A47C]`).

3. **Aligner les Boutons :**
   - Utiliser `<Button variant="luxury">` avec les bonnes classes pour correspondre au look des autres pages.

4. **Aligner la Hero Section :**
   - Rendre le Hero Section (l'en-tête) similaire à ceux de `Print` ou `Mining` : overlay sombre, titre massif `font-serif`, texte centré ou aligné gauche, mais très premium.

5. **Appliquer `macof-fix-broken-images` :**
   - Vérifier et sécuriser toutes les images (`<img />`) avec une fonction de résolution et `onError`.

## Checklist de complétion
- [ ] Plus aucune trace de `slate-` ou `blue-` n'apparaît dans les classes (hors images).
- [ ] La charte Noir, Blanc, Or/Rouge est respectée.
- [ ] La typographie respecte `font-serif` pour les gros titres.
- [ ] Les images (navires, avions, douane) sont bien rendues et sécurisées.
