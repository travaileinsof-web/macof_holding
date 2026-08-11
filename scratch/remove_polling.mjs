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
  if (content.includes('refetchInterval')) {
    // Remove refetchInterval: 30000,
    const newContent = content.replace(/\brefetchInterval:\s*\d+,?/g, '');
    if (newContent !== content) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log(`Removed refetchInterval from ${file}`);
    }
  }
}
