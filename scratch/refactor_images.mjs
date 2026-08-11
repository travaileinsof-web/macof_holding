import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function (file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.resolve('frontend/src'));

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // 1. Replace the long ternary with getImageUrl
  const regex1 = /src=\{([a-zA-Z0-9_.]+)\?\.startsWith\('\/'\)\s*\|\|\s*\1\?\.startsWith\('http'\)(\s*\|\|\s*\1\?\.startsWith\('blob'\))?\s*\?\s*\1\s*:\s*`\/uploads\/\$\{\1\}`\s*\}/g;
  if (regex1.test(content)) {
    content = content.replace(regex1, 'src={getImageUrl($1)}');
    changed = true;
  }
  
  const regex1b = /src=\{([a-zA-Z0-9_.]+)\.startsWith\('\/'\)\s*\|\|\s*\1\.startsWith\('http'\)(\s*\|\|\s*\1\.startsWith\('blob'\))?\s*\?\s*\1\s*:\s*`\/uploads\/\$\{\1\}`\s*\}/g;
  if (regex1b.test(content)) {
    content = content.replace(regex1b, 'src={getImageUrl($1)}');
    changed = true;
  }

  // 2. Add import for getImageUrl if we use it but it's not imported
  if (content.includes('getImageUrl(') && !content.includes('getImageUrl')) {
     // Wait, if content.includes('getImageUrl(') we definitely need the import.
  }
  
  if (changed || content.includes('getImageUrl(')) {
    // Make sure we have the import
    if (!content.includes("import { getImageUrl }")) {
      // Find relative path to utils/image
      const fileDepth = file.split(path.sep).length - path.resolve('frontend/src').split(path.sep).length;
      const prefix = fileDepth === 1 ? './' : '../'.repeat(fileDepth - 1);
      
      const importStatement = `import { getImageUrl } from '${prefix}utils/image';\n`;
      
      // Insert after the last import
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const endOfLastImport = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfLastImport + 1) + importStatement + content.slice(endOfLastImport + 1);
      } else {
        content = importStatement + content;
      }
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Refactored image paths in ${file}`);
  }
}
