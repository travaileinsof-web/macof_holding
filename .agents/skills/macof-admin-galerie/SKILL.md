---
name: macof-admin-galerie
description: Configure et intègre la gestion dynamique de la galerie d'images dans le Dashboard Admin (GalerieManager.tsx) et le site public.
---

# Skill : macof-admin-galerie

Ce skill guide l'agent pour synchroniser la gestion de la Galerie entre le tableau de bord Admin et le Frontend React du projet MACOF Holding.

## Objectif
Permettre à l'administrateur d'ajouter, modifier et supprimer des images dans la galerie globale, en leur associant des métadonnées (titre, description courte, filiale liée).

## Étape 1 : Base de Données (Backend)
- La table utilisée est `galerie`. 
- **Vérification :** Vérifier l'existence et la fiabilité du CRUD complet (`GET`, `POST`, `PUT`, `DELETE` sur `/api/v1/galerie`).
- **Gestion des Images :** Permettre l'insertion d'URLs d'images (solution privilégiée en serverless).

## Étape 2 : Tableau de Bord Admin (Frontend)
1. **GalerieManager.tsx :** Créer un composant permettant l'affichage de toutes les images sous forme de tableau ou de grille.
2. Ajouter un bouton "Ajouter une image" ouvrant une modale.
3. La modale doit contenir : Titre, Filiale (menu déroulant), Type de projet, et URL de l'image. L'enregistrement doit appeler `POST /api/v1/galerie`.

## Étape 3 : Site Public (Frontend)
1. **Galerie.tsx :** S'assurer que le composant de la galerie publique exécute `GET /api/v1/galerie` pour charger les images.
2. Implémenter ou vérifier le système de filtre (tri par filiale ou par `type_projet`) pour permettre aux visiteurs de naviguer dynamiquement.
