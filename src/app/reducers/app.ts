import { IApp } from '../models/app.model';
import * as app from '../actions/app.actions';
import * as event from '../actions/event.actions';
import { ITab } from '../models/tab.model';

export interface State {
    apps: IApp[];
    isGoingtoApp: boolean;
    isAddingApp: boolean;
    isAddingTab: boolean;
    isClosingApp: boolean;
}

export const initialState: State = {
    apps: [],
    isGoingtoApp: false,
    isAddingApp: false,
    isAddingTab: false,
    isClosingApp: false
};
// TODO: 1 - tabs reload after add/remove tab; link changed not saved because of reload (effect of 1)
export function reducer(state = initialState, action: app.Actions | event.Actions): State {
    switch (action.type) {
        case app.ADD_APP: {
            let newApp = action.payload as IApp;
            let newAppId = state.apps.length === 0 ? 1 : (Math.max(...state.apps.map(a => a.id)) + 1);
            newApp.id = newAppId;
            newApp.tabs = [];
            let newTab: ITab = { id: 1, appId: newAppId, hostName: newApp.hostName, title: newApp.title,
                url: newApp.url };
            newApp.tabs.push(newTab);
            newApp.currentTab = newTab;
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
            let tab = JSON.parse(JSON.stringify(action.payload));
            let appId = state.apps.findIndex(item => item.hostName === tab.hostName);
            if (appId < 0) {
                let newAppId = state.apps.length === 0 ? 1 : (Math.max(...state.apps.map(a => a.id)) + 1);
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
            });

            return Object.assign({}, state, {
                apps: [...state.apps.slice(0, appId), appToAdd, ...state.apps.slice(appId + 1)]
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
            let app = action.payload;
            let newApps = state.apps.filter(a => a.id !== app.id);
            return Object.assign({}, state, {
                apps: newApps,
                isClosingApp: true
            });
        }

        case event.CLOSE_TAB: {
            let currentApp = state.apps.find(a => a.id === action.payload.appId);
            let newCurrentApp = Object.assign({}, currentApp);
            let currentAppIndex = state.apps.findIndex(a => a.id === currentApp.id);
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
