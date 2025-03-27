import { IWebAction } from './../models/web-action.model';
import { IApp } from '../models/app.model';
import * as app from '../actions/app.actions';
import { ITab } from '../models/tab.model';
import { StateHelper } from './helper';
import { IHistoryItem } from '../models/history-item.model';

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
    topApps: IHistoryItem[];
    suggestions: any[];
}

export const initialState: State = {
    apps: [],
    currentTabs: {},
    host2Apps: {},
    app2Hosts: {},
    tabs: [],
    tabIds: [],
    currentApp: null,
    currentTab: null,
    isGoingtoApp: false,
    isAddingApp: false,
    isAddingTab: false,
    isClosingApp: false,
    isNavigatingNext: null,
    isNavigatingBack: null,
    isNavigatingReload: null,
    isChangingUrl: null,
    histories: [],
    historyWithWeights: [],
    topApps: [],
    suggestions: null
};

export function reducer(state = initialState, action: app.Actions): State {
    switch (action.type) {

        case app.ADD_TAB: {
            let tab = JSON.parse(JSON.stringify(action.payload)) as ITab;
            let appId = state.host2Apps[tab.hostName];
            if (!appId || appId <= 0) {
                return StateHelper.changeStateByCreateNewTabAndNewApp(tab, state);
            }
            return StateHelper.changeStateByCreateNewTabForOldApp(appId, tab, state);
        }

        case app.CLOSE_APP: {
            return StateHelper.changeStateByCloseApp(action.payload, state);
        }

        case app.GOTO_APP: {
            return StateHelper.changeStateByGotoApp(action.payload.id, state);
        }

        case app.GOTO_TAB: {
            return StateHelper.changeStateByGotoTab(state, action.payload);
        }

        case app.CLOSE_TAB: {
            return StateHelper.changeStateByCloseTab(action.payload.id, action.payload.appId, state);
        }

        case app.CLOSE_OTHER_APPS: {
            return StateHelper.changeStateByCloseOtherApps(action.payload.id, state);
        }

        case app.CLOSE_OTHER_TABS: {
            return StateHelper.changeStateByCloseOtherTabs(action.payload.id, action.payload.appId, state);
        }

        case app.CLOSE_OTHER_TABS_ALL_APPS: {
            return StateHelper.changeStateByCloseOtherTabsAllApps(action.payload.id, state);
        }

        case app.CHANGE_TAB_TITLE: {
            return StateHelper.changeStateByChangeTabTitle(action.payload.tabId, action.payload.eventValue, state);
        }

        case app.CHANGE_TAB_URL: {
            return StateHelper.changeStateByChangeTabUrl(state, action.payload.tabId, action.payload.eventValue);
        }

        case app.CHANGE_TAB_ICON: {
            return StateHelper.changeStateByChangeTabIcon(action.payload.tabId, action.payload.eventValue, state);
        }

        case app.CHANGE_TAB_URL_FORCE: {
            return StateHelper.changeStateByForceChangeTabUrl(state, action.payload.tabId, action.payload.eventValue);
        }

        case app.CHANGE_TAB_URL_FORCE_COMPLETE: {
            let appAction: IWebAction = {
                tab: state.currentTab,
                app: state.currentApp,
                isCalling: false, value: action.payload.eventValue
            };
            return Object.assign({}, state, {
                isChangingUrl: appAction
            });
        }

        case app.DO_BACK: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case app.DO_BACK_COMPLETE: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: false };
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case app.DO_NEXT: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingNext: appAction
            });
        }

        case app.DO_NEXT_COMPLETE: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: false };
            return Object.assign({}, state, {
                isNavigatingNext: appAction
            });
        }

        case app.DO_RELOAD: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingReload: appAction
            });
        }

        case app.DO_RELOAD_COMPLETE: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: false };
            return Object.assign({}, state, {
                isNavigatingReload: appAction
            });
        }

        case app.CLEAR_SUGGESTIONS: {
            return Object.assign({}, state, {
                suggestions: null
            });
        }

        case app.GET_SUGGESTIONS_COMPLETE: {
            return Object.assign({}, state, {
                suggestions: action.payload
            });
        }

        case app.DOM_READY: {
            let tab = state.tabs.find(t => t.id === action.payload.tabId);
            if (tab === null) {
                return state;
            }
            let app = state.apps.find(a => a.id === tab.appId);
            if (app === null) {
                return state;
            }
            let historyItem: IHistoryItem = {
                link: tab.url,
                date: new Date(),
                host: tab.hostName,
                title: tab.title,
                weight: 0,
                icon: app.icon
            };
            let newHistories = [...state.histories, historyItem];

            let newHistoryWithWeighs = state.historyWithWeights;
            let historyWithWeightItemIndex = state.historyWithWeights.findIndex(h =>
                h.link.toLocaleLowerCase() === historyItem.link.toLocaleLowerCase());
            if (historyWithWeightItemIndex < 0) {
                let historyWithWeightItem = Object.assign({}, historyItem, {
                    weight: 1
                });
                newHistoryWithWeighs = [...newHistoryWithWeighs, historyWithWeightItem];
            } else {
                let historyWithWeightItem = newHistoryWithWeighs[historyWithWeightItemIndex];
                let newHistoryWithWeightItem = Object.assign({}, historyWithWeightItem, {
                    weight: historyWithWeightItem.weight + 1
                });
                newHistoryWithWeighs = [...newHistoryWithWeighs.slice(0, historyWithWeightItemIndex)
                    , newHistoryWithWeightItem
                    , ...newHistoryWithWeighs.slice(historyWithWeightItemIndex + 1)];
            }

            let newTopApps = state.topApps;
            let appIndex = state.topApps.findIndex(ta => ta.host.toLowerCase() === tab.hostName);
            if (appIndex < 0) {
                let appItem = Object.assign({}, historyItem, {
                    weight: 1
                });
                newTopApps = [...newTopApps, appItem];
            } else {
                let appItem = newTopApps[appIndex];
                let newAppItem = Object.assign({}, appItem, {
                    weight: appItem.weight + 1
                });
                newTopApps = [...newTopApps.slice(0, appIndex)
                    , newAppItem
                    , ...newTopApps.slice(appIndex + 1)];
            }

            newHistoryWithWeighs = newHistoryWithWeighs.sort((item1, item2) => {
                return item1.weight > item2.weight
                    ? -1
                    : item1.weight < item2.weight
                        ? 1
                        : 0;
            });

            newTopApps = newTopApps.sort((item1, item2) => {
                return item1.weight > item2.weight
                    ? -1
                    : item1.weight < item2.weight
                        ? 1
                        : 0;
            });

            return Object.assign({}, state, {
                histories: newHistories,
                historyWithWeights: newHistoryWithWeighs,
                topApps: newTopApps
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

export const getIsNavigatingReload = (state: State) => state.isNavigatingReload;

export const getIsChangingUrl = (state: State) => state.isChangingUrl;

export const getTabIds = (state: State) => state.tabIds;

export const getApp2Hosts = (state: State) => state.app2Hosts;

export const getHistories = (state: State) => state.histories;

export const getHistoryWithWeights = (state: State) => state.historyWithWeights;

export const getTopApps = (state: State) => state.topApps;

export const getSuggestions = (state: State) => state.suggestions;
