---
name: macof-admin-temoignages
description: "Configure et intègre la gestion dynamique des témoignages clients dans le Dashboard Admin (TemoignagesManager.tsx) et le site public."
---

# MISSION DU SKILL
Ce skill est dédié à la création de la gestion dynamique des **Témoignages / Avis Clients** via le Dashboard Administrateur.

## INSTRUCTIONS D'IMPLÉMENTATION
1. **Backend (API)** :
   - Utilise la table `page_contents` (avec `page_slug = home`, `section_key = temoignages`) pour stocker un tableau JSON des témoignages.
2. **Dashboard Admin (`TemoignagesManager.tsx`)** :
   - Crée ce nouveau composant dans le dossier `admin/`.
   - Il doit permettre d'ajouter (Nom, Poste, Entreprise, Message, Avatar), modifier et supprimer des témoignages.
   - Ajoute-le au menu latéral du Dashboard Administrateur (`DashboardLayout.tsx`).
3. **Site Public (`Home.tsx` ou `About.tsx`)** :
   - Intègre une nouvelle section élégante de type Carrousel (Slider) ou Grille pour afficher les témoignages.
   - Le design doit être ultra-premium, avec citations, étoiles, et avatars.
   - Récupère ces témoignages depuis l'API. Utilise des faux témoignages corporatifs (B2B) en fallback (ex: DG d'une grande entreprise partenaire).
4. **Vérification** :
   - L'ajout d'un témoignage dans l'admin doit l'insérer dans le carrousel sur le site public.
