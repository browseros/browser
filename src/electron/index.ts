import { app, BrowserWindow, ipcMain, dialog } from 'electron';
import * as path from 'path';
import * as isDev from 'electron-is-dev';
import { installDevExtensions } from './dev-extensions';

declare const DEV_SERVER: boolean;

const indexUrl = path.join(__dirname, 'index.html');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win: BrowserWindow | null = null;

async function createWindow(): Promise<void> {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // Install dev tools in development
  if (isDev) {
    await installDevExtensions();
  }

  // Load the app
  if (isDev) {
    // Wait for dev server to be ready
    await new Promise(resolve => setTimeout(resolve, 3000));
    await win.loadURL('http://localhost:4200');
    // Open the DevTools.
    win.webContents.openDevTools();
  } else {
    await win.loadFile(path.join(__dirname, '../dist/browser-os/index.html'));
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow).catch(console.error);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow().catch(console.error);
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('show-dialog', (event, arg) => {
  if (win !== null) {
    dialog.showMessageBox(win, {
      type: 'info',
      buttons: ['OK'],
      title: 'Native Dialog',
      message: 'I\'m a native dialog!',
      detail: 'It\'s my pleasure to make your life better.'
    });
  }
});

// Error handling
process.on('uncaughtException', (error) => {
  const browserWindow = win;
  if (browserWindow !== null) {
    dialog.showMessageBox(browserWindow, {
      type: 'error',
      title: 'Error',
      message: 'An error occurred:',
      detail: error.toString()
    });
  }
});
