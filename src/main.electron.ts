/*
 * Electron bootstraping
 */
import { app, BrowserWindow, clipboard, nativeImage, ipcMain } from 'electron';
import * as path from 'path';
import { initialize, enable } from '@electron/remote/main';
import * as https from 'https';
import * as http from 'http';

// Initialize remote module
initialize();

// Handle IPC for webview script execution
ipcMain.handle('execute-in-webview', async (event, script) => {
  try {
    const webContents = event.sender;
    const result = await webContents.executeJavaScript(script);
    return { success: true, result };
  } catch (error: any) {
    return { success: false, error: error.message || 'Unknown error' };
  }
});

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: true,
      webviewTag: true,
      nodeIntegrationInSubFrames: true, // Enable for webviews
      allowRunningInsecureContent: true // Allow running scripts in webview
    }
  });

  // Enable webview permissions
  mainWindow.webContents.session.setPermissionRequestHandler((webContents, permission, callback) => {
    callback(true); // Allow all permissions for now
  });

  // Enable remote module for this window
  enable(mainWindow.webContents);

  // Load the index.html of the app
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools in development
  if (process.env['NODE_ENV'] === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

// Handle image download and clipboard write
ipcMain.handle('copy-image', async (_event, imageUrl: string) => {
  console.log('[Main] Attempting to copy image:', imageUrl);
  
  try {
    const buffer = await new Promise<Buffer>((resolve, reject) => {
      const protocol = imageUrl.startsWith('https') ? https : http;
      
      const request = protocol.get(imageUrl, (response) => {
        if (response.statusCode !== 200) {
          reject(new Error(`Failed to download image: ${response.statusCode}`));
          return;
        }

        const chunks: Buffer[] = [];
        response.on('data', (chunk: Buffer) => chunks.push(chunk));
        response.on('end', () => resolve(Buffer.concat(chunks)));
      });

      request.on('error', (err) => {
        console.error('[Main] Error downloading image:', err);
        reject(err);
      });

      // Set a timeout of 10 seconds
      request.setTimeout(10000, () => {
        request.destroy();
        reject(new Error('Request timed out'));
      });
    });

    console.log('[Main] Image downloaded, creating native image');
    const image = nativeImage.createFromBuffer(buffer);
    
    if (image.isEmpty()) {
      throw new Error('Created image is empty');
    }

    console.log('[Main] Writing image to clipboard');
    clipboard.writeImage(image);
    
    return true;
  } catch (error) {
    console.error('[Main] Failed to copy image:', error);
    return false;
  }
});

// This method will be called when Electron has finished initialization
app.whenReady().then(createWindow);

// Quit when all windows are closed
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
