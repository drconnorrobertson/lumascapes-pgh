import fs from 'node:fs';
import path from 'node:path';
const output = 'public';
fs.mkdirSync(output, { recursive: true });
for (const name of fs.readdirSync('.')) {
  if ((/\.(html|xml)$/.test(name) || name === 'robots.txt') && fs.statSync(name).isFile()) {
    fs.copyFileSync(name, path.join(output, name));
  }
}
fs.cpSync('assets', path.join(output, 'assets'), { recursive: true });
