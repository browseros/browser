import { Injectable } from '@angular/core';
import { Menu, MenuItem } from '@electron/remote';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  constructor() {}

  async copy(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy text:', error);
      throw error;
    }
  }

  async paste(): Promise<string> {
    try {
      return await navigator.clipboard.readText();
    } catch (error) {
      console.error('Failed to paste text:', error);
      throw error;
    }
  }

  selectAll(element: HTMLInputElement | HTMLTextAreaElement): void {
    element.select();
  }

  setupKeyboardShortcuts(element: HTMLInputElement | HTMLTextAreaElement, onTextChange?: (text: string) => void): void {
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

  setupContextMenu(element: HTMLInputElement | HTMLTextAreaElement, onTextChange?: (text: string) => void): void {
    element.addEventListener('contextmenu', (e: Event) => {
      const mouseEvent = e as MouseEvent;
      mouseEvent.preventDefault();
      const menu = new Menu();

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