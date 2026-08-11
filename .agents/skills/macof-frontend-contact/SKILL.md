---
name: macof-frontend-contact
description: "Vérifie et met à jour la page Contact (Contact.tsx) avec un split-screen et les données de contact MACOF."
---

# MISSION DU SKILL
Adapte la **Page Contact** (`frontend/src/pages/Contact.tsx`).

## INSTRUCTIONS DE VÉRIFICATION ET MISE À JOUR
1. **Contenu Exact** :
   - Téléphones : +224 625 74 46 26 / 623 98 75 11
   - Email : macofholding2018@gmail.com
   - Adresse : Manquepa en face de banc bleu / Kaloum / République de Guinée
2. **Architecture Ultra-Riche** :
   - Section 2 colonnes (Split-Screen) :
     - Gauche : Coordonnées avec de grandes icônes SVG, et idéalement une Map ou un visuel de bâtiment corporate.
     - Droite : Le formulaire de contact hyper épuré.
   - **Important** : Le formulaire doit intégrer un `<select>` permettant à l'utilisateur de choisir la filiale concernée (Immobilier, Restauration, Print, Mining, Transit, Fishing).
3. **Design** : Accessibilité, champs de formulaires larges (Tailwind), focus rings nets.
4. **Code** : Maintien de l'appel API `axios.post('/api/v1/demandes', ...)` si existant.
