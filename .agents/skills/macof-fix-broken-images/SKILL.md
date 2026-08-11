---
name: macof-fix-broken-images
description: Vérifie et sécurise globalement les balises images (<img>) pour empêcher les images cassées sur le site de MACOF Holding.
---

# Objectif
Appliquer une sécurité anti-bris d'image sur la page d'accueil (`Home.tsx`) et l'ensemble du site.

# Instructions
1. Vérifier la section "Expertises" de `Home.tsx`.
2. S'assurer que toutes les boucles `map` utilisent `getImageUrl(item.image)` ou une vérification ternaire stricte.
3. Remplacer les appels non sécurisés.
4. S'assurer que la fonction `.map` est exécutée sur un tableau garanti (`Array.isArray`).
