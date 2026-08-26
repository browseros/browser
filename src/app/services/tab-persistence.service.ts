import { Injectable, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import * as fromRoot from '../reducers';
import * as appActions from '../actions/app.actions';
import type { IApp } from '../models/app.model';
import type { ITab } from '../models/tab.model';

const { ipcRenderer } = require('electron');

export interface IWindowSession {
    windowId: string;
    apps: IApp[];
    tabs: ITab[];
    currentApp: IApp | null;
    currentTab: ITab | null;
}

export interface ISessionStore {
    continueWhereYouLeftOff: boolean;
    windows: { [windowId: string]: IWindowSession };
}

const SESSION_STORAGE_KEY = 'browseros.session.v1';
const CONTINUE_KEY = 'browseros.continueWhereYouLeftOff';

@Injectable({
    providedIn: 'root'
})
export class TabPersistenceService implements OnDestroy {
    private windowId: string | null = null;
    private saveSub: Subscription | null = null;
    private restored = false;

    constructor(private store: Store<fromRoot.State>) {}

    public async initialize(): Promise<void> {
        try {
            this.windowId = await ipcRenderer.invoke('session:get-window-id');
        } catch (error) {
            console.error('[TabPersistenceService] Failed to get window id:', error);
            this.windowId = 'default';
        }

        ipcRenderer.send('session:set-continue', this.getContinueWhereYouLeftOff());

        if (this.getContinueWhereYouLeftOff()) {
            this.restoreThisWindow();
        }

        this.watchAndSave();
        ipcRenderer.on('session:window-closing', () => this.saveThisWindow());
    }

    public getContinueWhereYouLeftOff(): boolean {
        const saved = localStorage.getItem(CONTINUE_KEY);
        if (saved === null) {
            return true;
        }
        return saved === 'true';
    }

    public setContinueWhereYouLeftOff(enabled: boolean): void {
        localStorage.setItem(CONTINUE_KEY, String(enabled));
        try {
            ipcRenderer.send('session:set-continue', enabled);
        } catch {
            // Renderer may run outside Electron in tests
        }
        if (!enabled && this.windowId) {
            this.removeWindowSession(this.windowId);
        }
    }

    public saveThisWindow(): void {
        if (!this.windowId || !this.getContinueWhereYouLeftOff()) {
            return;
        }
        const snapshot = this.lastSnapshot;
        if (!snapshot) {
            return;
        }
        this.writeWindowSession({
            ...snapshot,
            windowId: this.windowId
        });
    }

    ngOnDestroy(): void {
        this.saveSub?.unsubscribe();
        this.saveThisWindow();
    }

    private lastSnapshot: Omit<IWindowSession, 'windowId'> | null = null;

    private restoreThisWindow(): void {
        if (!this.windowId) {
            return;
        }
        const session = this.readStore().windows[this.windowId];
        if (!session || !session.tabs || session.tabs.length === 0) {
            return;
        }
        this.store.dispatch(new appActions.RestoreSessionAction(session));
        this.restored = true;
    }

    private watchAndSave(): void {
        this.saveSub = this.store.select(fromRoot.getAppState).pipe(
            debounceTime(250)
        ).subscribe(state => {
            if (!state) {
                return;
            }
            this.lastSnapshot = {
                apps: state.apps || [],
                tabs: state.tabs || [],
                currentApp: state.currentApp,
                currentTab: state.currentTab
            };
            if (this.restored || (state.tabs && state.tabs.length > 0) || (state.apps && state.apps.length > 0)) {
                this.saveThisWindow();
            }
        });
    }

    private readStore(): ISessionStore {
        try {
            const raw = localStorage.getItem(SESSION_STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                return {
                    continueWhereYouLeftOff: parsed.continueWhereYouLeftOff !== false,
                    windows: parsed.windows || {}
                };
            }
        } catch (error) {
            console.error('[TabPersistenceService] Failed to read session store:', error);
        }
        return { continueWhereYouLeftOff: true, windows: {} };
    }

    private writeWindowSession(session: IWindowSession): void {
        const store = this.readStore();
        store.windows[session.windowId] = session;
        store.continueWhereYouLeftOff = this.getContinueWhereYouLeftOff();
        try {
            localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(store));
        } catch (error) {
            console.error('[TabPersistenceService] Failed to save session:', error);
        }
    }

    private removeWindowSession(windowId: string): void {
        const store = this.readStore();
        delete store.windows[windowId];
        try {
            localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(store));
        } catch (error) {
            console.error('[TabPersistenceService] Failed to remove session:', error);
        }
    }
}
