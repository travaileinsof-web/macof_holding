const fs = require('fs');
const path = require('path');

const REPLACEMENTS = [
  { from: /1560250097-0b93528c311a/g, to: "1519085360753-af0119f7cbe7" },
  { from: /1573496359142-b8d87734a5a2/g, to: "1531123897727-8f129e1bf98c" },
  { from: /1544025162-d76694265947/g, to: "1583394838336-acd977736f90" },
  { from: /1497366216548-37526070297c/g, to: "1522071820081-009f0129c71c" },
  { from: /MACOF\s+Restauration/g, to: "SEBA International" },
  { from: /Macof\s+restaurant/g, to: "SEBA International" },
  { from: /Restaurant\s+MACOF/g, to: "SEBA International" },
];

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.cjs')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const { from, to } of REPLACEMENTS) {
        if (content.match(from)) {
          content = content.replace(from, to);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, '../frontend/src'));
processDir(path.join(__dirname, '../api/src'));
