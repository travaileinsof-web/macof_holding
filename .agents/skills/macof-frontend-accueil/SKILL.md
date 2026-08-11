---
name: macof-frontend-accueil
description: "Vérifie et met à jour la page d'Accueil (Home.tsx) avec les informations exactes de MACOF Holding, son architecture ultra-riche, et des images B2B."
---

# MISSION DU SKILL
Ce skill est spécifiquement adapté à la **Page d'Accueil** du site MACOF Holding.
Ton rôle est de vérifier que `frontend/src/pages/Home.tsx` existe, puis de le mettre à jour pour correspondre à l'architecture ultra-riche et au contenu exact défini ci-dessous.
Si le fichier n'existe pas, tu dois le créer.

## INSTRUCTIONS DE VÉRIFICATION ET MISE À JOUR
1. **Contenu Exact** : 
   - Titre du Hero : "MACOF HOLDING / L'art de façonner l'avenir"
   - Introduction : "MACOF Holding est un groupe de droit guinéen structuré autour d'une vision ambitieuse..."
   - Les 6 Piliers : MACOF Immobilier SARL, SEBA International, MACOF Print & Com SARL, MACOF Mining SARL, MACOF Transit SARL, MACOF Fishing SARL.
2. **Architecture Ultra-Riche** :
   - Section 1 : Hero Premium avec vidéo/image haute qualité (fond sombre).
   - Section 2 : Introduction asymétrique avec typographie luxueuse.
   - Section 3 : Cartes interactives des 6 filiales avec micro-animations au survol.
   - Section 4 : Chiffres clés / Réassurance avec compteurs animés.
   - Section 5 : Aperçu Galerie (masonry) des réalisations.
   - Section 6 : CTA de contact percutant.
3. **Images B2B** :
   - Utilise Unsplash avec des requêtes précises : `https://images.unsplash.com/photo-[ID]?q=80&w=2000&auto=format&fit=crop`
   - Les images doivent être **strictement adaptées au domaine** (B2B, corporate, institutionnel, bâtiment moderne).
4. **Code** : React, TypeScript, Tailwind CSS, GSAP pour les animations. Ne supprime aucune importation essentielle. Si la DB n'est pas utilisée, injecte les textes en dur (hardcoded) comme fallback robuste.
