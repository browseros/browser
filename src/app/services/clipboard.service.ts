import { Injectable } from '@angular/core';
import { clipboard } from '@electron/remote';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {
  async copy(text: string): Promise<void> {
    try {
      await clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy:', err);
      // Fallback to document.execCommand
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
  }

  async paste(): Promise<string> {
    try {
      return clipboard.readText();
    } catch (err) {
      console.error('Failed to paste:', err);
      // Fallback to document.execCommand
      const textarea = document.createElement('textarea');
      document.body.appendChild(textarea);
      textarea.focus();
      document.execCommand('paste');
      const text = textarea.value;
      document.body.removeChild(textarea);
      return text;
    }
  }
} 