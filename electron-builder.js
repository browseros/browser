const { build } = require('electron-builder');
const { exec } = require('child_process');

// Compile TypeScript
exec('tsc src/electron/main.ts --outDir dist/electron', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error compiling TypeScript: ${error}`);
        return;
    }
    console.log('TypeScript compilation successful');
}); 