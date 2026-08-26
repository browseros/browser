import { app, BrowserWindow, ipcMain, Rectangle } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as isDev from 'electron-is-dev';
import { initialize, enable } from '@electron/remote/main';
import { setupDownloadHandler } from './download-handler';

interface PersistedWindow {
  id: string;
  bounds: Rectangle;
  isMaximized: boolean;
}

interface WindowSessionFile {
  continueWhereYouLeftOff: boolean;
  windows: PersistedWindow[];
}

const windowsById = new Map<string, BrowserWindow>();
const idByWindow = new Map<BrowserWindow, string>();
let recentlyClosed: PersistedWindow[] = [];
let continueWhereYouLeftOff = true;
let remoteInitialized = false;
let downloadHandlerSetup = false;
let shortcutsRegistered = false;
let isRestoring = false;
let isQuitting = false;

function log(...args: any[]) {
  console.log(`[Electron]`, ...args);
}

function sessionFilePath(): string {
  return path.join(app.getPath('userData'), 'window-session.json');
}

function loadWindowSession(): WindowSessionFile {
  try {
    const raw = fs.readFileSync(sessionFilePath(), 'utf8');
    const parsed = JSON.parse(raw);
    return {
      continueWhereYouLeftOff: parsed.continueWhereYouLeftOff !== false,
      windows: Array.isArray(parsed.windows) ? parsed.windows : []
    };
  } catch {
    return { continueWhereYouLeftOff: true, windows: [] };
  }
}

function saveWindowSession(windows: PersistedWindow[]): void {
  const payload: WindowSessionFile = {
    continueWhereYouLeftOff,
    windows
  };
  try {
    fs.writeFileSync(sessionFilePath(), JSON.stringify(payload, null, 2), 'utf8');
  } catch (error) {
    log('Failed to save window session:', error);
  }
}

function snapshotWindow(win: BrowserWindow, windowId: string): PersistedWindow {
  return {
    id: windowId,
    bounds: win.getBounds(),
    isMaximized: win.isMaximized()
  };
}

function persistLiveWindows(): void {
  if (isRestoring) {
    return;
  }
  const live: PersistedWindow[] = [];
  windowsById.forEach((win, id) => {
    if (!win.isDestroyed()) {
      live.push(snapshotWindow(win, id));
    }
  });
  saveWindowSession(live);
}

function createWindowId(): string {
  return `win-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function registerIpc(): void {
  ipcMain.handle('session:get-window-id', (event: any) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    return win ? idByWindow.get(win) || null : null;
  });

  ipcMain.handle('session:create-window', () => {
    recentlyClosed = [];
    return createWindow();
  });

  ipcMain.on('session:set-continue', (_event: any, enabled: boolean) => {
    continueWhereYouLeftOff = !!enabled;
    persistLiveWindows();
  });
}

function registerShortcuts(): void {
  if (shortcutsRegistered) {
    return;
  }
  shortcutsRegistered = true;
  const { globalShortcut, Menu } = require('electron');
  globalShortcut.register('CommandOrControl+Shift+I', () => {
    const focused = BrowserWindow.getFocusedWindow();
    if (focused) {
      focused.webContents.openDevTools({ mode: 'detach' });
      log('Main DevTools opened via shortcut');
    }
  });
  globalShortcut.register('CommandOrControl+N', () => {
    recentlyClosed = [];
    createWindow();
  });

  const template = [
    {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Main Process DevTools',
          accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Alt+Shift+I',
          click: () => {
            const focused = BrowserWindow.getFocusedWindow();
            if (focused) {
              focused.webContents.openDevTools({ mode: 'detach' });
              log('Main DevTools opened via menu');
            }
          }
        }
      ]
    }
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

async function createWindow(options?: { id?: string; bounds?: Rectangle; isMaximized?: boolean }): Promise<BrowserWindow> {
  log('Creating window', options?.id || '(new)');

  if (!remoteInitialized) {
    initialize();
    remoteInitialized = true;
  }

  const preloadPath = path.join(__dirname, './assets/js/preload.js');
  const windowId = options?.id || createWindowId();
  const bounds = options?.bounds;

  const win = new BrowserWindow({
    width: bounds?.width || 1200,
    height: bounds?.height || 800,
    x: bounds?.x,
    y: bounds?.y,
    frame: false,
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: -100, y: -100 },
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false,
      devTools: true,
      allowRunningInsecureContent: true,
      webviewTag: true,
      javascript: true,
      backgroundThrottling: false,
      sandbox: false,
      nodeIntegrationInSubFrames: true,
      enableBlinkFeatures: 'Geolocation',
      preload: preloadPath
    },
    show: false,
    backgroundColor: '#fff'
  });

  windowsById.set(windowId, win);
  idByWindow.set(win, windowId);

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

  registerShortcuts();

  win.once('ready-to-show', () => {
    log('Window ready to show', windowId);
    if (options?.isMaximized) {
      win.maximize();
    }
    win.show();
  });

  enable(win.webContents);

  win.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
    const url = webContents.getURL();
    log('Permission request:', { permission, url });
    callback(true);
  });

  win.webContents.on('did-attach-webview', (_event, webContents) => {
    log('Webview attached:', webContents.id);
    webContents.setWindowOpenHandler((details) => {
      log('Window open request:', details);
      return { action: 'allow' };
    });
    enable(webContents);
  });

  log('Window created with ID:', win.id, 'session id:', windowId);

  if (isDev) {
    try {
      log('Development mode detected');
      win.webContents.openDevTools();
      const devServerUrl = 'http://localhost:4200';
      log('Attempting to load dev server at:', devServerUrl);
      await win.loadURL(devServerUrl);
      log('Dev server loaded successfully');
    } catch (error) {
      log('Failed to load dev server:', error);
      const fallbackPath = path.join(__dirname, '../index.html');
      await win.loadFile(fallbackPath);
    }
  } else {
    const prodPath = path.join(__dirname, '../browser-os/index.html');
    log('Production mode, loading:', prodPath);
    await win.loadFile(prodPath);
  }

  const onBoundsChanged = () => {
    if (!isQuitting) {
      persistLiveWindows();
    }
  };
  win.on('resize', onBoundsChanged);
  win.on('move', onBoundsChanged);

  win.on('close', () => {
    try {
      win.webContents.send('session:window-closing');
    } catch {
      // Window may already be tearing down
    }

    if (!win.isDestroyed()) {
      recentlyClosed.push(snapshotWindow(win, windowId));
    }
    windowsById.delete(windowId);
    idByWindow.delete(win);

    if (windowsById.size === 0) {
      saveWindowSession(recentlyClosed);
    } else {
      persistLiveWindows();
    }
  });

  win.on('closed', () => {
    log('Window closed', windowId);
    windowsById.delete(windowId);
    idByWindow.delete(win);
  });

  return win;
}

async function restoreOrCreateWindows(): Promise<void> {
  const saved = loadWindowSession();
  continueWhereYouLeftOff = saved.continueWhereYouLeftOff !== false;

  if (continueWhereYouLeftOff && saved.windows.length > 0) {
    isRestoring = true;
    recentlyClosed = [];
    for (const entry of saved.windows) {
      await createWindow(entry);
    }
    isRestoring = false;
    return;
  }

  recentlyClosed = [];
  await createWindow();
}

app.on('before-quit', () => {
  isQuitting = true;
  log('App is preparing to quit');
  if (windowsById.size > 0) {
    persistLiveWindows();
  }
});

app.on('window-all-closed', () => {
  log('All windows closed');
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('will-quit', () => log('App is about to quit'));
app.on('quit', (_event, exitCode) => log('App has quit with code:', exitCode));

process.on('uncaughtException', (error) => {
  log('Uncaught exception:', error);
  log('Stack trace:', error.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  log('Unhandled rejection at:', promise);
  log('Reason:', reason);
});

app.whenReady().then(async () => {
  log('App initialization starting');
  log('Command line args:', process.argv);
  registerIpc();
  if (!downloadHandlerSetup) {
    setupDownloadHandler();
    downloadHandlerSetup = true;
  }
  await restoreOrCreateWindows();
}).catch(error => {
  log('Failed to create window:', error);
  log('Stack trace:', error.stack);
});

app.on('activate', () => {
  log('App activated');
  if (windowsById.size === 0) {
    restoreOrCreateWindows().catch(error => {
      log('Failed to create window on activate:', error);
      log('Stack trace:', error.stack);
    });
  }
});
