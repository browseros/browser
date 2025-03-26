import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { IWebEvent } from '../../models/web-event.model';

@Component({
  selector: 'web-view',
  template: '<div>Web View Component</div>'
})
export class WebViewComponent {
  @Input() tabId: number = 0;
  @Input() screenHeight: number = 0;
  @Input() screenWidth: number = 0;

  @Output() onClicked = new EventEmitter<MouseEvent>();
  @Output() onContextMenu = new EventEmitter<MouseEvent>();
  @Output() onDomReady = new EventEmitter<IWebEvent>();
  @Output() onNewUrl = new EventEmitter<IWebEvent>();
  @Output() onTitleChanged = new EventEmitter<IWebEvent>();
  @Output() onIconChanged = new EventEmitter<IWebEvent>();
  @Output() onUrlChanged = new EventEmitter<string>();
} 