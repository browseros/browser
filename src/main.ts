import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

let mainWindow: BrowserWindow | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false
    }
  });

  // Load the index.html of the app
  if (isDev) {
    mainWindow.loadURL('http://localhost:4200');
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/browser-os/index.html'));
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

console.log('[Angular Bootstrap] Starting application bootstrap at:', new Date().toISOString());

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    console.log('[Angular Bootstrap] Application bootstrapped successfully at:', new Date().toISOString());
  })
  .catch(err => {
    console.error('[Angular Bootstrap] Failed to bootstrap application:', err);
    console.error('[Angular Bootstrap] Stack trace:', err.stack);
  }); 