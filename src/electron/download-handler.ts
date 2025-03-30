import { ipcMain, IpcMainEvent } from 'electron';
import * as fs from 'fs';
import * as path from 'path';
import * as https from 'https';
import * as http from 'http';

interface DownloadRequest {
    url: string;
    targetPath: string;
}

export function setupDownloadHandler() {
    ipcMain.on('download-file', (event: IpcMainEvent, request: DownloadRequest) => {
        const { url, targetPath } = request;
        
        // Create a temporary file path
        const tempPath = path.join(
            path.dirname(targetPath),
            `temp-${path.basename(targetPath)}`
        );

        // Create write stream
        const fileStream = fs.createWriteStream(tempPath);

        // Choose protocol based on URL
        const protocol = url.startsWith('https:') ? https : http;

        // Start download
        const req = protocol.get(url, (response) => {
            // Handle redirects
            if (response.statusCode === 301 || response.statusCode === 302) {
                const redirectUrl = response.headers.location;
                if (redirectUrl) {
                    // Clean up and retry with new URL
                    fileStream.end();
                    if (fs.existsSync(tempPath)) {
                        fs.unlinkSync(tempPath);
                    }
                    
                    // Retry with new URL
                    const newRequest = { ...request, url: redirectUrl };
                    ipcMain.emit('download-file', event, newRequest);
                    return;
                }
            }

            // Check if request was successful
            if (response.statusCode !== 200) {
                fileStream.end();
                if (fs.existsSync(tempPath)) {
                    fs.unlinkSync(tempPath);
                }
                
                event.reply('download-complete', {
                    success: false,
                    error: `HTTP Error: ${response.statusCode}`
                });
                return;
            }

            // Write response data to file
            response.pipe(fileStream);

            // Handle completion
            fileStream.on('finish', () => {
                fileStream.close();
                
                try {
                    // Move temp file to target path
                    if (fs.existsSync(targetPath)) {
                        fs.unlinkSync(targetPath); // Delete existing file if any
                    }
                    fs.renameSync(tempPath, targetPath);
                    
                    event.reply('download-complete', {
                        success: true,
                        path: targetPath
                    });
                } catch (error: any) {
                    event.reply('download-complete', {
                        success: false,
                        error: error.message || 'Failed to save file'
                    });
                }
            });
        });

        // Handle request errors
        req.on('error', (error) => {
            fileStream.end();
            
            // Clean up temp file
            if (fs.existsSync(tempPath)) {
                fs.unlinkSync(tempPath);
            }
            
            event.reply('download-complete', {
                success: false,
                error: error.message || 'Network error occurred'
            });
        });

        // End request
        req.end();
    });
} 