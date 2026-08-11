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
  const lines = content.split('\n');
  const filteredLines = lines.filter(line => !line.includes("from '../../utils/image'") && !line.includes("from '../utils/image'"));
  if (filteredLines.length !== lines.length) {
    fs.writeFileSync(file, filteredLines.join('\n'), 'utf8');
    console.log(`Cleaned imports in ${file}`);
  }
}
