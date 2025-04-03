import { Injectable } from '@angular/core';
import { webContents } from '@electron/remote';
import { publicEncrypt } from 'crypto';
import html2canvas from 'html2canvas';

interface StyleInfo {
  element: Element;
  style: string;
}

interface PageInfo {
  width: number;
  height: number;
  headerHeight: number;
  originalStyles: StyleInfo[];
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
  private async getPageInfo(wc: Electron.WebContents): Promise<PageInfo> {
    return await wc.executeJavaScript(`
      new Promise((resolve) => {
        // Force layout recalculation
        document.documentElement.style.overflow = 'visible';
        document.body.style.overflow = 'visible';

        // Get the actual content width by checking all elements
        const allElements = document.getElementsByTagName('*');
        let maxRight = 0;
        let maxBottom = 0;
        
        for (let i = 0; i < allElements.length; i++) {
          const element = allElements[i];
          const rect = element.getBoundingClientRect();
          maxRight = Math.max(maxRight, rect.right + window.pageXOffset);
          maxBottom = Math.max(maxBottom, rect.bottom + window.pageYOffset);
        }

        // Calculate actual dimensions
        const width = Math.max(
          maxRight,
          document.documentElement.scrollWidth,
          document.documentElement.offsetWidth,
          document.body.scrollWidth,
          document.body.offsetWidth,
          window.innerWidth * 2
        );

        const height = Math.max(
          maxBottom,
          document.documentElement.scrollHeight,
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

        console.log('Page dimensions:', { width, height, maxRight, maxBottom });
        resolve({ width, height, headerHeight: 0, originalStyles });
      });
    `);
  }

  public async captureFullPage(webview: Electron.WebviewTag): Promise<string> {
    try {
      const webContentsId = webview.getWebContentsId();
      const wc = webContents.fromId(webContentsId);
      if (!wc) {
        throw new Error('Cannot get webContents');
      }

      // Lưu lại zoom và vị trí cuộn ban đầu
      const originalZoom = await wc.getZoomFactor();
      const originalScroll = await wc.executeJavaScript('({ x: window.scrollX, y: window.scrollY })');
      await wc.setZoomFactor(0.5);

      // Lấy kích thước trang
      const pageInfo = await wc.executeJavaScript(`
        new Promise((resolve) => {
          const width = Math.max(
            document.documentElement.scrollWidth,
            document.body.scrollWidth,
            document.documentElement.offsetWidth,
            document.body.offsetWidth
          );
          const height = Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight,
            document.documentElement.offsetHeight,
            document.body.offsetHeight
          );
          resolve({ width, height });
        });
      `);

      // Cho phép cuộn toàn bộ trang
      await wc.executeJavaScript(`
        document.documentElement.style.overflow = 'visible';
        document.body.style.overflow = 'visible';
      `);
      await new Promise(resolve => setTimeout(resolve, 500));

      const viewportHeight = webview.clientHeight;
      const maxSections = 20;
      // Tính số section cần capture: phần đầu full viewport và các phần sau chỉ capture nửa dưới
      const computedSections = Math.ceil((pageInfo.height - viewportHeight) / (viewportHeight / 2)) + 1;
      const totalSections = Math.min(maxSections, computedSections);

      // Lấy devicePixelRatio
      const dpr = window.devicePixelRatio || 1;

      // Tạo canvas để ghép ảnh với kích thước tính theo dpr
      const canvas = document.createElement('canvas');
      canvas.width = pageInfo.width * dpr;
      canvas.height = pageInfo.height * dpr;
      // Để khi vẽ các ảnh theo đơn vị CSS pixel, ta scale canvas theo dpr
      const ctx = canvas.getContext('2d');
      if (!ctx) throw new Error('Failed to get canvas context');
      ctx.scale(dpr, dpr);

      // Biến lưu vị trí cuộn, khởi tạo ban đầu = 0
      let scrollPosition = 0;

      for (let i = 0; i < totalSections; i++) {
        // Với section đầu tiên, scroll vị trí 0, các section sau scroll xuống viewportHeight/2 mỗi lần
        if (i > 0) {
          scrollPosition = i * (viewportHeight / 2);
        }

        // Cuộn đến vị trí mong muốn
        await wc.executeJavaScript(`window.scrollTo(0, ${scrollPosition});`);
        await new Promise(resolve => setTimeout(resolve, 300));

        // Capture viewport
        const image = await webview.capturePage({
          x: 0,
          y: 0,
          width: pageInfo.width,
          height: viewportHeight
        });

        if (!image.isEmpty()) {
          const pngBuffer = image.toPNG();
          const blob = new Blob([pngBuffer], { type: 'image/png' });
          const url = URL.createObjectURL(blob);

          await new Promise<void>((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
              if (i === 0) {
                // Section đầu tiên: vẽ toàn bộ viewport
                ctx.drawImage(img, 0, 0, pageInfo.width, viewportHeight, 0, 0, pageInfo.width, viewportHeight);
              } else {
                // Các section sau: chỉ vẽ nửa dưới của viewport
                const destY = viewportHeight + (i - 1) * (viewportHeight / 2);
                ctx.drawImage(img, 0, viewportHeight / 2, pageInfo.width, viewportHeight / 2, 0, destY, pageInfo.width, viewportHeight / 2);
              }
              URL.revokeObjectURL(url);
              resolve();
            };
            img.onerror = (error) => {
              URL.revokeObjectURL(url);
              reject(error);
            };
            img.src = url;
          });
        }
      }

      // Khôi phục trạng thái ban đầu
      await wc.executeJavaScript(`
        document.documentElement.style.overflow = '';
        document.body.style.overflow = '';
        window.scrollTo(${originalScroll.x}, ${originalScroll.y});
      `);
      await wc.setZoomFactor(originalZoom);

      return canvas.toDataURL('image/png');
    } catch (error) {
      console.error('[ScreenshotService] Error capturing full page:', error);
      throw error;
    }
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