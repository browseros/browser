import { IWebAction } from './../models/web-action.model';
import { IApp } from '../models/app.model';
import * as event from '../actions/event.actions';
import * as app from '../actions/app.actions';
import { ITab } from '../models/tab.model';

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

function extractHostname(url: string): string {
    let hostname;

    if (url.indexOf('://') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];

    return hostname;
  }

export function reducer(state = initialState, action: event.Actions | app.Actions): State {
    switch (action.type) {

        case app.ADD_TAB: {
            let tab = JSON.parse(JSON.stringify(action.payload)) as ITab;
            let appId = state.host2Apps[tab.hostName];
            if (!appId || appId <= 0) {
                let maxId = Math.max(...state.apps.map(a => a.id)) + 1;
                let newAppId = state.apps.length === 0 ? 1 : maxId;
                let newTabId = state.tabs.length === 0 ? 1 : (Math.max(...state.tabs.map(a => a.id)) + 1);
                tab.id = newTabId;
                tab.appId = newAppId;
                let newApp: IApp = {
                    id: newAppId,
                    url: tab.url, icon: '', title: tab.title
                };
                let newCurrentTabs = Object.assign({}, state.currentTabs, {
                    [newAppId]: newTabId
                });
                let newHost2Apps = Object.assign({}, state.host2Apps, {
                    [tab.hostName]: newAppId
                });
                let newApp2Hosts = Object.assign({}, state.app2Hosts, {
                    [newAppId]: tab.hostName
                });
                return Object.assign({}, state, {
                    apps: [...state.apps, newApp],
                    currentTabs: newCurrentTabs,
                    app2Hosts: newApp2Hosts,
                    host2Apps: newHost2Apps,
                    tabs: [...state.tabs, tab],
                    tabIds: [...state.tabIds, tab.id],
                    currentApp: newApp,
                    currentTab: tab,
                    isAddingApp: true,
                    isGoingtoApp: true
                });
            }
            let stateAppToAdd = state.apps.find(a => a.id === appId);
            let newTabId = state.tabs.length === 0
                ? 1
                : (Math.max(...state.tabs.map(a => a.id)) + 1);
            tab.id = newTabId;
            tab.appId = stateAppToAdd.id;
            let newCurrentTabs = Object.assign({}, state.currentTabs, {
                [stateAppToAdd.id]: newTabId
            });

            return Object.assign({}, state, {
                tabs: [...state.tabs, tab],
                tabIds: [...state.tabIds, tab.id],
                currentTabs: newCurrentTabs,
                currentApp: stateAppToAdd,
                currentTab: tab,
                isAddingTab: false
            });
        }

        case app.CLOSE_APP: {
            let app = action.payload;
            let newCurrentApp: IApp = state.currentApp;
            let newApps = state.apps.filter(a => a.id !== app.id);
            let newTabs = state.tabs.filter(a => a.appId !== app.id);
            let newTabIds = state.tabIds.filter(id => newTabs.findIndex(a => a.id === id) >= 0);
            if (state.currentApp && app.id === state.currentApp.id) {
                let appId = state.apps.findIndex(a => a.id === app.id);

                if (appId === state.apps.length - 1) {
                    appId--;
                }
                if (appId >= 0) {
                    newCurrentApp = newApps[appId];
                }
            }
            let newCurrentTabId = state.currentTabs[newCurrentApp.id];
            let currentTab = state.tabs.find(t => t.id === newCurrentTabId);
            let currentHost = state.app2Hosts[app.id];
            let newHost2Apps = Object.assign({}, state.host2Apps, {
                [currentHost]: null
            });
            let newApp2Hosts = Object.assign({}, state.app2Hosts, {
                [app.id]: null
            });
            return Object.assign({}, state, {
                apps: newApps,
                host2Apps: newHost2Apps,
                app2Hosts: newApp2Hosts,
                tabs: newTabs,
                tabIds: newTabIds,
                currentApp: newCurrentApp,
                currentTab,
                isClosingApp: true
            });
        }

        case app.GOTO_APP: {
            let currentApp = state.apps.find(a => a.id === action.payload.id);
            let newCurrentTabId = state.currentTabs[currentApp.id];
            let currentTab = state.tabs.find(t => t.id === newCurrentTabId);
            return Object.assign({}, state, {
                currentApp,
                currentTab,
                isGoingtoApp: true
            });
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
            let currentAppIndex = state.apps.findIndex(a => a.id === state.currentApp.id);
            let newTabs = state.tabs.filter(a => a.id !== action.payload.id);
            let newTabIds = state.tabIds.filter(id => newTabs.findIndex(a => a.id === id) >= 0);
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
            let newCurrentTabs = Object.assign({}, state.currentTabs, {
                [state.currentApp.id]: newCurrentTab.id
            });
            return Object.assign({}, state, {
                currentTabs: newCurrentTabs,
                currentTab: newCurrentTab,
                tabs: newTabs,
                tabIds: newTabIds
            });
        }

        case event.CHANGE_TAB_TITLE: {
            let changedTabIndex = state.tabs.findIndex(t => t.id === action.payload.tabId);
            if (changedTabIndex < 0) {
                return state;
            }
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
                ...state.tabs.slice(changedTabIndex + 1)],
            });
            return newState;
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
            let changedTab = state.tabs.find(a => a.id === action.payload.tabId);
            if (!changedTab) {
                return state;
            }
            let changedAppIndex = state.apps.findIndex(t => t.id === changedTab.appId);
            if (changedAppIndex < 0) {
                return state;
            }
            let changedApp = state.apps[changedAppIndex];
            if (action.payload.eventValue === changedApp.icon) {
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
            let hostNameChanged = extractHostname(action.payload.eventValue);
            if (currentHost !== hostNameChanged) {
                let appId = state.host2Apps[hostNameChanged];
                if (appId && appId > 0) {
                    let changedApp = state.apps.find(a => a.id === appId);
                    let newCurrentTabs = Object.assign({}, state.currentTabs, {
                        [changedApp.id]: state.currentTab.id
                    });
                    let newChangedTab = Object.assign({}, state.currentTab, {
                        appId: changedApp.id,
                        url: action.payload.eventValue,
                        hostName: hostNameChanged
                    });
                    let changedTabIndex = state.tabs.findIndex(a => a.id === state.currentTab.id);
                    let newApps = state.apps;
                    let newTabs = [...state.tabs.slice(0, changedTabIndex),
                        newChangedTab,
                    ...state.tabs.slice(changedTabIndex + 1)];
                    let newApp2Hosts = state.app2Hosts;
                    let newHost2Apps = state.host2Apps;
                    let countTabsOfOldApp = newTabs.filter(a => a.appId === state.currentApp.id).length;
                    if (countTabsOfOldApp === 0) {
                        newApps = newApps.filter(a => a.id !== state.currentApp.id);
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
                        // isChangingUrl: appAction
                    });
                } else {
                    let tab = state.currentTab;
                    let maxId = Math.max(...state.apps.map(a => a.id)) + 1;
                    let newAppId = state.apps.length === 0 ? 1 : maxId;
                    let newApp: IApp = {
                        id: newAppId,
                        url: tab.url, icon: '',
                        title: hostNameChanged
                    };
                    let newChangedTab = Object.assign({}, state.currentTab, {
                        appId: newApp.id,
                        url: action.payload.eventValue,
                        hostName: hostNameChanged
                    });
                    let newCurrentTabs = Object.assign({}, state.currentTabs, {
                        [newAppId]: newChangedTab.id
                    });
                    let changedTabIndex = state.tabs.findIndex(a => a.id === state.currentTab.id);
                    let newApps = [...state.apps, newApp];
                    let newTabs = [...state.tabs.slice(0, changedTabIndex),
                        newChangedTab,
                    ...state.tabs.slice(changedTabIndex + 1)];
                    let newApp2Hosts = state.app2Hosts;
                    let newHost2Apps = state.host2Apps;
                    let countTabsOfOldApp = newTabs.filter(a => a.appId === state.currentApp.id).length;
                    if (countTabsOfOldApp === 0) {
                        newApps = newApps.filter(a => a.id !== state.currentApp.id);
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
                        // isChangingUrl: appAction
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
