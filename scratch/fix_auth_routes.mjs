import fs from 'fs';
import path from 'path';

const file = path.resolve('api/src/routes/admin/auth.routes.ts');
let content = fs.readFileSync(file, 'utf8');

// Add import
if (!content.includes("import { eventEmitter } from '../../services/events';")) {
  content = content.replace(
    "import { uploadFile, deleteFile } from '../../services/upload';",
    "import { uploadFile, deleteFile } from '../../services/upload';\nimport { eventEmitter } from '../../services/events';"
  );
}

// Helper to inject
function injectEmit(routePattern, entity) {
  content = content.replace(
    new RegExp(`(${routePattern}[\\s\\S]*?)(return success\\(c,[\\s\\S]*?\\);)`, 'g'),
    (match, p1, p2) => {
      // Avoid double injection
      if (p1.includes(`eventEmitter.emit('invalidate'`)) return match;
      return `${p1}eventEmitter.emit('invalidate', { entity: '${entity}' });\n  ${p2}`;
    }
  );
}

// Inject in specific route blocks
injectEmit('adminDemandes\\.(patch|delete)', 'demandes');
injectEmit('adminFiliales\\.(post|put|delete)', 'filiales');
injectEmit('adminGalerie\\.(post|put|patch|delete)', 'galerie');
injectEmit('adminCatalogues\\.(post|put|delete)', 'catalogues');
injectEmit('adminPages\\.(post|put|delete)', 'pages');
injectEmit('adminSettings\\.(post|put)', 'settings');

fs.writeFileSync(file, content, 'utf8');
console.log('Successfully injected event emitters in auth.routes.ts');
