import { Injectable } from '@angular/core';
import { Menu, MenuItem, clipboard, nativeImage } from '@electron/remote';
import { ipcRenderer } from 'electron';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  constructor() {}

  async copy(text: string): Promise<void> {
    try {
      clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy text:', error);
      throw error;
    }
  }

  async paste(): Promise<string> {
    try {
      return clipboard.readText();
    } catch (error) {
      console.error('Failed to paste text:', error);
      throw error;
    }
  }

  async pasteImage(): Promise<string | null> {
    try {
      const image = clipboard.readImage();
      if (!image.isEmpty()) {
        return `data:image/png;base64,${image.toPNG().toString('base64')}`;
      }
      return null;
    } catch (error) {
      console.error('Failed to paste image:', error);
      return null;
    }
  }

  selectAll(element: HTMLInputElement | HTMLTextAreaElement): void {
    element.select();
  }

  async copyImage(imageUrl: string): Promise<void> {
    try {
      const success = await ipcRenderer.invoke('copy-image', imageUrl);
      if (!success) {
        throw new Error('Failed to copy image');
      }
    } catch (error) {
      console.error('Failed to copy image:', error);
      // If all else fails, try to open the image in a new tab
      window.open(imageUrl, '_blank');
    }
  }

  setupKeyboardShortcuts(element: HTMLInputElement | HTMLTextAreaElement, onTextChange?: (text: string) => void, onImagePaste?: (imageUrl: string) => void): void {
    element.addEventListener('keydown', async (e: Event) => {
      const keyboardEvent = e as KeyboardEvent;
      // Select All (Ctrl+A/Command+A)
      if ((keyboardEvent.metaKey || keyboardEvent.ctrlKey) && keyboardEvent.key === 'a') {
        e.preventDefault();
        this.selectAll(element);
      }
      // Copy (Ctrl+C/Command+C)
      if ((keyboardEvent.metaKey || keyboardEvent.ctrlKey) && keyboardEvent.key === 'c') {
        e.preventDefault();
        const selectedText = element.value.substring(element.selectionStart || 0, element.selectionEnd || 0);
        if (selectedText) {
          await this.copy(selectedText);
        }
      }
      // Paste (Ctrl+V/Command+V)
      if ((keyboardEvent.metaKey || keyboardEvent.ctrlKey) && keyboardEvent.key === 'v') {
        e.preventDefault();
        // Try to paste image first
        if (onImagePaste) {
          const imageUrl = await this.pasteImage();
          if (imageUrl) {
            onImagePaste(imageUrl);
            return;
          }
        }
        // If no image, paste text
        const text = await this.paste();
        const start = element.selectionStart || 0;
        const end = element.selectionEnd || 0;
        const currentValue = element.value;
        element.value = currentValue.substring(0, start) + text + currentValue.substring(end);
        
        // Update cursor position
        setTimeout(() => {
          element.selectionStart = element.selectionEnd = start + text.length;
        });

        // Notify parent component of text change if callback provided
        if (onTextChange) {
          onTextChange(element.value);
        }
      }
    });
  }

  setupContextMenu(element: HTMLInputElement | HTMLTextAreaElement, onTextChange?: (text: string) => void, onImagePaste?: (imageUrl: string) => void): void {
    element.addEventListener('contextmenu', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      mouseEvent.preventDefault();
      const menu = new Menu();

      // Get the target element
      const target = mouseEvent.target as HTMLElement;
      const isImage = target.tagName === 'IMG';

      if (isImage) {
        // Add image-specific menu items
        menu.append(new MenuItem({
          label: 'Copy Image',
          click: async () => {
            const imgElement = target as HTMLImageElement;
            if (imgElement.src) {
              await this.copyImage(imgElement.src);
            }
          }
        }));

        menu.append(new MenuItem({ type: 'separator' }));
      }

      menu.append(new MenuItem({
        label: 'Select All',
        click: () => {
          this.selectAll(element);
        }
      }));

      menu.append(new MenuItem({
        label: 'Copy',
        click: async () => {
          const selectedText = element.value.substring(
            element.selectionStart || 0,
            element.selectionEnd || 0
          );
          if (selectedText) {
            await this.copy(selectedText);
          }
        }
      }));

      menu.append(new MenuItem({
        label: 'Paste',
        click: async () => {
          // Try to paste image first
          if (onImagePaste) {
            const imageUrl = await this.pasteImage();
            if (imageUrl) {
              onImagePaste(imageUrl);
              return;
            }
          }
          // If no image, paste text
          const text = await this.paste();
          const start = element.selectionStart || 0;
          const end = element.selectionEnd || 0;
          const currentValue = element.value;
          element.value = currentValue.substring(0, start) + text + currentValue.substring(end);
          
          // Update cursor position
          setTimeout(() => {
            element.selectionStart = element.selectionEnd = start + text.length;
          });

          // Notify parent component of text change if callback provided
          if (onTextChange) {
            onTextChange(element.value);
          }
        }
      }));

      menu.popup({ x: mouseEvent.clientX, y: mouseEvent.clientY });
    });
  }
} 