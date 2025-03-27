import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';

@Component({
    selector: 'app-webview',
    templateUrl: './app-webview.component.html',
    styleUrls: ['./app-webview.component.scss']
})
export class AppWebviewComponent implements AfterViewInit, OnChanges {
    @ViewChild('webview') webview!: ElementRef<Electron.WebviewTag>;

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
            this.onDomReady.emit();
        });

        webview.addEventListener('page-title-updated', (event: any) => {
            this.onTitleChanged.emit(event.title);
        });

        webview.addEventListener('page-favicon-updated', (event: any) => {
            if (event.favicons && event.favicons.length > 0) {
                this.onIconChanged.emit(event.favicons[0]);
            }
        });

        webview.addEventListener('did-navigate', (event: any) => {
            this.onUrlChanged.emit(event.url);
        });

        webview.addEventListener('click', (event: MouseEvent) => {
            this.onClicked.emit(event);
        });

        webview.addEventListener('contextmenu', (event: MouseEvent) => {
            this.onContextMenu.emit(event);
        });
    }

    private loadCurrentTab() {
        if (this.webview && this.currentTab) {
            const newUrl = this.currentTab.url;
            if (newUrl) {
                this.webview.nativeElement.loadURL(newUrl);
            }
        }
    }
}
