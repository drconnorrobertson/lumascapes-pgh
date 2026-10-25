import fs from 'node:fs';
import path from 'node:path';
const output = 'public';
fs.mkdirSync(output, { recursive: true });
const ownership = JSON.parse(fs.readFileSync('scripts/indexnow-ownership.json','utf8')).file;
if(!/^[a-f0-9]{32}\.txt$/.test(ownership) || fs.readFileSync(ownership,'utf8').trim()!==ownership.slice(0,-4)) throw new Error('Invalid IndexNow ownership file');
for (const name of fs.readdirSync('.')) {
  if ((/\.(html|xml)$/.test(name) || name === 'robots.txt' || name === ownership) && fs.statSync(name).isFile()) {
    fs.copyFileSync(name, path.join(output, name));
  }
}
fs.cpSync('assets', path.join(output, 'assets'), { recursive: true });
