import { app, BrowserWindow, ipcMain } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import { initialize, enable } from '@electron/remote/main';
import { setupDownloadHandler } from './download-handler';

let mainWindow: BrowserWindow | null = null;

function log(...args: any[]) {
  const timestamp = new Date().toISOString();
  console.log(`[Electron]`, ...args);
}

async function createWindow() {
  log('Creating main window');
  log('App paths:', {
    exe: app.getPath('exe'),
    userData: app.getPath('userData'),
    appData: app.getPath('appData'),
    desktop: app.getPath('desktop'),
    temp: app.getPath('temp')
  });

  // Initialize remote module
  initialize();

  const preloadPath = path.join(__dirname, './assets/js/preload.js');
  log('Preload path:', preloadPath);

  // Install DevTools for main process
  if (isDev) {
    try {
      require('electron-devtools-installer').default(
        require('electron-devtools-installer').CHROME_DEVTOOLS
      ).then((name: string) => {
        log(`Added DevTools extension: ${name}`);
      }).catch((err: Error) => {
        log('Failed to install DevTools:', err);
      });
    } catch (e) {
      log('Error installing DevTools:', e);
    }
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    frame: false,
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: -100, y: -100 }, // Move traffic lights off-screen
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false, // Only for development
      devTools: true,
      allowRunningInsecureContent: true,
      webviewTag: true,
      javascript: true,
      backgroundThrottling: false,
      sandbox: false,
      nodeIntegrationInSubFrames: true,
      enableBlinkFeatures: 'Geolocation', // Kích hoạt geolocation
      preload: preloadPath
    },
    show: false,
    backgroundColor: '#fff'
  });

  // Add keyboard shortcut to open main process DevTools
  const { globalShortcut } = require('electron');
  globalShortcut.register('CommandOrControl+Shift+I', () => {
    if (mainWindow) {
      mainWindow.webContents.openDevTools({ mode: 'detach' });
      log('Main DevTools opened via shortcut');
    }
  });

  // Add menu item to open main process DevTools
  const { Menu } = require('electron');
  const template = [
    {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Main Process DevTools',
          accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Alt+Shift+I',
          click: () => {
            if (mainWindow) {
              mainWindow.webContents.openDevTools({ mode: 'detach' });
              log('Main DevTools opened via menu');
            }
          }
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    log('Window ready to show');
    mainWindow?.show();
  });

  // Enable remote module for this window
  enable(mainWindow.webContents);

  // Set session permissions
  mainWindow.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
    const url = webContents.getURL();
    log('Permission request:', { permission, url });
    callback(true); // Allow all permissions
  });

  // Set web preferences for all webviews
  mainWindow.webContents.on('did-attach-webview', (event, webContents) => {
    log('Webview attached:', webContents.id);
    
    // Set webview specific preferences
    webContents.setWindowOpenHandler((details) => {
      log('Window open request:', details);
      return { action: 'allow' };
    });

    // Enable remote module for webviews
    enable(webContents);
  });

  log('Main window created with ID:', mainWindow.id);

  // Enable remote debugging if in dev mode
  if (isDev) {
    try {
      log('Development mode detected');
      log('Node version:', process.versions.node);
      log('Chrome version:', process.versions.chrome);
      log('Electron version:', process.versions.electron);
      
      // Open main process DevTools
      require('electron').app.on('browser-window-created', (_: Event, window: BrowserWindow) => {
        require('@electron/remote/main').require('@electron/remote/main').openDevTools({
          mode: 'detach'
        });
      });
      
      mainWindow.webContents.openDevTools();
      
      const devServerUrl = 'http://localhost:4200';
      log('Attempting to load dev server at:', devServerUrl);
      
      // Log all window events
      mainWindow.webContents.on('did-start-loading', () => {
        log('Page started loading');
        log('Current URL:', mainWindow?.webContents.getURL());
      });

      mainWindow.webContents.on('did-stop-loading', () => {
        log('Page stopped loading');
        log('Final URL:', mainWindow?.webContents.getURL());
      });

      mainWindow.webContents.on('did-finish-load', () => {
        log('Page finished loading');
        log('Document title:', mainWindow?.webContents.getTitle());
      });

      mainWindow.webContents.on('did-fail-load', (event, code, desc, validatedURL) => {
        log('Failed to load:', {
          errorCode: code,
          errorDescription: desc,
          url: validatedURL
        });
      });

      mainWindow.webContents.on('dom-ready', () => {
        log('DOM is ready');
        mainWindow?.webContents.executeJavaScript(`
          console.log('[Electron Injected] Window location:', window.location.href);
          console.log('[Electron Injected] Document readyState:', document.readyState);
        `);
      });

      mainWindow.webContents.on('console-message', (event, level, message, line, sourceId) => {
        log('Renderer Console:', {
          level,
          message,
          line,
          sourceId
        });
      });

      // Add error handling
      mainWindow.webContents.on('crashed', (event, killed) => {
        log('Renderer process crashed:', { killed });
      });

      mainWindow.on('unresponsive', () => {
        log('Window became unresponsive');
      });

      mainWindow.on('responsive', () => {
        log('Window became responsive');
      });

      await mainWindow.loadURL(devServerUrl);
      log('Dev server loaded successfully');
    } catch (error) {
      log('Failed to load dev server:', error);
      // Fallback to local file
      const fallbackPath = path.join(__dirname, '../index.html');
      log('Attempting to load fallback file:', fallbackPath);
      await mainWindow.loadFile(fallbackPath);
    }
  } else {
    const prodPath = path.join(__dirname, '../browser-os/index.html');
    log('Production mode, loading:', prodPath);
    await mainWindow.loadFile(prodPath);
  }

  // Handle window closing
  mainWindow.on('closed', () => {
    log('Window closed');
    mainWindow = null;
  });
}

// App lifecycle events
app.on('ready', () => {
  log('App is ready');
  log('Command line args:', process.argv);
  createWindow().then(() => {
    setupDownloadHandler();
  });
});

app.on('window-all-closed', () => {
  log('All windows closed');
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', () => log('App is preparing to quit'));
app.on('will-quit', () => log('App is about to quit'));
app.on('quit', (event, exitCode) => log('App has quit with code:', exitCode));

// Error handling
process.on('uncaughtException', (error) => {
  log('Uncaught exception:', error);
  log('Stack trace:', error.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  log('Unhandled rejection at:', promise);
  log('Reason:', reason);
});

// Initialize app
app.whenReady().then(() => {
  log('App initialization starting');
  return createWindow();
}).catch(error => {
  log('Failed to create window:', error);
  log('Stack trace:', error.stack);
});

app.on('activate', () => {
  log('App activated');
  if (mainWindow === null) {
    createWindow().catch(error => {
      log('Failed to create window on activate:', error);
      log('Stack trace:', error.stack);
    });
  }
}); 