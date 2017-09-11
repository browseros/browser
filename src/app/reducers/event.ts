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
            const tab = action.payload as ITab;
            let appId = state.apps.findIndex(item => item.hostName === tab.hostName);
            if (appId < 0) {
                let newApp: IApp = {
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

        case app.GOTO_APP: {
            let newCurrentApp = state.apps.find(a => a.hostName === action.payload.hostName);
            return Object.assign({}, state, {
                currentApp: newCurrentApp,
                isGoingtoApp: true
            });
        }

        case event.CHANGE_TAB_TITLE: {
            let changedAppIndex = state.apps.findIndex(a => a.hostName === action.payload.app.hostName);
            let changedApp = state.apps[changedAppIndex];
            let changedTabIndex = changedApp.tabs.findIndex(t => t.url === action.payload.tab.url);
            let changedTab = changedApp.tabs[changedTabIndex];
            if (action.payload.eventValue === changedTab.title) {
                return state;
            }
            let newChangedTab = Object.assign({}, changedTab, {
                title: action.payload.eventValue
            });
            let newCurrentTab = changedApp.currentTab;
            if (newCurrentTab.url === newChangedTab.url) {
                newCurrentTab = newChangedTab;
            }
            let newChangedApp = Object.assign({}, changedApp, {
                tabs: [...changedApp.tabs.slice(0, changedTabIndex),
                    newChangedTab,
                ...changedApp.tabs.slice(changedTabIndex + 1)],
                currentTab: newCurrentTab
            });
            let newCurrentApp = state.currentApp;
            if (newCurrentApp.hostName === newChangedApp.hostName) {
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
            let appAction: IWebAction = {tab: null, app: action.payload, isCalling: true};
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case event.DO_BACK_COMPLETE: {
            let appAction: IWebAction = {tab: null, app: action.payload, isCalling: false};
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case event.DO_NEXT: {
            let appAction: IWebAction = {tab: null, app: action.payload, isCalling: true};
            return Object.assign({}, state, {
                isNavigatingNext: appAction
            });
        }

        case event.DO_NEXT_COMPLETE: {
            let appAction: IWebAction = {tab: null, app: action.payload, isCalling: false};
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
