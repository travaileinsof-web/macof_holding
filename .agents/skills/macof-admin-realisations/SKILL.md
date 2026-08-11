---
name: macof-admin-realisations
description: Configure et intègre la gestion dynamique des réalisations par filiale dans le Dashboard Admin et le site public.
---

# Skill : macof-admin-realisations

Ce skill guide l'agent pour synchroniser la gestion des réalisations (qui apparaissent sur les pages des filiales spécifiques, ex: Mining, Immobilier). 

## Objectif
Gérer les "Réalisations" non pas comme une table globale, mais comme un contenu structuré rattaché spécifiquement à la page de la filiale concernée, via la table `page_contents`.

## Étape 1 : Base de Données (Backend)
- Utilisation de la table `page_contents`.
- Modèle de données : Le champ `page_slug` correspondra au slug de la filiale (ex: `mining`, `fishing`), `section_key` vaudra `realisations`, et `content_value` stockera un tableau JSON valide (ex: `[{"title": "Projet X", "image": "url", "desc": "..."}]`).
- **Vérification :** S'assurer que les routes de gestion du CMS / pages (`GET` et `PUT` sur `/api/v1/pages/:slug`) sont opérationnelles.

## Étape 2 : Tableau de Bord Admin (Frontend)
1. **RealisationsManager.tsx :** Créer un composant dédié dans le dashboard.
2. L'interface doit permettre de sélectionner une filiale, puis de charger son tableau JSON actuel.
3. Permettre l'ajout, la modification ou la suppression d'une réalisation dans ce tableau, puis de renvoyer le JSON mis à jour via `PUT /api/v1/pages/:slug`.

## Étape 3 : Site Public (Frontend)
1. Dans la page spécifique de chaque filiale (ex: `Mining.tsx`, `Immobilier.tsx`), récupérer les données de la page (`useQuery`).
2. S'il existe un contenu pour la clé `realisations`, le parser depuis le JSON et l'afficher sous forme de grille ou de slider.
