const { spawn } = require('child_process');
const { join } = require('path');

// Start Angular dev server
const ngServe = spawn('ng', ['serve'], {
    stdio: 'inherit',
    shell: true
});

// Wait for Angular to start
setTimeout(() => {
    // Start Electron
    const electron = spawn('electron', ['.'], {
        stdio: 'inherit',
        shell: true
    });

    electron.on('close', (code) => {
        ngServe.kill();
        process.exit(code);
    });
}, 5000); // Wait 5 seconds for Angular to start

process.on('SIGINT', () => {
    ngServe.kill();
    process.exit(0);
}); 