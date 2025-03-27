import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges, NgZone } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import type { WebviewTag } from 'electron';

@Component({
    selector: 'app-webview',
    templateUrl: './app-webview.component.html',
    styleUrls: ['./app-webview.component.scss']
})
export class AppWebviewComponent implements AfterViewInit, OnChanges {
    @ViewChild('webview') webview!: ElementRef<WebviewTag>;

    @Input() currentApp: IApp = { id: 0, title: "", url: "", icon: "" };
    @Input() currentTab: ITab = { id: 0, appId: 0, title: "", url: "", hostName: "", icon: "" };
    @Input() apps: IApp[] = [];
    @Input() tabIds: number[] = [];
    @Input() screenHeight: number = 0;
    @Input() screenWidth: number = 0;

    @Output() onClicked = new EventEmitter<MouseEvent>();
    @Output() onContextMenu = new EventEmitter<MouseEvent>();
    @Output() onDomReady = new EventEmitter<void>();
    @Output() onNewUrl = new EventEmitter<string>();
    @Output() onTitleChanged = new EventEmitter<string>();
    @Output() onIconChanged = new EventEmitter<string>();
    @Output() onUrlChanged = new EventEmitter<string>();

    private isWebviewReady = false;
    private pendingUrl: string | null = null;

    constructor(private ngZone: NgZone) {
        console.log('[WebView] Component constructed');
    }

    ngAfterViewInit() {
        console.log('[WebView] After view init');
        console.log('[WebView] Webview element:', this.webview?.nativeElement);
        
        // Wait for the next tick to ensure the webview is in the DOM
        setTimeout(() => {
            this.setupWebviewEvents();
            
            // Force initial dom-ready event
            const webview = this.webview.nativeElement;
            if (webview) {
                console.log('[WebView] Forcing initial load');
                webview.src = 'about:blank';
            }
        }, 0);
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('[WebView] Changes detected:', changes);
        if (changes['currentTab']) {
            console.log('[WebView] Current tab changed:', this.currentTab);
            if (this.currentTab) {
                const newUrl = this.ensureProtocol(this.currentTab.url);
                console.log('[WebView] Processed URL:', newUrl);
                if (newUrl) {
                    if (this.isWebviewReady) {
                        console.log('[WebView] Webview is ready, loading URL directly');
                        this.loadUrl(newUrl);
                    } else {
                        console.log('[WebView] Webview not ready, queueing URL');
                        this.pendingUrl = newUrl;
                    }
                }
            }
        }
    }

    private setupWebviewEvents() {
        console.log('[WebView] Setting up webview events');
        const webview = this.webview.nativeElement;
        console.log('[WebView] Webview element for events:', webview);

        if (!webview) {
            console.error('[WebView] No webview element found!');
            return;
        }

        webview.addEventListener('dom-ready', () => {
            this.ngZone.run(() => {
                console.log('[WebView] DOM ready event fired');
                this.isWebviewReady = true;
                if (this.pendingUrl) {
                    console.log('[WebView] Loading pending URL:', this.pendingUrl);
                    this.loadUrl(this.pendingUrl);
                    this.pendingUrl = null;
                }
                this.onDomReady.emit();

                // Log webview properties
                console.log('[WebView] Properties:', {
                    src: webview.src,
                    getURL: typeof webview.getURL === 'function' ? webview.getURL() : 'not a function',
                    loadURL: typeof webview.loadURL === 'function' ? 'available' : 'not available'
                });

                // Try to enable dev tools
                try {
                    webview.openDevTools();
                } catch (e) {
                    console.log('[WebView] Could not open devtools:', e);
                }
            });
        });

        webview.addEventListener('page-title-updated', (event: any) => {
            this.ngZone.run(() => {
                console.log('[WebView] Title updated:', event.title);
                this.onTitleChanged.emit(event.title);
            });
        });

        webview.addEventListener('page-favicon-updated', (event: any) => {
            this.ngZone.run(() => {
                if (event.favicons && event.favicons.length > 0) {
                    console.log('[WebView] Favicon updated:', event.favicons[0]);
                    this.onIconChanged.emit(event.favicons[0]);
                }
            });
        });

        webview.addEventListener('did-navigate', (event: any) => {
            this.ngZone.run(() => {
                console.log('[WebView] URL changed:', event.url);
                this.onUrlChanged.emit(event.url);
            });
        });

        webview.addEventListener('did-fail-load', (event: any) => {
            this.ngZone.run(() => {
                console.error('[WebView] Failed to load:', {
                    errorCode: event.errorCode,
                    errorDescription: event.errorDescription,
                    validatedURL: event.validatedURL,
                    isMainFrame: event.isMainFrame
                });
            });
        });

        webview.addEventListener('did-start-loading', () => {
            this.ngZone.run(() => {
                console.log('[WebView] Started loading');
            });
        });

        webview.addEventListener('did-stop-loading', () => {
            this.ngZone.run(() => {
                console.log('[WebView] Stopped loading');
            });
        });

        webview.addEventListener('did-finish-load', () => {
            this.ngZone.run(() => {
                console.log('[WebView] Finished loading');
            });
        });

        webview.addEventListener('console-message', (event: any) => {
            this.ngZone.run(() => {
                console.log('[WebView Console]:', event.message);
            });
        });

        webview.addEventListener('click', (event: MouseEvent) => {
            this.ngZone.run(() => {
                console.log('[WebView] Clicked');
                this.onClicked.emit(event);
            });
        });

        webview.addEventListener('contextmenu', (event: MouseEvent) => {
            this.ngZone.run(() => {
                console.log('[WebView] Context menu');
                this.onContextMenu.emit(event);
            });
        });
    }

    private ensureProtocol(url: string): string {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    }

    private loadUrl(url: string) {
        console.log('[WebView] Attempting to load URL:', url);
        const webview = this.webview.nativeElement;
        console.log('[WebView] Webview element for loading:', webview);

        try {
            // Try both methods
            if (typeof webview.loadURL === 'function') {
                console.log('[WebView] Using loadURL method');
                webview.loadURL(url).catch(error => {
                    console.error('[WebView] Error with loadURL:', error);
                    console.log('[WebView] Falling back to src property');
                    webview.src = url;
                });
            } else {
                console.log('[WebView] Using src property');
                webview.src = url;
            }
        } catch (error) {
            console.error('[WebView] Error loading URL:', error);
        }
    }
}
