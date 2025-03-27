const { ipcRenderer } = require('electron');

console.log('[Preload] Script starting...');

// Set up click event listener
document.addEventListener('click', () => {
	console.log('[Preload] Click event detected');
	ipcRenderer.sendToHost('clicked');
});

// Log when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
	console.log('[Preload] DOM Content Loaded');
	console.log('[Preload] Window location:', window.location.href);
	console.log('[Preload] Document readyState:', document.readyState);
});

// Log when the script is fully loaded
window.addEventListener('load', () => {
	console.log('[Preload] Window loaded');
	console.log('[Preload] Window location:', window.location.href);
	console.log('[Preload] Document readyState:', document.readyState);
});

// Since contextIsolation is false, we can attach directly to window
window.electron = {
	send: (channel, data) => {
		console.log('[Preload] Sending message:', channel, data);
		ipcRenderer.send(channel, data);
	},
	receive: (channel, func) => {
		console.log('[Preload] Setting up receiver for:', channel);
		ipcRenderer.on(channel, (event, ...args) => func(...args));
	}
};

// Log that preload script has finished executing
console.log('[Preload] Script setup complete');