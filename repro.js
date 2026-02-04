import { build } from 'vite';
import fs from 'fs';

console.log("Starting build...");
try {
    await build();
    console.log("Build success!");
} catch (e) {
    console.error("Build failed!");
    const errorLog = (e.message || e) + '\n' + (e.stack || '');
    fs.writeFileSync('error.txt', errorLog);
}
