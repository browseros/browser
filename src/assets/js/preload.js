// Basic console log to test if preload is working
console.log('[Preload] Basic test log');

// Test if we have node integration
if (typeof process === 'undefined') {
	console.log('[Preload] No Node.js integration available');
} else {
	console.log('[Preload] Node.js integration is available');
	console.log('[Preload] Process versions:', process.versions);
}

// Test if we have require
if (typeof require === 'undefined') {
	console.log('[Preload] No require available');
} else {
	console.log('[Preload] Require is available');
	try {
		const electron = require('electron');
		console.log('[Preload] Electron is available');
	} catch (e) {
		console.log('[Preload] Error requiring electron:', e);
	}
}

// Add a basic API to window
window.testApi = {
	ping: () => console.log('[Preload] Ping called')
};

console.log('[Preload] Script complete');