---
name: macof-frontend-domaines
description: Vérifie et met à jour la page Liste des Domaines (Domaines.tsx) de MACOF Holding avec une grille B2B premium.
---

# Objectif
Réorganiser l'ordre d'affichage des filiales.

# Instructions
1. **Fichier `Domaines.tsx`** :
   - Réorganiser le tableau `FALLBACK_DOMAINES` pour que l'ordre des éléments corresponde strictement à leur numérotation de 01 à 06 :
     1. Immobilier
     2. Restauration
     3. Print
     4. Mining
     5. Transit
     6. Fishing
   - S'assurer que le mapping JSX respecte cet ordre et que l'alternance d'affichage (`lg:flex-row-reverse`) reste fluide.
