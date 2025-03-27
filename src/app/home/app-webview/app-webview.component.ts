import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import type { ITab } from '../../models/tab.model';
import type { IApp } from '../../models/app.model';
import type { IWebEvent } from '../../models/web-event.model';
import { Subscription } from 'rxjs';
import { ChangeTabTitleAction, ChangeTabUrlAction, ChangeTabIconAction } from '../../actions/app.actions';

@Component({
    selector: 'app-webview',
    template: `
        <web-view
            *ngFor="let tabId of tabIds"
            [tabId]="tabId"
            [screenHeight]="screenHeight"
            [screenWidth]="screenWidth"
            [style.display]="tabId === currentTabId ? 'block' : 'none'"
            (onTitleChanged)="onTitleChanged($event, tabId)"
            (onIconChanged)="onIconChanged($event, tabId)"
            (onUrlChanged)="onUrlChanged($event, tabId)"
            (onNewUrl)="onNewUrl($event)"
            (onContextMenu)="onContextMenu($event)"
            (onDomReady)="onDomReady($event)"
            (onClicked)="onClicked($event)">
        </web-view>
    `
})
export class AppWebviewComponent implements OnInit, OnDestroy {
    public tabIds: number[] = [];
    public currentTabId: number = 0;
    public screenHeight: number;
    public screenWidth: number;
    private tabsSub: Subscription | undefined;
    private currentTabSub: Subscription | undefined;
    private currentApp: IApp | undefined;
    private appSub: Subscription | undefined;

    constructor(private store: Store<fromRoot.State>) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    }

    public ngOnInit() {
        this.tabsSub = this.store.select(fromRoot.getEventTabs).subscribe((tabs: ITab[]) => {
            this.tabIds = tabs.map(t => t.id);
        });

        this.currentTabSub = this.store.select(fromRoot.getEventCurrentTab).subscribe((tab: ITab) => {
            if (tab) {
                this.currentTabId = tab.id;
            }
        });

        this.appSub = this.store.select(fromRoot.getEventCurrentApp).subscribe((app: IApp) => {
            if (app) {
                this.currentApp = app;
            }
        });
    }

    public ngOnDestroy() {
        if (this.tabsSub) {
            this.tabsSub.unsubscribe();
        }
        if (this.currentTabSub) {
            this.currentTabSub.unsubscribe();
        }
        if (this.appSub) {
            this.appSub.unsubscribe();
        }
    }

    public onTitleChanged(title: string, tabId: number) {
        if (!this.currentApp) return;
        const event: IWebEvent = {
            tabId,
            app: this.currentApp,
            eventName: 'title-changed',
            eventValue: title
        };
        this.store.dispatch(new ChangeTabTitleAction(event));
    }

    public onIconChanged(icon: string, tabId: number) {
        if (!this.currentApp) return;
        const event: IWebEvent = {
            tabId,
            app: this.currentApp,
            eventName: 'icon-changed',
            eventValue: icon
        };
        this.store.dispatch(new ChangeTabIconAction(event));
    }

    public onUrlChanged(url: string, tabId: number) {
        if (!this.currentApp) return;
        const event: IWebEvent = {
            tabId,
            app: this.currentApp,
            eventName: 'url-changed',
            eventValue: url
        };
        this.store.dispatch(new ChangeTabUrlAction(event));
    }

    public onNewUrl(url: string) {
        // Handle new URL event
        console.log('New URL:', url);
    }

    public onContextMenu(params: any) {
        // Handle context menu event
        console.log('Context menu:', params);
    }

    public onDomReady(event: any) {
        // Handle DOM ready event
        console.log('DOM ready:', event);
    }

    public onClicked(event: any) {
        // Handle click event
        console.log('Clicked:', event);
    }
}
