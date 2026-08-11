---
name: macof-admin-partenaires
description: Configure et intègre la gestion dynamique des partenaires dans le Dashboard Admin (PartenairesManager.tsx) et le site public.
---

# Skill : macof-admin-partenaires

Ce skill guide l'agent pour gérer dynamiquement les logos et noms des partenaires de MACOF Holding.

## Objectif
Permettre à l'administrateur de maintenir la liste des partenaires. Ces données sont utilisées dans les bandeaux défilants du site public (Accueil, À propos).

## Étape 1 : Base de Données (Backend)
- Utilisation de la table `page_contents` (comme pour les réalisations, pour éviter la création d'une nouvelle table).
- Clés : `page_slug = 'home'`, `section_key = 'partenaires'`.
- `content_value` stockera un tableau JSON de type : `[{"name": "Nom", "logo": "url"}]`.

## Étape 2 : Tableau de Bord Admin (Frontend)
1. **PartenairesManager.tsx :** Créer un composant listant les partenaires actuels (lus depuis le JSON).
2. Proposer un formulaire pour ajouter un partenaire (Nom, URL du Logo) ou en supprimer un.
3. Sauvegarder via la route CMS `PUT /api/v1/pages/home`.

## Étape 3 : Site Public (Frontend)
1. Modifier les composants affichant le bandeau partenaire (souvent un slider dans `Home.tsx` ou un composant `Partners.tsx`).
2. Les brancher sur la requête API de la page d'accueil pour lire `partenaires`.
3. S'assurer que le rendu est fluide et professionnel.
