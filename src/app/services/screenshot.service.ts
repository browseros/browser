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
      
      // Store original zoom
      const originalZoom = await wc.getZoomFactor();

      // Calculate dynamic zoom factor based on page height
      const maxHeight = 4000;
      const zoomFactor = Math.min(maxHeight / pageInfo.height, 0.25);

      // Set zoom factor and prepare page for capture
      await this.preparePageForCapture(wc, pageInfo, zoomFactor);

      // Wait for changes to take effect
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Capture the full page using html2canvas
      const canvas = await wc.executeJavaScript(`
        new Promise((resolve) => {
          // Ensure we're at the top of the page
          window.scrollTo(0, 0);
          
          // Get the full scrollable height
          const fullHeight = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight,
            document.documentElement.offsetHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight
          );

          html2canvas(document.documentElement, {
            scale: ${pageInfo.devicePixelRatio},
            useCORS: true,
            allowTaint: true,
            foreignObjectRendering: true,
            logging: false,
            width: ${pageInfo.width},
            height: fullHeight,
            windowWidth: ${pageInfo.width},
            windowHeight: fullHeight,
            scrollX: 0,
            scrollY: 0,
            x: 0,
            y: 0,
            backgroundColor: '#ffffff'
          }).then(canvas => {
            resolve(canvas.toDataURL('image/png'));
          });
        });
      `);

      // Restore original state
      await this.restorePageState(wc, pageInfo, originalZoom);

      return canvas;
    } catch (error) {
      console.error('Error capturing full page:', error);
      throw error;
    }
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

  private async preparePageForCapture(wc: Electron.WebContents, pageInfo: PageInfo, zoomFactor: number): Promise<void> {
    await wc.setZoomFactor(zoomFactor);
    await wc.executeJavaScript(`
      // Store original scroll position
      window._originalScroll = window.pageYOffset;
      
      // Reset scroll position
      window.scrollTo(0, 0);
      
      // Ensure the page takes up the full height
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '${pageInfo.height}px';
      document.documentElement.style.width = '${pageInfo.width}px';
      document.body.style.overflow = 'hidden';
      document.body.style.height = '${pageInfo.height}px';
      document.body.style.width = '${pageInfo.width}px';
      
      // Force layout recalculation
      document.body.offsetHeight;
    `);
  }

  private async restorePageState(wc: Electron.WebContents, pageInfo: PageInfo, originalZoom: number): Promise<void> {
    await wc.setZoomFactor(originalZoom);
    await wc.executeJavaScript(`
      // Restore original scroll position
      window.scrollTo(${pageInfo.originalScroll.x}, ${pageInfo.originalScroll.y});
      
      // Restore original styles
      document.documentElement.style.overflow = '${pageInfo.originalStyles.html.overflow}';
      document.documentElement.style.height = '${pageInfo.originalStyles.html.height}';
      document.documentElement.style.width = '${pageInfo.originalStyles.html.width}';
      document.body.style.overflow = '${pageInfo.originalStyles.body.overflow}';
      document.body.style.height = '${pageInfo.originalStyles.body.height}';
      document.body.style.width = '${pageInfo.originalStyles.body.width}';
    `);
  }
} 