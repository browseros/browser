import { IWebAction } from './../models/web-action.model';
import { IApp } from '../models/app.model';
import * as event from '../actions/event.actions';
import * as app from '../actions/app.actions';
import { ITab } from '../models/tab.model';
import { Helper } from './helper';

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
    isChangingUrl: IWebAction;
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
    isChangingUrl: null
};

export function reducer(state = initialState, action: event.Actions | app.Actions): State {
    switch (action.type) {

        case app.ADD_TAB: {
            let tab = JSON.parse(JSON.stringify(action.payload)) as ITab;
            let appId = state.host2Apps[tab.hostName];
            if (!appId || appId <= 0) {
                return Helper.CreateNewTabAndNewApp(tab, state);
            }
            return Helper.CreateNewTabForOldApp(appId, tab, state);
        }

        case app.CLOSE_APP: {
            return Helper.CloseApp(action.payload, state);
        }

        case app.GOTO_APP: {
            return Helper.GotoApp(action.payload.id, state);
        }

        case event.GOTO_TAB: {
            let newCurrentTabs = Object.assign({}, state.currentTabs, {
                [action.payload.appId]: action.payload.id
            });
            return Object.assign({}, state, {
                currentTabs: newCurrentTabs,
                currentTab: action.payload
            });
        }

        case event.CLOSE_TAB: {
            return Helper.CloseTab(action.payload.id, action.payload.appId, state);
        }

        case event.CHANGE_TAB_TITLE: {
            return Helper.ChangeTabTitle(action.payload.tabId, action.payload.eventValue, state);
        }

        case event.CHANGE_TAB_URL: {
            let changedTabIndex = state.tabs.findIndex(t => t.id === action.payload.tabId);
            if (changedTabIndex < 0) {
                return state;
            }
            let changedTab = state.tabs[changedTabIndex];
            if (action.payload.eventValue === changedTab.url) {
                return state;
            }
            let newHostName = Helper.extractHostname(action.payload.eventValue);
            let newChangedTab = Object.assign({}, changedTab, {
                url: action.payload.eventValue,
                hostName: newHostName
            });
            let changedAppIndex = state.apps.findIndex(a => a.id === changedTab.appId);
            let changedApp = state.apps[changedAppIndex];
            if (!changedApp) {
                return state;
            }
            let oldHostName = state.app2Hosts[changedApp.id];
            let newHost2Apps = state.host2Apps;
            let newApp2Hosts = state.app2Hosts;
            let newApps = state.apps;
            let newCurrentApp = state.currentApp;
            let newCurrentTabs = Object.assign({}, state.currentTabs);
            if (newHostName !== oldHostName) {
                newHost2Apps = Object.assign({}, state.host2Apps);
                newApp2Hosts = Object.assign({}, state.app2Hosts);
                let appIdOfNewHostName = state.host2Apps[newHostName];
                if (appIdOfNewHostName && appIdOfNewHostName > 0) {
                    newChangedTab.appId = appIdOfNewHostName;
                    newCurrentApp = state.apps.find(a => a.id === appIdOfNewHostName);

                    let countTabsOfOldHostName = state.tabs.filter(t => t.appId === changedApp.id).length;
                    if (countTabsOfOldHostName <= 1) {
                        newHost2Apps[oldHostName] = null;
                        newApp2Hosts[changedApp.id] = null;
                        newApps = newApps.filter(a => a.id !== changedApp.id);
                    }
                } else {
                    let countTabsOfChangedApp = state.tabs.filter(t => t.appId === changedApp.id).length;
                    if (countTabsOfChangedApp > 1) {
                        debugger;
                        // new app
                        let maxId = Math.max(...state.apps.map(a => a.id)) + 1;
                        let newAppId = state.apps.length === 0 ? 1 : maxId;
                        let newApp: IApp = {
                            id: newAppId,
                            url: changedTab.url, icon: '',
                            title: newHostName
                        };
                        newApps = [...newApps, newApp];
                        newCurrentApp = newApp;
                        newChangedTab.appId = newAppId;
                        newHost2Apps[newHostName] = newAppId;
                        newApp2Hosts[newAppId] = newHostName;
                        newCurrentTabs[newAppId] = newChangedTab.id;
                        let oldCurrentTab = state.tabs.find(t => t.appId === changedApp.id
                            && t.id !== newChangedTab.id);
                        newCurrentTabs[changedApp.id] = oldCurrentTab.id;
                    } else {
                        newHost2Apps[newHostName] = changedApp.id;
                        newApp2Hosts[changedApp.id] = newHostName;
                    }
                }
            }
            let currentTab = state.currentTab;
            if (currentTab.id === newChangedTab.id) {
                currentTab = newChangedTab;
            }
            let newState = Object.assign({}, state, {
                apps: newApps,
                tabs: [...state.tabs.slice(0, changedTabIndex),
                    newChangedTab,
                ...state.tabs.slice(changedTabIndex + 1)],
                app2Hosts: newApp2Hosts,
                host2Apps: newHost2Apps,
                currentTab,
                currentApp: newCurrentApp,
                currentTabs: newCurrentTabs
            });
            return newState;
        }

        case event.CHANGE_TAB_ICON: {
            return Helper.ChangeTabTitle(action.payload.tabId, action.payload.eventValue, state);
        }

        case event.CHANGE_TAB_URL_FORCE: {
            let changedFromTab = state.tabs.find(a => a.id === action.payload.tabId);
            if (!changedFromTab) {
                return state;
            }
            let appAction: IWebAction = {
                tab: state.currentTab,
                app: state.currentApp,
                isCalling: true, value: action.payload.eventValue
            };
            let currentHost = state.app2Hosts[state.currentApp.id];
            let hostNameChanged = Helper.extractHostname(action.payload.eventValue);
            if (currentHost !== hostNameChanged) {
                let appId = state.host2Apps[hostNameChanged];
                if (appId && appId > 0) {
                    let changedApp = state.apps.find(a => a.id === appId);
                    let newCurrentTabs = Object.assign({}, state.currentTabs, {
                        [changedApp.id]: state.currentTab.id
                    });
                    let newChangedTab = Object.assign({}, state.currentTab, {
                        appId: changedApp.id,
                        title: hostNameChanged,
                        url: action.payload.eventValue,
                        hostName: hostNameChanged
                    });
                    let changedTabIndex = state.tabs.findIndex(a => a.id === state.currentTab.id);
                    let newApps = state.apps;
                    let newTabs = Helper.ModifyTab(state.tabs, newChangedTab, changedTabIndex);
                    let newApp2Hosts = state.app2Hosts;
                    let newHost2Apps = state.host2Apps;
                    let countTabsOfOldApp = newTabs.filter(a => a.appId === state.currentApp.id).length;
                    if (countTabsOfOldApp === 0) {
                        newApps = Helper.RemoveApp(newApps, state.currentApp.id);
                        newApp2Hosts = Object.assign({}, newApp2Hosts, {
                            [state.currentApp.id]: null
                        });
                        newHost2Apps = Object.assign({}, newHost2Apps, {
                            [currentHost]: null
                        });
                    } else {
                        let newCurrentTabForOldApps = newTabs.filter(a => a.appId === state.currentApp.id);
                        let newCurrentTabForOld = newCurrentTabForOldApps[0];

                        newCurrentTabs[state.currentApp.id] = newCurrentTabForOld.id;
                    }
                    return Object.assign({}, state, {
                        apps: newApps,
                        app2Hosts: newApp2Hosts,
                        host2Apps: newHost2Apps,
                        currentTabs: newCurrentTabs,
                        currentTab: newChangedTab,
                        currentApp: changedApp,
                        tabs: newTabs,
                        isChangingUrl: appAction
                    });
                } else {
                    let tab = state.currentTab;
                    let newAppId = Helper.GetNewAppId(state.apps);
                    let newApp: IApp = Helper.CreateApp(newAppId, tab.url, '', hostNameChanged);
                    let newChangedTab = Object.assign({}, state.currentTab, {
                        appId: newApp.id,
                        url: action.payload.eventValue,
                        hostName: hostNameChanged
                    });
                    let newCurrentTabs = Object.assign({}, state.currentTabs, {
                        [newAppId]: newChangedTab.id
                    });
                    let changedTabIndex = state.tabs.findIndex(a => a.id === state.currentTab.id);
                    let newApps = Helper.AddNewApp(state.apps, newApp);
                    let newTabs = Helper.ModifyTab(state.tabs, newChangedTab, changedTabIndex);
                    let newApp2Hosts = state.app2Hosts;
                    let newHost2Apps = state.host2Apps;
                    let countTabsOfOldApp = newTabs.filter(a => a.appId === state.currentApp.id).length;
                    if (countTabsOfOldApp === 0) {
                        newApps = Helper.RemoveApp(newApps, state.currentApp.id);
                        newApp2Hosts = Object.assign({}, newApp2Hosts, {
                            [state.currentApp.id]: null
                        });
                        newHost2Apps = Object.assign({}, newHost2Apps, {
                            [currentHost]: null
                        });
                    } else {
                        let newCurrentTabForOldApps = newTabs.filter(a => a.appId === state.currentApp.id);
                        let newCurrentTabForOld = newCurrentTabForOldApps[0];
                        newCurrentTabs[state.currentApp.id] = newCurrentTabForOld.id;
                    }
                    return Object.assign({}, state, {
                        apps: newApps,
                        app2Hosts: newApp2Hosts,
                        host2Apps: newHost2Apps,
                        currentTabs: newCurrentTabs,
                        currentTab: newChangedTab,
                        currentApp: newApp,
                        tabs: newTabs,
                        isChangingUrl: appAction
                    });
                }
            }
            return Object.assign({}, state, {
                isChangingUrl: appAction
            });
        }

        case event.CHANGE_TAB_URL_FORCE_COMPLETE: {
            let appAction: IWebAction = {
                tab: state.currentTab,
                app: state.currentApp,
                isCalling: false, value: action.payload.eventValue
            };
            return Object.assign({}, state, {
                isChangingUrl: appAction
            });
        }

        case event.DO_BACK: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case event.DO_BACK_COMPLETE: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: false };
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case event.DO_NEXT: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingNext: appAction
            });
        }

        case event.DO_NEXT_COMPLETE: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: false };
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

export const getIsChangingUrl = (state: State) => state.isChangingUrl;

export const getTabIds = (state: State) => state.tabIds;

export const getApp2Hosts = (state: State) => state.app2Hosts;
