---
name: macof-fix-realtime-sync
description: "Passe l'architecture de synchronisation de polling (refetchInterval) à une architecture temps réel (Server-Sent Events - SSE) pour une réactivité instantanée du site public."
---

# MISSION DU SKILL
Ce skill a pour objectif de remplacer le mécanisme de rafraîchissement actuel (polling avec `refetchInterval: 30000` via React Query) du site public de MACOF Holding par une solution en temps réel utilisant les **Server-Sent Events (SSE)**. L'objectif est que toute modification sauvegardée dans le Dashboard Admin (ex: changement de description, ajout d'une photo) se répercute instantanément (0 seconde d'attente) sur les clients connectés, tout en économisant les ressources du serveur.

## ÉTAPES D'EXÉCUTION

### ÉTAPE 1 : Configuration du Endpoint SSE côté API (Hono)
- Dans le backend (ex: `api/src/routes/events.routes.ts`), créer un endpoint SSE (ex: `GET /api/v1/events`).
- Utiliser le module SSE de Hono (ou un flux natif) pour maintenir les connexions des clients ouvertes.
- Créer un gestionnaire d'événements (`EventEmitter` ou simple tableau de clients) pour notifier tous les clients lorsqu'une ressource est modifiée.

### ÉTAPE 2 : Déclenchement des événements dans les Controllers
- Dans `api/src/routes/admin/auth.routes.ts` (ou tout contrôleur d'écriture), injecter l'appel au gestionnaire d'événements après un succès d'écriture (`POST`, `PUT`, `DELETE`).
- Par exemple, lors de la sauvegarde avec `/bulk` : envoyer un événement `{ type: 'INVALIDATE', entity: 'pages' }`.
- Faire de même pour la galerie, les paramètres, etc.

### ÉTAPE 3 : Consommation SSE côté Frontend Public (React)
- Créer un hook custom `useRealtimeSync.ts` dans le frontend.
- Ce hook utilisera l'API native `EventSource` pour écouter `GET /api/v1/events`.
- Sur réception d'un événement `INVALIDATE`, le hook appellera `queryClient.invalidateQueries({ queryKey: [event.entity] })`.

### ÉTAPE 4 : Nettoyage et Optimisation
- Supprimer tous les `refetchInterval: 30000` des fichiers du site public (comme `Contact.tsx`, `Transit.tsx`, etc.).
- S'assurer que le composant `EventSource` se ferme proprement lors du démontage (cleanup du `useEffect`).

## CRITÈRES DE SUCCÈS
- Quand on modifie un texte dans l'admin, la page publique ouverte dans un autre onglet se met à jour visuellement sans que l'utilisateur n'ait à recharger la page.
- L'onglet Réseau (Network) du navigateur ne montre plus de requêtes en boucle toutes les 30 secondes.
