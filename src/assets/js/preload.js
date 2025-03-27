console.log('[Preload] Script starting...');

const { ipcRenderer } = require('electron');
console.log('[Preload] Electron ipcRenderer loaded');

// Log when the script is fully loaded
window.addEventListener('load', () => {
	console.log('[Preload] Window loaded');
});

// Log when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
	console.log('[Preload] DOM Content Loaded');
});

document.addEventListener("click", function () {
	console.log('[Preload] Click event detected');
	ipcRenderer.sendToHost("clicked");
});

// Log that preload script has finished executing
console.log('[Preload] Script setup complete');