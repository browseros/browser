import { Component, Input, Output, EventEmitter, AfterViewInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import type { ITab } from '../../models/tab.model';
import { Subscription } from 'rxjs';
import type { WebviewTag } from 'electron';

@Component({
    selector: 'web-view',
    template: `
        <div class="web-view">
            <webview
                #webview
                [attr.id]="'webview-' + tab.id"
                [attr.src]="tab.url"
                [attr.preload]="preloadPath"
                [style.width.px]="containerWidth"
                [style.height.px]="containerHeight"
                webpreferences="contextIsolation=yes,nodeIntegration=yes"
                partition="persist:main"
                allowpopups>
            </webview>
        </div>
    `,
    styleUrls: ['./web-view.component.scss']
})
export class WebviewComponent implements AfterViewInit, OnDestroy {
    @ViewChild('webview') webview!: ElementRef<WebviewTag>;
    @Input() tab!: ITab;
    @Input() width!: number;
    @Input() height!: number;
    @Output() onNewUrl = new EventEmitter<string>();
    @Output() onTitleChanged = new EventEmitter<string>();
    @Output() onIconChanged = new EventEmitter<string>();
    @Output() onUrlChanged = new EventEmitter<string>();
    @Output() onDomReady = new EventEmitter<void>();
    @Output() onClicked = new EventEmitter<void>();
    @Output() onContextMenu = new EventEmitter<any>();

    containerWidth: number = 0;
    containerHeight: number = 0;
    private resizeObserver: ResizeObserver;
    private backSub: Subscription;
    private nextSub: Subscription;
    private reloadSub: Subscription;
    private changeSub: Subscription;
    private onFirstLoad: boolean = true;
    public preloadPath: string;

    constructor(
        public store: Store<fromRoot.State>,
        private cdr: ChangeDetectorRef,
        private elementRef: ElementRef
    ) {
        console.log('[WebView] Constructor called');
        // Use absolute path for preload script
        const path = require('path');
        this.preloadPath = path.join(__dirname, 'preload.js');
        console.log('[WebView] Preload path:', this.preloadPath);

        this.backSub = new Subscription();
        this.nextSub = new Subscription();
        this.reloadSub = new Subscription();
        this.changeSub = new Subscription();

        // Initialize ResizeObserver
        this.resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                const { width, height } = entry.contentRect;
                this.containerWidth = Math.floor(width);
                this.containerHeight = Math.floor(height);
                this.cdr.detectChanges();
            }
        });
    }

    ngAfterViewInit() {
        console.log('[WebView] Setting up webview events');
        console.log('[WebView] Screen height:', this.height);
        
        const self = this;
        const webviewElm = this.webview.nativeElement;

        if (!webviewElm) {
            console.error('[WebView] No webview element found');
            return;
        }

        // Start observing the host element
        this.resizeObserver.observe(this.elementRef.nativeElement);

        // Set up navigation subscriptions
        self.backSub = this.store.select(fromRoot.getIsNavigatingBack).subscribe((action: any) => {
            if (action && action.isCalling && self.tab.id && action.tab.id === self.tab.id) {
                self.goBack();
            }
        });

        self.nextSub = this.store.select(fromRoot.getIsNavigatingNext).subscribe((action: any) => {
            if (action && action.isCalling && action.tab.id === self.tab.id) {
                self.goForward();
            }
        });

        self.reloadSub = this.store.select(fromRoot.getIsNavigatingReload).subscribe((action: any) => {
            if (action && action.isCalling && self.tab.id && action.tab.id === self.tab.id) {
                self.reload();
            }
        });

        self.changeSub = this.store.select(fromRoot.getIsChangingUrl).subscribe((action: any) => {
            if (action && action.isCalling && action.tab && action.tab.id === self.tab.id) {
                self.loadURL(action.value as string);
                self.onUrlChanged.emit(action.value as string);
            }
        });

        // Set up webview event listeners
        webviewElm.addEventListener('new-window', (e: any) => {
            console.log('[WebView] New window requested:', e.url);
            self.onNewUrl.emit(e.url);
        });

        webviewElm.addEventListener('page-title-updated', (e: any) => {
            console.log('[WebView] Title updated:', e.title);
            self.onTitleChanged.emit(e.title);
        });

        webviewElm.addEventListener('page-favicon-updated', (e: any) => {
            console.log('[WebView] Favicon updated:', e.favicons);
            if (e.favicons && e.favicons.length > 0) {
                self.onIconChanged.emit(e.favicons[0]);
            }
        });

        webviewElm.addEventListener('did-navigate', (e: any) => {
            console.log('[WebView] Did navigate:', e.url);
            self.onUrlChanged.emit(e.url);
        });

        webviewElm.addEventListener('did-navigate-in-page', (e: any) => {
            console.log('[WebView] Did navigate in page:', e.url);
            self.onUrlChanged.emit(e.url);
        });

        webviewElm.addEventListener('dom-ready', () => {
            console.log('[WebView] DOM ready');
            self.onDomReady.emit();

            if (self.onFirstLoad) {
                self.onFirstLoad = false;
                const url = self.getTabUrl(self.tab.id);
                if (url) {
                    webviewElm.loadURL(url);
                }
            }
        });

        webviewElm.addEventListener('context-menu', (e: any) => {
            console.log('[WebView] Context menu requested');
            self.onContextMenu.emit(e);
        });

        const { ipcRenderer } = require('electron');
        ipcRenderer.on('clicked', () => {
            console.log('[WebView] Click detected');
            self.onClicked.emit();
        });
    }

    ngOnDestroy() {
        console.log('[WebView] Destroying component');
        this.resizeObserver.disconnect();
        if (this.backSub) {
            this.backSub.unsubscribe();
        }
        if (this.nextSub) {
            this.nextSub.unsubscribe();
        }
        if (this.reloadSub) {
            this.reloadSub.unsubscribe();
        }
        if (this.changeSub) {
            this.changeSub.unsubscribe();
        }

        const webviewElm = this.webview?.nativeElement;
        if (webviewElm) {
            webviewElm.removeEventListener('new-window', () => {});
            webviewElm.removeEventListener('page-title-updated', () => {});
            webviewElm.removeEventListener('page-favicon-updated', () => {});
            webviewElm.removeEventListener('did-navigate', () => {});
            webviewElm.removeEventListener('did-navigate-in-page', () => {});
            webviewElm.removeEventListener('dom-ready', () => {});
            webviewElm.removeEventListener('context-menu', () => {});
        }
    }

    private getTabUrl(tabId: number): string | null {
        // Implementation of getting tab URL
        return this.tab?.url || null;
    }

    private goBack() {
        const webviewElm = this.webview?.nativeElement;
        if (webviewElm && webviewElm.canGoBack()) {
            webviewElm.goBack();
        }
    }

    private goForward() {
        const webviewElm = this.webview?.nativeElement;
        if (webviewElm && webviewElm.canGoForward()) {
            webviewElm.goForward();
        }
    }

    private reload() {
        const webviewElm = this.webview?.nativeElement;
        if (webviewElm) {
            webviewElm.reload();
        }
    }

    private loadURL(url: string) {
        const webviewElm = this.webview?.nativeElement;
        if (webviewElm) {
            webviewElm.loadURL(url);
        }
    }
}
