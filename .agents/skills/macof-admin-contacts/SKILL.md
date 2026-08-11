---
name: macof-admin-contacts
description: Configure et intègre la gestion dynamique des contacts (emails, téléphones, adresses, réseaux sociaux) dans le Dashboard Admin (Settings.tsx) et le site public.
---

# Skill : macof-admin-contacts

Ce skill guide l'agent pour synchroniser les informations de contact globales et spécifiques par filiale entre le tableau de bord Admin et le Frontend React du projet MACOF Holding.

## Objectif
Permettre à l'administrateur d'ajouter, de modifier et de supprimer des numéros de téléphone, des emails professionnels et des réseaux sociaux depuis l'interface d'administration. Les données doivent s'afficher en temps réel sur le site vitrine.

## Étape 1 : Base de Données (Backend)
- Les contacts **globaux** (Siège) sont gérés dans la table `settings` (clés : `contact_email`, `contact_phone`, `contact_address`, `social_facebook`, `social_linkedin`, etc.).
- Les contacts **spécifiques** sont gérés via les colonnes `email` et `telephone` de la table `filiales`.
- **Vérification :** S'assurer que les routes API `GET /api/v1/settings`, `PUT /api/v1/settings`, `GET /api/v1/filiales`, et `PUT /api/v1/filiales/:id` existent et sont fonctionnelles dans le backend Hono.

## Étape 2 : Tableau de Bord Admin (Frontend)
1. **SettingsManager.tsx :** Créer ou mettre à jour ce composant dans le Dashboard pour afficher un formulaire permettant de modifier les champs de `settings`. L'enregistrement doit envoyer un `PUT` ou `POST` vers l'API.
2. **FilialesManager.tsx :** Mettre à jour la modale d'édition d'une filiale pour inclure des champs `email` et `telephone`. 

## Étape 3 : Site Public (Frontend)
1. **Composants Globaux :** Modifier `Footer.tsx`, `Topbar.tsx` et `Contact.tsx` pour qu'ils récupèrent (via `useQuery`) les contacts globaux de l'API `/api/v1/settings`.
2. **Pages de Filiales :** Modifier les pages spécifiques (`Mining.tsx`, `Fishing.tsx`, etc.) pour afficher en priorité `filiale.telephone` et `filiale.email`. Si ces champs sont vides, appliquer un fallback intelligent vers les contacts globaux.
