import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import * as appActions from '../actions/app.actions';
import type { IApp } from '../models/app.model';
import type { ITab } from '../models/tab.model';
import type { AppState } from '../home/state/app.state';

export interface ISession {
    timestamp: number;
    apps: IApp[];
    tabs: ITab[];
    currentApp?: IApp;
    currentTab?: ITab;
}

@Injectable({
    providedIn: 'root'
})
export class TabPersistenceService {
    constructor(private store: Store<AppState>) {}

    private getSessions(): ISession[] {
        const sessionsJson = localStorage.getItem('sessions');
        return sessionsJson ? JSON.parse(sessionsJson) : [];
    }

    public restoreSession(timestamp: number): void {
        try {
            const sessions = this.getSessions();
            const session = sessions.find(s => s.timestamp === timestamp);
            if (!session) {
                console.error('[TabPersistenceService] Session not found:', timestamp);
                return;
            }

            // First get the current apps
            this.store.select((state: AppState) => state.apps)
                .subscribe((apps: IApp[]) => {
                    // Create an array of promises for closing each app
                    const closePromises = apps.map((app: IApp) => {
                        return new Promise<void>((resolve) => {
                            this.store.dispatch(new appActions.CloseAppAction(app));
                            // Give a small delay to ensure app is closed
                            setTimeout(resolve, 100);
                        });
                    });

                    // After all apps are closed, restore the session
                    Promise.all(closePromises).then(() => {
                        // Restore session state
                        session.apps.forEach(app => {
                            this.store.dispatch(new appActions.AddAppAction(app));
                        });

                        session.tabs.forEach(tab => {
                            this.store.dispatch(new appActions.AddTabAction(tab));
                        });

                        if (session.currentApp) {
                            this.store.dispatch(new appActions.GotoAppAction(session.currentApp));
                        }

                        if (session.currentTab) {
                            this.store.dispatch(new appActions.GotoTabAction(session.currentTab));
                        }
                    });
                })
                .unsubscribe(); // Unsubscribe after getting the apps once
        } catch (error) {
            console.error('[TabPersistenceService] Error restoring session:', error);
        }
    }

    // ... rest of the service code ...
} 