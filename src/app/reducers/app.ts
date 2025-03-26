import { Action } from '@ngrx/store';
import * as appActions from '../actions/app.actions';
import type { IApp } from '../models/app.model';
import type { ITab } from '../models/tab.model';
import type { IWebAction } from '../models/web-action.model';
import { StateHelper } from './helper';
import type { IHistoryItem } from '../models/history-item.model';

export interface State {
    apps: IApp[];
    currentTabs: { [id: number]: number };
    host2Apps: { [host: string]: number };
    app2Hosts: { [id: number]: string };
    tabs: ITab[];
    tabIds: number[];
    currentApp: IApp;
    currentTab: ITab;
    isGoingtoApp: boolean;
    isAddingApp: boolean;
    isAddingTab: boolean;
    isClosingApp: boolean;
    isNavigatingNext: IWebAction;
    isNavigatingBack: IWebAction;
    isNavigatingReload: IWebAction;
    isChangingUrl: IWebAction;
    histories: IHistoryItem[];
    historyWithWeights: IHistoryItem[];
    topApps: IApp[];
    suggestions: any[];
}

const initialState: State = {
    apps: [],
    currentTabs: {},
    host2Apps: {},
    app2Hosts: {},
    tabs: [],
    tabIds: [],
    currentApp: {} as IApp,
    currentTab: {} as ITab,
    isGoingtoApp: false,
    isAddingApp: false,
    isAddingTab: false,
    isClosingApp: false,
    isNavigatingNext: {} as IWebAction,
    isNavigatingBack: {} as IWebAction,
    isNavigatingReload: {} as IWebAction,
    isChangingUrl: {} as IWebAction,
    histories: [],
    historyWithWeights: [],
    topApps: [],
    suggestions: []
};

export function reducer(state: State = initialState, action: appActions.Actions): State {
    switch (action.type) {
        case appActions.ADD_TAB: {
            let tab = JSON.parse(JSON.stringify(action.payload)) as ITab;
            let appId = state.host2Apps[tab.hostName];
            if (!appId || appId <= 0) {
                return StateHelper.changeStateByCreateNewTabAndNewApp(tab, state);
            }
            return StateHelper.changeStateByCreateNewTabForOldApp(appId, tab, state);
        }

        case appActions.CLOSE_APP: {
            return StateHelper.changeStateByCloseApp(action.payload, state);
        }

        case appActions.GOTO_APP: {
            return StateHelper.changeStateByGotoApp(action.payload.id, state);
        }

        case appActions.GOTO_TAB: {
            return StateHelper.changeStateByGotoTab(state, action.payload);
        }

        case appActions.CLOSE_TAB: {
            return StateHelper.changeStateByCloseTab(action.payload.id, action.payload.appId, state);
        }

        case appActions.CLOSE_OTHER_APPS: {
            return StateHelper.changeStateByCloseOtherApps(action.payload.id, state);
        }

        case appActions.CLOSE_OTHER_TABS: {
            return StateHelper.changeStateByCloseOtherTabs(action.payload.id, action.payload.appId, state);
        }

        case appActions.CLOSE_OTHER_TABS_ALL_APPS: {
            return StateHelper.changeStateByCloseOtherTabsAllApps(action.payload.id, state);
        }

        case appActions.CHANGE_TAB_TITLE: {
            return StateHelper.changeStateByChangeTabTitle(action.payload.tabId, action.payload.eventValue, state);
        }

        case appActions.CHANGE_TAB_URL: {
            return StateHelper.changeStateByChangeTabUrl(state, action.payload.tabId, action.payload.eventValue);
        }

        case appActions.CHANGE_TAB_ICON: {
            return StateHelper.changeStateByChangeTabIcon(action.payload.tabId, action.payload.eventValue, state);
        }

        case appActions.CHANGE_TAB_URL_FORCE: {
            return StateHelper.changeStateByForceChangeTabUrl(state, action.payload.tabId, action.payload.eventValue);
        }

        case appActions.CHANGE_TAB_URL_FORCE_COMPLETE: {
            let appAction: IWebAction = {
                tab: state.currentTab,
                app: state.currentApp,
                isCalling: false, value: action.payload.eventValue
            };
            return Object.assign({}, state, {
                isChangingUrl: appAction
            });
        }

        case appActions.DO_BACK: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case appActions.DO_BACK_COMPLETE: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: false };
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case appActions.DO_NEXT: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingNext: appAction
            });
        }

        case appActions.DO_NEXT_COMPLETE: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: false };
            return Object.assign({}, state, {
                isNavigatingNext: appAction
            });
        }

        case appActions.DO_RELOAD: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingReload: appAction
            });
        }

        case appActions.DO_RELOAD_COMPLETE: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: false };
            return Object.assign({}, state, {
                isNavigatingReload: appAction
            });
        }

        case appActions.CLEAR_SUGGESTIONS: {
            return Object.assign({}, state, {
                suggestions: null
            });
        }

        case appActions.GET_SUGGESTIONS_COMPLETE: {
            return {
                ...state,
                suggestions: action.payload
            };
        }

        case appActions.DOM_READY: {
            let tab = state.tabs.find(t => t.id === action.payload.tabId);
            if (!tab) {
                return state;
            }
            let app = state.apps.find(a => a.id === tab.appId);
            if (!app) {
                return state;
            }
            let historyItem: IHistoryItem = {
                id: tab.id,
                title: tab.title,
                link: tab.url,
                hostName: tab.hostName,
                icon: tab.icon,
                weight: 1
            };
            let newHistoryWithWeighs = [...state.histories];
            let existingHistoryIndex = newHistoryWithWeighs.findIndex(h => h.hostName.toLowerCase() === tab.hostName.toLowerCase());
            if (existingHistoryIndex >= 0) {
                newHistoryWithWeighs[existingHistoryIndex].weight += 1;
            } else {
                newHistoryWithWeighs.push(historyItem);
            }
            newHistoryWithWeighs.sort((a, b) => b.weight - a.weight);
            let newTopApps = [...state.topApps];
            let appIndex = newTopApps.findIndex(ta => ta.hostName.toLowerCase() === tab.hostName.toLowerCase());
            if (appIndex >= 0) {
                const existingApp = newTopApps[appIndex];
                if (existingApp) {
                    existingApp.weight = (existingApp.weight || 0) + 1;
                }
            } else {
                newTopApps.push({ ...app, weight: 1 });
            }
            newTopApps.sort((a, b) => (b.weight || 0) - (a.weight || 0));
            return {
                ...state,
                histories: newHistoryWithWeighs,
                topApps: newTopApps
            };
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

export const getIsNavigatingReload = (state: State) => state.isNavigatingReload;

export const getIsChangingUrl = (state: State) => state.isChangingUrl;

export const getTabIds = (state: State) => state.tabIds;

export const getApp2Hosts = (state: State) => state.app2Hosts;

export const getHistories = (state: State) => state.histories;

export const getHistoryWithWeights = (state: State) => state.historyWithWeights;

export const getTopApps = (state: State) => state.topApps;

export const getSuggestions = (state: State) => state.suggestions;
