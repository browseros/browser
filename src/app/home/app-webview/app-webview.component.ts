import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
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

    ngAfterViewInit() {
        this.setupWebviewEvents();
        this.loadCurrentTab();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['currentTab'] && !changes['currentTab'].firstChange) {
            this.loadCurrentTab();
        }
    }

    private setupWebviewEvents() {
        const webview = this.webview.nativeElement;

        webview.addEventListener('dom-ready', () => {
            console.log('Webview DOM ready');
            this.onDomReady.emit();
        });

        webview.addEventListener('page-title-updated', (event: any) => {
            console.log('Title updated:', event.title);
            this.onTitleChanged.emit(event.title);
        });

        webview.addEventListener('page-favicon-updated', (event: any) => {
            if (event.favicons && event.favicons.length > 0) {
                console.log('Favicon updated:', event.favicons[0]);
                this.onIconChanged.emit(event.favicons[0]);
            }
        });

        webview.addEventListener('did-navigate', (event: any) => {
            console.log('URL changed:', event.url);
            this.onUrlChanged.emit(event.url);
        });

        webview.addEventListener('did-fail-load', (event: any) => {
            console.error('Failed to load:', event);
        });

        webview.addEventListener('click', (event: MouseEvent) => {
            this.onClicked.emit(event);
        });

        webview.addEventListener('contextmenu', (event: MouseEvent) => {
            this.onContextMenu.emit(event);
        });
    }

    private ensureProtocol(url: string): string {
        if (!url) return '';
        if (url.startsWith('http://') || url.startsWith('https://')) {
            return url;
        }
        return `https://${url}`;
    }

    private loadCurrentTab() {
        if (this.webview && this.currentTab) {
            const newUrl = this.ensureProtocol(this.currentTab.url);
            if (newUrl) {
                console.log('Loading URL:', newUrl);
                this.webview.nativeElement.src = newUrl;
            }
        }
    }
}
