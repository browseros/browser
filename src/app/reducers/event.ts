import { IWebAction } from './../models/web-action.model';
import { IApp } from '../models/app.model';
import * as event from '../actions/event.actions';
import * as app from '../actions/app.actions';
import { ITab } from '../models/tab.model';

export interface State {
    apps: IApp[];
    currentApp: IApp;
    isGoingtoApp: boolean;
    isAddingApp: boolean;
    isAddingTab: boolean;
    isClosingApp: boolean;
    isNavigatingNext: IWebAction;
    isNavigatingBack: IWebAction;
}

export const initialState: State = {
    apps: [],
    currentApp: null,
    isGoingtoApp: false,
    isAddingApp: false,
    isAddingTab: false,
    isClosingApp: false,
    isNavigatingNext: null,
    isNavigatingBack: null
};

export function reducer(state = initialState, action: event.Actions | app.Actions): State {
    switch (action.type) {

        case app.ADD_TAB: {
            let tab = JSON.parse(JSON.stringify(action.payload));
            let appId = state.apps.findIndex(item => item.hostName === tab.hostName);
            if (appId < 0) {
                let maxId = Math.max(...state.apps.map(a => a.id)) + 1;
                let newAppId = state.apps.length === 0 ? 1 : maxId;
                tab.id = 1;
                tab.appId = newAppId;
                let newApp: IApp = {
                    id: newAppId,
                    url: tab.url, hostName: tab.hostName, icon: '', tabs: [], title: tab.title,
                    currentTab: tab
                };
                newApp.tabs.push(tab);
                return Object.assign({}, state, {
                    apps: [...state.apps, newApp],
                    currentApp: newApp,
                    isAddingApp: true,
                    isGoingtoApp: true
                });
            }
            let stateAppToAdd = state.apps[appId];
            let newTabId = stateAppToAdd.tabs.length === 0
                ? 1
                : (Math.max(...stateAppToAdd.tabs.map(a => a.id)) + 1);
            tab.id = newTabId;
            tab.appId = stateAppToAdd.id;
            let appToAdd = Object.assign({}, stateAppToAdd, {
                tabs: [...stateAppToAdd.tabs, tab],
                currentTab: tab
            });

            return Object.assign({}, state, {
                apps: [...state.apps.slice(0, appId), appToAdd, ...state.apps.slice(appId + 1)],
                currentApp: appToAdd,
                isAddingTab: true
            });
        }

        case app.CLOSE_APP: {
            let app = action.payload;
            let newCurrentApp: IApp = state.currentApp;
            let newApps = state.apps.filter(a => a.id !== app.id);
            if (state.currentApp && app.id === state.currentApp.id) {
                let appId = state.apps.findIndex(a => a.id === app.id);

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

        case app.GOTO_APP: {
            let newCurrentApp = state.apps.find(a => a.id === action.payload.id);
            return Object.assign({}, state, {
                currentApp: newCurrentApp,
                isGoingtoApp: true
            });
        }

        case event.GOTO_TAB: {
            let newCurrentApp = Object.assign({}, state.currentApp, {
                currentTab: action.payload
            });
            let currentAppIndex = state.apps.findIndex(a => a.id === state.currentApp.id);
            return Object.assign({}, state, {
                currentApp: newCurrentApp,
                apps: [...state.apps.slice(0, currentAppIndex), newCurrentApp, ...state.apps.slice(currentAppIndex + 1)]
            });
        }

        case event.CLOSE_TAB: {
            let newCurrentApp = Object.assign({}, state.currentApp);
            let currentAppIndex = state.apps.findIndex(a => a.id === state.currentApp.id);
            let newTabs = newCurrentApp.tabs.filter(a => a.id !== action.payload.id);
            let newCurrentTab = newCurrentApp.currentTab;
            if (newCurrentApp.currentTab.id === action.payload.id) {
                let tabId = newCurrentApp.tabs.findIndex(a => a.id === newCurrentApp.currentTab.id);

                if (tabId === newCurrentApp.tabs.length - 1) {
                    tabId--;
                }
                if (tabId >= 0) {
                    newCurrentTab = newTabs[tabId];
                }
            }
            newCurrentApp.currentTab = newCurrentTab;
            newCurrentApp.tabs = newTabs;
            return Object.assign({}, state, {
                currentApp: newCurrentApp,
                apps: [...state.apps.slice(0, currentAppIndex), newCurrentApp, ...state.apps.slice(currentAppIndex + 1)]
            });
        }

        case event.CHANGE_TAB_TITLE: {
            let changedAppIndex = state.apps.findIndex(a => a.id === action.payload.app.id);
            let changedApp = state.apps[changedAppIndex];
            let changedTabIndex = changedApp.tabs.findIndex(t => t.id === action.payload.tab.id);
            let changedTab = changedApp.tabs[changedTabIndex];
            if (action.payload.eventValue === changedTab.title) {
                return state;
            }
            let newChangedTab = Object.assign({}, changedTab, {
                title: action.payload.eventValue
            });
            let newCurrentTab = changedApp.currentTab;
            if (newCurrentTab.id === newChangedTab.id) {
                newCurrentTab = newChangedTab;
            }
            let newChangedApp = Object.assign({}, changedApp, {
                tabs: [...changedApp.tabs.slice(0, changedTabIndex),
                    newChangedTab,
                ...changedApp.tabs.slice(changedTabIndex + 1)],
                currentTab: newCurrentTab
            });
            let newCurrentApp = state.currentApp;
            if (newCurrentApp.id === newChangedApp.id) {
                newCurrentApp = newChangedApp;
            }
            let newState = Object.assign({}, state, {
                apps: [...state.apps.slice(0, changedAppIndex),
                    newChangedApp,
                ...state.apps.slice(changedAppIndex + 1)],
                currentApp: newCurrentApp
            });
            return newState;
        }

        case event.CHANGE_TAB_URL: {
            let changedAppIndex = state.apps.findIndex(a => a.id === action.payload.app.id);
            let changedApp = state.apps[changedAppIndex];
            let changedTabIndex = changedApp.tabs.findIndex(t => t.id === action.payload.tab.id);
            let changedTab = changedApp.tabs[changedTabIndex];
            if (action.payload.eventValue === changedTab.url) {
                return state;
            }
            let newChangedTab = Object.assign({}, changedTab, {
                url: action.payload.eventValue
            });
            let newCurrentTab = changedApp.currentTab;
            if (newCurrentTab.id === newChangedTab.id) {
                newCurrentTab = newChangedTab;
            }
            let newChangedApp = Object.assign({}, changedApp, {
                tabs: [...changedApp.tabs.slice(0, changedTabIndex),
                    newChangedTab,
                ...changedApp.tabs.slice(changedTabIndex + 1)],
                currentTab: newCurrentTab
            });
            let newCurrentApp = state.currentApp;
            if (newCurrentApp.id === newChangedApp.id) {
                newCurrentApp = newChangedApp;
            }
            let newState = Object.assign({}, state, {
                apps: [...state.apps.slice(0, changedAppIndex),
                    newChangedApp,
                ...state.apps.slice(changedAppIndex + 1)],
                currentApp: newCurrentApp
            });
            return newState;
        }

        case event.CHANGE_TAB_ICON: {
            let changedAppIndex = state.apps.findIndex(a => a.id === action.payload.app.id);
            let changedApp = state.apps[changedAppIndex];
            if (action.payload.eventValue === changedApp.icon) {
                return state;
            }
            let newChangedApp = Object.assign({}, changedApp, {
                icon: action.payload.eventValue
            });
            let newCurrentApp = state.currentApp;
            if (newCurrentApp.id === newChangedApp.id) {
                newCurrentApp = newChangedApp;
            }
            let newState = Object.assign({}, state, {
                apps: [...state.apps.slice(0, changedAppIndex),
                    newChangedApp,
                ...state.apps.slice(changedAppIndex + 1)],
                currentApp: newCurrentApp
            });
            return newState;
        }

        case event.DO_BACK: {
            let appAction: IWebAction = { tab: null, app: action.payload, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case event.DO_BACK_COMPLETE: {
            let appAction: IWebAction = { tab: null, app: action.payload, isCalling: false };
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case event.DO_NEXT: {
            let appAction: IWebAction = { tab: null, app: action.payload, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingNext: appAction
            });
        }

        case event.DO_NEXT_COMPLETE: {
            let appAction: IWebAction = { tab: null, app: action.payload, isCalling: false };
            return Object.assign({}, state, {
                isNavigatingNext: appAction
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

export const getIsNavigatingBack = (state: State) => state.isNavigatingBack;

export const getIsNavigatingNext = (state: State) => state.isNavigatingNext;
