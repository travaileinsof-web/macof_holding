---
name: macof-audit-settings-sync
description: "Effectue un audit de la synchronisation des Settings (Contacts, Réseaux Sociaux) entre le Dashboard et le site public."
---

# MISSION DU SKILL
Ce skill doit auditer et corriger la synchronisation des données de type "Settings" (adresse, email, téléphone, réseaux sociaux) entre l'API backend et les composants frontend.

## ACTIONS D'AUDIT
1. Vérifie le fichier `frontend/src/hooks/useSettings.ts` :
   - L'appel API `/api/v1/settings` est-il correct ?
   - Les valeurs de `defaultSettings` sont-elles définies ?
2. Vérifie `frontend/src/pages/Contact.tsx` :
   - Est-ce que les données de contact (adresse, tel, email) utilisent le hook `useSettings` et remplacent les données statiques en dur ?
3. Vérifie `frontend/src/components/layout/Footer.tsx` :
   - Est-ce que les liens des réseaux sociaux (`facebook`, `linkedin`, `instagram`, `twitter`) sont tirés dynamiquement de `settings.social_...` ?
   - Est-ce que les coordonnées affichées dans le footer sont dynamiques ?
4. Vérifie `frontend/src/components/layout/Navbar.tsx` (Topbar) :
   - Si une topbar avec email/tel existe, est-elle liée aux settings de l'API ?

## CORRECTIONS
Si tu remarques que `Contact.tsx`, `Footer.tsx` ou `Navbar.tsx` n'utilisent pas encore les variables du hook `useSettings` (ex: `settings.contact_email`), modifie ces fichiers pour qu'ils affichent la valeur de l'API avec un fallback sur une constante si l'API ne répond pas.
