import fs from 'fs';
const file = 'api/src/routes/admin/auth.routes.ts';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes("import { eventEmitter }")) {
  content = content.replace(
    "import { uploadFile, deleteFile } from '../../services/upload';",
    "import { uploadFile, deleteFile } from '../../services/upload';\nimport { eventEmitter } from '../../services/events';"
  );
}

const replacements = [
  { search: "return success(c, null, 'Demande supprimee');", emit: "demandes" },
  { search: "return success(c, updated, 'Demande mise a jour');", emit: "demandes" },
  { search: "return success(c, created, 'Filiale creee', 201);", emit: "filiales" },
  { search: "return success(c, updated, 'Filiale mise a jour');", emit: "filiales" },
  { search: "return success(c, null, 'Filiale supprimee');", emit: "filiales" },
  { search: "return success(c, created, 'Image ajoutee', 201);", emit: "galerie" },
  { search: "return success(c, updated, 'Image mise a jour');", emit: "galerie" },
  { search: "return success(c, null, 'Image supprimee');", emit: "galerie" },
  { search: "return success(c, created, 'Catalogue cree', 201);", emit: "catalogues" },
  { search: "return success(c, updated, 'Catalogue mis a jour');", emit: "catalogues" },
  { search: "return success(c, null, 'Catalogue archive');", emit: "catalogues" },
  { search: "return success(c, created, 'Contenu de page cree', 201);", emit: "pages" },
  { search: "return success(c, updated, 'Contenu mis a jour');", emit: "pages" },
  { search: "return success(c, null, 'Contenu supprime');", emit: "pages" },
  { search: "return success(c, results, `${results.length} parametres mis a jour`);", emit: "settings" },
  { search: "return success(c, created, 'Parametre cree', 201);", emit: "settings" },
  { search: "return success(c, updated, 'Parametre mis a jour');", emit: "settings" }
];

for (const rep of replacements) {
  content = content.replace(rep.search, `eventEmitter.emit('invalidate', { entity: '${rep.emit}' });\n  ${rep.search}`);
}

// Special case for bulk pages:
content = content.replace(
  "return success(c, results, `${results.length} sections ajoutees/mises a jour`);", 
  "eventEmitter.emit('invalidate', { entity: 'pages' });\n  return success(c, results, `${results.length} sections ajoutees/mises a jour`);"
);

fs.writeFileSync(file, content, 'utf8');
console.log("Safe replace completed.");
