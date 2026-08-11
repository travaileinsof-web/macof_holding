---
name: macof-backend-migrate-seed
description: Réinitialise la base de données PostgreSQL (Neon) du projet MACOF Holding, met à jour le schéma (push) et injecte les données de base (seed).
---

# Objectif
Ce skill sert à nettoyer intégralement la base de données PostgreSQL de toute donnée parasite et à la réinitialiser avec les données par défaut approuvées (Admin, Settings, Filiales, Textes Ultra-Premium B2B) en utilisant Drizzle ORM.

# Contexte
Le backend est situé dans le répertoire `api/`.
Il utilise :
- Node.js (Serverless)
- PostgreSQL (Neon Database)
- Drizzle ORM

# Instructions d'exécution

1. **Vérifier l'environnement :**
   S'assurer que le fichier `api/.env` existe et contient la variable `DATABASE_URL` pointant vers la base Neon PostgreSQL.

2. **Mettre à jour le schéma (Migration / Push) :**
   Lancer la commande suivante dans le répertoire `api/` pour synchroniser le schéma de base de données :
   `npm run db:push`

3. **Réinitialiser et Injecter (Seed) :**
   Lancer la commande suivante dans le répertoire `api/` pour effacer les anciennes tables et injecter les nouvelles données propres :
   `npm run db:seed`

4. **Validation :**
   Vérifier que les commandes ne retournent aucune erreur SQL. Les "anciennes versions" du site devraient disparaître du frontend.
