import { ADD_APP_COMPLETE, GOTO_APP_COMPLETE } from './../actions/app.actions';

import { IApp } from '../models/app.model';
import * as app from '../actions/app.actions';
import { ITab } from '../models/tab.model';

export interface State {
    apps: IApp[];
    currentApp: IApp;
    currentTab: ITab;
    isGoingtoApp: boolean;
    isAddingApp: boolean;
    isAddingTab: boolean;
    isClosingApp: boolean;
}

export const initialState: State = {
    apps: [],
    currentApp: null,
    currentTab: null,
    isGoingtoApp: false,
    isAddingApp: false,
    isAddingTab: false,
    isClosingApp: false
};

export function reducer(state = initialState, action: app.Actions): State {
    switch (action.type) {
        case app.ADD_APP: {
            const newApp = action.payload as IApp;
            newApp.tabs = [];
            let newTab: ITab = { hostName: newApp.hostName, title: newApp.title, url: newApp.url };
            newApp.tabs.push(newTab);
            return Object.assign({}, state, {
                apps: [...state.apps, newApp],
                currentApp: newApp,
                isAddingApp: true
            });
        }

        case app.ADD_APP_COMPLETE: {
            return Object.assign({}, state, {
                isAddingApp: false
            });
        }

        case app.ADD_TAB: {
            const tab = action.payload as ITab;
            let appId = state.apps.findIndex(item => item.url === tab.hostName);
            if (appId < 0) {
                let newApp: IApp = { url: tab.url, hostName: tab.hostName, icon: '', tabs: [], title: tab.title };
                newApp.tabs.push(tab);
                return Object.assign({}, state, {
                    apps: [...state.apps, newApp],
                    currentApp: newApp,
                    isAddingApp: true,
                    isGoingtoApp: true
                });
            }
            let appToAdd = state.apps[appId];
            appToAdd.tabs.push(tab);

            return Object.assign({}, state, {
                apps: Object.assign({}, state.apps, {
                    [appId]: appToAdd
                }),
                currentApp: appToAdd,
                isAddingTab: true,
                isGoingtoApp: true
            });
        }

        case app.ADD_TAB_COMPLETE: {
            return Object.assign({}, state, {
                isAddingTab: false
            });
        }

        case app.GOTO_APP: {
            return Object.assign({}, state, {
                currentApp: action.payload,
                isGoingtoApp: true
            });
        }

        case app.GOTO_APP_COMPLETE: {
            return Object.assign({}, state, {
                isGoingtoApp: false
            });
        }

        case app.CLOSE_APP: {
            const app = action.payload;
            let newCurrentApp: IApp = state.currentApp;
            let newApps = state.apps.filter(a => a.hostName !== app.hostName);
            if (state.currentApp && app.hostName === state.currentApp.hostName) {
                let appId = state.apps.findIndex(a => a.hostName === app.hostName);

                if (appId === state.apps.length - 1) {
                    appId--;
                }
                if (appId >= 0) {
                    newCurrentApp = newApps[appId];
                }
            }

            return Object.assign({}, state, {
                apps: newApps,
                currentApp: newCurrentApp,
                isClosingApp: true
            });
        }

        case app.CLOSE_APP_COMPLETE: {
            return Object.assign({}, state, {
                isClosingApp: false
            });
        }

        default: {
            return state;
        }
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getApps = (state: State) => state.apps;

export const getCurrentApp = (state: State) => state.currentApp;

export const getCurrentTab = (state: State) => state.currentTab;
