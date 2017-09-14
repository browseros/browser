import { IWebAction } from './../models/web-action.model';
import { IApp } from '../models/app.model';
import * as event from '../actions/event.actions';
import * as app from '../actions/app.actions';
import { ITab } from '../models/tab.model';

export interface State {
    apps: IApp[];
    tabs: ITab[];
    currentApp: IApp;
    currentTab: ITab;
    isGoingtoApp: boolean;
    isAddingApp: boolean;
    isAddingTab: boolean;
    isClosingApp: boolean;
    isNavigatingNext: IWebAction;
    isNavigatingBack: IWebAction;
}

export const initialState: State = {
    apps: [],
    tabs: [],
    currentApp: null,
    currentTab: null,
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
                let newTabId = state.tabs.length === 0 ? 1 : (Math.max(...state.tabs.map(a => a.id)) + 1);
                tab.id = newTabId;
                tab.appId = newAppId;
                let newApp: IApp = {
                    id: newAppId, currentTabId: newTabId,
                    url: tab.url, hostName: tab.hostName, icon: '', title: tab.title
                };
                return Object.assign({}, state, {
                    apps: [...state.apps, newApp],
                    tabs: [...state.tabs, tab],
                    currentApp: newApp,
                    currentTab: tab,
                    isAddingApp: true,
                    isGoingtoApp: true
                });
            }
            let stateAppToAdd = state.apps[appId];
            let newTabId = state.tabs.length === 0
                ? 1
                : (Math.max(...state.tabs.map(a => a.id)) + 1);
            tab.id = newTabId;
            tab.appId = stateAppToAdd.id;

            return Object.assign({}, state, {
                tabs: [...state.tabs, tab],
                currentApp: stateAppToAdd,
                currentTab: tab,
                isAddingTab: false
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
            let currentTab = state.tabs.find(t => t.id === newCurrentApp.currentTabId);
            return Object.assign({}, state, {
                currentApp: newCurrentApp,
                currentTab,
                isGoingtoApp: true
            });
        }

        case event.GOTO_TAB: {
            let changedAppIndex = state.apps.findIndex(a => a.id === action.payload.appId);
            let changedApp = state.apps[changedAppIndex];
            let newChangedApp = Object.assign({}, changedApp, {
               currentTabId: action.payload.id
            });
            return Object.assign({}, state, {
                apps: [...state.apps.slice(0, changedAppIndex), newChangedApp,
                    ...state.apps.slice(changedAppIndex + 1)],
                currentTab: action.payload
            });
        }

        case event.CLOSE_TAB: {
            let currentAppIndex = state.apps.findIndex(a => a.id === state.currentApp.id);
            let newTabs = state.tabs.filter(a => a.id !== action.payload.id);
            let appTabs = state.tabs.filter(a => a.appId === action.payload.appId);
            let newCurrentTab = state.currentTab;
            if (newCurrentTab.id === action.payload.id) {
                let tabId = appTabs.findIndex(a => a.id === newCurrentTab.id);

                if (tabId === appTabs.length - 1) {
                    tabId--;
                }
                if (tabId >= 0) {
                    newCurrentTab = appTabs[tabId];
                }
            }
            return Object.assign({}, state, {
                currentTab: newCurrentTab,
                tabs: newTabs
            });
        }

        case event.CHANGE_TAB_TITLE: {
            let changedTabIndex = state.tabs.findIndex(t => t.id === action.payload.tab.id);
            let changedTab = state.tabs[changedTabIndex];
            if (action.payload.eventValue === changedTab.title) {
                return state;
            }
            let newChangedTab = Object.assign({}, changedTab, {
                title: action.payload.eventValue
            });
            let newState = Object.assign({}, state, {
                tabs: [...state.tabs.slice(0, changedTabIndex),
                    newChangedTab,
                ...state.tabs.slice(changedTabIndex + 1)]
            });
            return newState;
        }

        case event.CHANGE_TAB_URL: {
            let changedTabIndex = state.tabs.findIndex(t => t.id === action.payload.tab.id);
            let changedTab = state.tabs[changedTabIndex];
            if (action.payload.eventValue === changedTab.title) {
                return state;
            }
            let newChangedTab = Object.assign({}, changedTab, {
                url: action.payload.eventValue
            });
            let currentTab = state.currentTab;
            if (currentTab.id === newChangedTab.id) {
                currentTab = newChangedTab;
            }
            let newState = Object.assign({}, state, {
                tabs: [...state.tabs.slice(0, changedTabIndex),
                    newChangedTab,
                ...state.tabs.slice(changedTabIndex + 1)],
                currentTab
            });
            return newState;
        }

        case event.CHANGE_TAB_ICON: {
            let changedAppIndex = state.apps.findIndex(t => t.id === action.payload.tab.appId);
            let changedApp = state.apps[changedAppIndex];
            if (action.payload.eventValue === changedApp.title) {
                return state;
            }
            let newChangedApp = Object.assign({}, changedApp, {
                icon: action.payload.eventValue
            });
            let newState = Object.assign({}, state, {
                apps: [...state.apps.slice(0, changedAppIndex),
                    newChangedApp,
                ...state.apps.slice(changedAppIndex + 1)]
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

export const getTabs = (state: State) => state.tabs;

export const getCurrentApp = (state: State) => state.currentApp;

export const getCurrentTab = (state: State) => state.currentTab;

export const getIsNavigatingBack = (state: State) => state.isNavigatingBack;

export const getIsNavigatingNext = (state: State) => state.isNavigatingNext;
