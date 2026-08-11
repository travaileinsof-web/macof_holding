---
name: macof-frontend-galerie
description: "Vérifie et met à jour la page Galerie (Galerie.tsx) avec un filtrage masonry dynamique pour chaque filiale."
---

# MISSION DU SKILL
Adapte la **Page Galerie** (`frontend/src/pages/Galerie.tsx`) pour afficher une interface premium.

## INSTRUCTIONS DE VÉRIFICATION ET MISE À JOUR
1. **Architecture Ultra-Riche** :
   - Hero simple "Nos Réalisations en Images".
   - Filtres interactifs statiques : "Tout", "Immobilier", "Restauration", "Print", "Mining", "Transit", "Fishing".
   - Grille Masonry ou asymétrique haut de gamme, gérant l'apparition fluide des images (sans saut brusque).
   - Lightbox : Clic sur l'image pour affichage plein écran (si possible avec une librairie légère ou une simple modale Tailwind).
2. **Images B2B** : Si les images ne sont pas chargées par l'API, créer un "fallback" constant d'images B2B magnifiques (Unsplash) liées à chaque catégorie pour démontrer la capacité du frontend.
3. **Code** : React, Tailwind, Framer Motion ou GSAP pour le filtrage (layout animations).
