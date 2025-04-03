import { Injectable } from '@angular/core';
import { webContents } from '@electron/remote';
import html2canvas from 'html2canvas';

export interface PageInfo {
  width: number;
  height: number;
  originalScroll: {
    x: number;
    y: number;
  };
  devicePixelRatio: number;
  originalStyles: {
    html: {
      overflow: string;
      height: string;
      width: string;
    };
    body: {
      overflow: string;
      height: string;
      width: string;
    };
  };
}

interface CaptureSection {
  x: number;
  y: number;
  width: number;
  height: number;
  scrollPosition: number; // Position to scroll to
  captureY: number; // Y position to start capture from
  captureHeight: number; // Height to capture
}

@Injectable({
  providedIn: 'root'
})
export class ScreenshotService {
  async captureFullPage(webview: Electron.WebviewTag): Promise<string> {
    try {
      const webContentsId = webview.getWebContentsId();
      const wc = webContents.fromId(webContentsId);
      if (!wc) {
        throw new Error('Cannot get webContents');
      }

      // Get page dimensions and original scroll position
      const pageInfo = await this.getPageInfo(wc);
      console.log('[ScreenshotService] Page info:', pageInfo);
      
      // Store original zoom and scroll position
      const originalZoom = await wc.getZoomFactor();
      const originalScroll = await wc.executeJavaScript('({ x: window.scrollX, y: window.scrollY })');
      await wc.setZoomFactor(1.0);

      // Set viewport to match full page width
      await wc.executeJavaScript(`
        document.documentElement.style.width = '${pageInfo.width}px';
        document.body.style.width = '${pageInfo.width}px';
        document.documentElement.style.overflowX = 'hidden';
        document.body.style.overflowX = 'hidden';
      `);

      // Wait for zoom change to take effect
      await new Promise(resolve => setTimeout(resolve, 500));

      // Get viewport dimensions
      const viewportInfo = await wc.executeJavaScript(`
        ({
          width: Math.max(
            document.documentElement.scrollWidth,
            document.body.scrollWidth,
            document.documentElement.offsetWidth,
            document.body.offsetWidth,
            window.innerWidth
          ),
          height: window.innerHeight
        })
      `);

      // Calculate sections to capture
      const sections = this.calculateCaptureSections(viewportInfo, pageInfo);
      console.log('[ScreenshotService] Sections to capture:', sections);
      
      // Capture each section
      const sectionImages = await this.captureSections(webview, wc, sections);
      console.log('[ScreenshotService] Captured sections:', sectionImages.length);
      
      // Merge sections into final image
      const finalImage = await this.mergeSections(sectionImages, pageInfo);

      // Restore original state
      await wc.executeJavaScript(`
        document.documentElement.style.width = '${pageInfo.originalStyles.html.width}';
        document.body.style.width = '${pageInfo.originalStyles.body.width}';
        document.documentElement.style.overflowX = '${pageInfo.originalStyles.html.overflow}';
        document.body.style.overflowX = '${pageInfo.originalStyles.body.overflow}';
        window.scrollTo(${originalScroll.x}, ${originalScroll.y});
      `);
      await wc.setZoomFactor(originalZoom);

      return finalImage;
    } catch (error) {
      console.error('[ScreenshotService] Error capturing full page:', error);
      throw error;
    }
  }

  private calculateCaptureSections(viewportInfo: { width: number, height: number }, pageInfo: PageInfo): CaptureSection[] {
    const sections: CaptureSection[] = [];
    const halfViewport = Math.floor(viewportInfo.height / 2);

    // First section: capture full viewport
    sections.push({
      x: 0,
      y: 0,
      width: pageInfo.width,
      height: viewportInfo.height,
      scrollPosition: 0,
      captureY: 0,
      captureHeight: viewportInfo.height
    });

    // Calculate remaining sections
    let currentY = halfViewport;
    while (currentY < pageInfo.height) {
      sections.push({
        x: 0,
        y: currentY,
        width: pageInfo.width,
        height: halfViewport,
        scrollPosition: currentY,
        captureY: halfViewport,
        captureHeight: halfViewport
      });
      currentY += halfViewport;
    }

    return sections;
  }

  private async captureSections(webview: Electron.WebviewTag, wc: Electron.WebContents, sections: CaptureSection[]): Promise<string[]> {
    const images: string[] = [];
    
    for (const section of sections) {
      // Scroll to section position
      await wc.executeJavaScript(`
        window.scrollTo({
          top: ${section.scrollPosition},
          left: 0,
          behavior: 'instant'
        });
      `);
      
      // Wait for scroll and repaint
      await new Promise(resolve => setTimeout(resolve, 500));

      try {
        // Capture the section
        const image = await webview.capturePage({
          x: 0,
          y: section.captureY,
          width: Math.round(section.width),
          height: Math.round(section.captureHeight)
        });

        if (image.isEmpty()) {
          console.error('[ScreenshotService] Empty capture for section:', section);
          throw new Error('Captured image is empty');
        }

        images.push(image.toDataURL());
        console.log('[ScreenshotService] Successfully captured section:', section);
      } catch (error) {
        console.error('[ScreenshotService] Error capturing section:', section, error);
        throw error;
      }
    }

    return images;
  }

  private async mergeSections(sectionImages: string[], pageInfo: PageInfo): Promise<string> {
    return await new Promise((resolve, reject) => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          throw new Error('Failed to get canvas context');
        }

        canvas.width = pageInfo.width;
        canvas.height = pageInfo.height;

        let loadedImages = 0;
        const images: HTMLImageElement[] = [];

        sectionImages.forEach((dataUrl, index) => {
          const img = new Image();
          img.onload = () => {
            images[index] = img;
            loadedImages++;

            if (loadedImages === sectionImages.length) {
              // Draw first section (full viewport)
              ctx.drawImage(images[0], 0, 0);
              
              // Draw remaining sections
              let currentY = images[0].height - 1;
              for (let i = 1; i < images.length; i++) {
                const img = images[i];
                ctx.drawImage(img, 0, currentY);
                currentY += Math.floor(images[0].height / 2) - 1;
              }
              
              resolve(canvas.toDataURL('image/png'));
            }
          };
          img.onerror = (error) => {
            console.error('[ScreenshotService] Error loading section image:', error);
            reject(error);
          };
          img.src = dataUrl;
        });
      } catch (error) {
        console.error('[ScreenshotService] Error merging sections:', error);
        reject(error);
      }
    });
  }

  private async getPageInfo(wc: Electron.WebContents): Promise<PageInfo> {
    return await wc.executeJavaScript(`
      new Promise((resolve) => {
        const width = Math.max(
          document.documentElement.scrollWidth,
          document.documentElement.clientWidth,
          document.documentElement.offsetWidth,
          document.body.scrollWidth,
          document.body.offsetWidth
        );
        const height = Math.max(
          document.documentElement.scrollHeight,
          document.documentElement.clientHeight,
          document.documentElement.offsetHeight,
          document.body.scrollHeight,
          document.body.offsetHeight
        );
        const devicePixelRatio = window.devicePixelRatio || 1;
        const originalScroll = {
          x: window.pageXOffset,
          y: window.pageYOffset
        };
        const originalStyles = {
          html: {
            overflow: document.documentElement.style.overflow,
            height: document.documentElement.style.height,
            width: document.documentElement.style.width
          },
          body: {
            overflow: document.body.style.overflow,
            height: document.body.style.height,
            width: document.body.style.width
          }
        };
        resolve({ width, height, originalScroll, devicePixelRatio, originalStyles });
      });
    `);
  }

  private async getViewportInfo(wc: Electron.WebContents): Promise<{
    viewportWidth: number;
    viewportHeight: number;
    scrollX: number;
    scrollY: number;
    devicePixelRatio: number;
  }> {
    return await wc.executeJavaScript(`
      new Promise((resolve) => {
        // Get the actual viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const devicePixelRatio = window.devicePixelRatio || 1;
        const scrollX = window.pageXOffset;
        const scrollY = window.pageYOffset;
        
        resolve({
          viewportWidth,
          viewportHeight,
          scrollX,
          scrollY,
          devicePixelRatio
        });
      });
    `);
  }

  async captureVisibleArea(webview: Electron.WebviewTag): Promise<string> {
    try {
      const webContentsId = webview.getWebContentsId();
      const wc = webContents.fromId(webContentsId);
      if (!wc) {
        throw new Error('Cannot get webContents');
      }

      // Store original zoom and reset to 1.0
      const originalZoom = await wc.getZoomFactor();
      await wc.setZoomFactor(1.0);

      // Wait for zoom changes to take effect
      await new Promise(resolve => setTimeout(resolve, 100));

      // Get viewport dimensions and scroll position from the webview
      const viewportInfo = await wc.executeJavaScript(`
        new Promise((resolve) => {
          const rect = document.documentElement.getBoundingClientRect();
          resolve({
            viewportWidth: window.innerWidth,
            viewportHeight: window.innerHeight,
            scrollX: window.scrollX || window.pageXOffset,
            scrollY: window.scrollY || window.pageYOffset,
            devicePixelRatio: window.devicePixelRatio || 1
          });
        });
      `);

      console.log('[ScreenshotService] Viewport info:', viewportInfo);

      // Capture the visible area using webview's capturePage
      const image = await new Promise<Electron.NativeImage>((resolve, reject) => {
        const bounds = {
          x: 0, // Always start from left edge
          y: 0, // Always start from top edge
          width: Math.round(viewportInfo.viewportWidth),
          height: Math.round(viewportInfo.viewportHeight)
        };

        console.log('[ScreenshotService] Capture bounds:', bounds);

        webview.capturePage(bounds)
          .then((img: Electron.NativeImage) => {
            if (img.isEmpty()) {
              console.error('[ScreenshotService] Captured image is empty');
              reject(new Error('Captured image is empty'));
              return;
            }
            console.log('[ScreenshotService] Image captured successfully');
            resolve(img);
          })
          .catch(error => {
            console.error('[ScreenshotService] Capture error:', error);
            reject(error);
          });
      });

      // Convert to base64
      const base64Image = image.toDataURL();

      // Restore original zoom
      await wc.setZoomFactor(originalZoom);

      return base64Image;
    } catch (error) {
      console.error('[ScreenshotService] Error capturing visible area:', error);
      throw error;
    }
  }
} 