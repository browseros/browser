// Immediate logging at script start
console.log('[Preload] Immediate log at script start');
console.warn('[Preload] Warning log for visibility');

// Function to log in multiple ways
function multiLog(message) {
	console.log(message);
	console.warn(message);
	if (process && process.stdout) {
		process.stdout.write(message + '\n');
	}
}

try {
	multiLog('[Preload] Script starting...');
	
	// Test if we have access to require
	if (typeof require !== 'undefined') {
		multiLog('[Preload] Require is available');
		const { ipcRenderer } = require('electron');
		multiLog('[Preload] Electron modules loaded');
	} else {
		multiLog('[Preload] ERROR: Require is not available');
	}

	// Test if we have access to process
	if (typeof process !== 'undefined') {
		multiLog('[Preload] Process is available');
		process.on('uncaughtException', (error) => {
			multiLog('[Preload] Uncaught exception: ' + error.toString());
		});

		process.on('unhandledRejection', (error) => {
			multiLog('[Preload] Unhandled rejection: ' + error.toString());
		});
	} else {
		multiLog('[Preload] ERROR: Process is not available');
	}

	// Set up click event listener
	if (typeof document !== 'undefined') {
		multiLog('[Preload] Document is available');
		document.addEventListener('click', () => {
			multiLog('[Preload] Click event detected');
			try {
				ipcRenderer.sendToHost('clicked');
			} catch (e) {
				multiLog('[Preload] Error sending click event: ' + e.toString());
			}
		});

		// Log when the DOM is ready
		document.addEventListener('DOMContentLoaded', () => {
			multiLog('[Preload] DOM Content Loaded');
			multiLog('[Preload] Window location: ' + window.location.href);
			multiLog('[Preload] Document readyState: ' + document.readyState);
		});
	} else {
		multiLog('[Preload] ERROR: Document is not available');
	}

	// Log when the script is fully loaded
	if (typeof window !== 'undefined') {
		multiLog('[Preload] Window is available');
		window.addEventListener('load', () => {
			multiLog('[Preload] Window loaded');
			multiLog('[Preload] Window location: ' + window.location.href);
			multiLog('[Preload] Document readyState: ' + document.readyState);
		});

		// Since contextIsolation is false, we can attach directly to window
		window.electron = {
			send: (channel, data) => {
				multiLog('[Preload] Sending message: ' + channel);
				ipcRenderer.send(channel, data);
			},
			receive: (channel, func) => {
				multiLog('[Preload] Setting up receiver for: ' + channel);
				ipcRenderer.on(channel, (event, ...args) => func(...args));
			}
		};

		multiLog('[Preload] Window electron API available: ' + !!window.electron);
	} else {
		multiLog('[Preload] ERROR: Window is not available');
	}

	// Log that preload script has finished executing
	multiLog('[Preload] Script setup complete');
} catch (e) {
	multiLog('[Preload] Error in preload script: ' + e.toString());
	if (e.stack) {
		multiLog('[Preload] Stack trace: ' + e.stack);
	}
}