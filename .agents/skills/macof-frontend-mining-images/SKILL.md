---
name: macof-frontend-mining-images
description: "Vérifie et met à jour la page MACOF Mining (filiales/Mining.tsx) avec des images de carrières de mines et de machinerie lourde."
---

# macof-frontend-mining-images

## Objectif
Mettre à jour les images de la filiale MACOF Mining pour utiliser des visuels puissants et pertinents : carrières de mines, machinerie d'extraction (pelleteuses géantes), minerai brut. Sécuriser les balises images et la bannière principale.

## Etapes d'exécution
1. **Ouvrir et Analyser le Fichier :**
   - `frontend/src/pages/filiales/Mining.tsx`

2. **Remplacer l'image Héro (Header) :**
   - Dans `fallbackContent`, modifier `hero_bg` avec une image Unsplash premium montrant une carrière à ciel ouvert ou de la machinerie minière lourde :
     *Suggestion d'URL Unsplash:* `https://images.unsplash.com/photo-1516422321453-6bb3a0c7270e?q=80&w=2070&auto=format&fit=crop` (ou équivalent mine/carrière).

3. **Mettre à jour la section Réalisations/Images :**
   - S'il y a un tableau local ou des images mockups (`realisations` ou autres sections), s'assurer qu'ils affichent des images de mines/carrières.
   - S'assurer que le header est bien visible, sombre, avec l'overlay existant pour garder la lisibilité du texte.

4. **Appliquer les principes du skill `macof-fix-broken-images` :**
   - Protéger les images (hero_bg notamment) avec un constructeur d'URL et un handler `onError`.
   - Garantir qu'aucune image sur la page Mining ne soit "cassée".

## Checklist de complétion
- [ ] Le `hero_bg` montre une grande carrière de mine ou de l'équipement lourd.
- [ ] Le `hero-section` utilise l'image en pleine largeur et le style est toujours spectaculaire.
- [ ] L'attribut `onError` est ajouté aux balises `<img />`.
