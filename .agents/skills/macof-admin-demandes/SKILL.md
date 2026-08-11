---
name: macof-admin-demandes
description: Configure et intègre la gestion des demandes de contact et leads (boîte de réception) dans le Dashboard Admin.
---

# Skill : macof-admin-demandes

Ce skill guide l'agent pour mettre en place la boîte de réception des messages (Leads / Demandes de contact) envoyés depuis le site web public vers le Dashboard Admin.

## Objectif
Permettre à l'administrateur de lire, traiter et archiver toutes les requêtes (demandes de devis, messages d'information, partenariats) soumises par les visiteurs.

## Étape 1 : Base de Données (Backend)
- Utilisation de la table `demandes_contact` déjà existante dans le schéma PostgreSQL.
- **Vérification :** S'assurer que les routes de lecture (`GET /api/v1/demandes`) et de mise à jour de statut (`PUT /api/v1/demandes/:id`) sont correctement implémentées pour renvoyer la liste des messages avec les filiales associées.

## Étape 2 : Tableau de Bord Admin (Frontend)
1. **DemandesManager.tsx (ou Inbox) :** Créer un composant listant toutes les demandes (tableau ou liste avec aperçu).
2. Ajouter des filtres (par statut : "nouveau", "en_cours", "traite" et par "filiale").
3. Cliquer sur un message ouvre une vue détaillée (Nom complet, société, email, téléphone, message complet, filiale).
4. Ajouter des boutons d'action rapide pour changer le statut du lead.

## Étape 3 : Site Public (Frontend)
- Vérifier que les formulaires de contact globaux (`Contact.tsx`) et spécifiques (ex: formulaire en bas de `Mining.tsx`) tapent bien l'endpoint `POST /api/v1/demandes` avec le bon identifiant de filiale (ou sans, si c'est pour le siège).
- S'assurer de la validation des données en amont.
