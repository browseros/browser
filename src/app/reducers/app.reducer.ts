import { IApp } from '../models/app.model';
import { ITab } from '../models/tab.model';
import { IHistoryItem } from '../models/history-item.model';
import * as app from '../actions/app.actions';
import { StateHelper } from '../utils/state.helper';

export interface State {
    apps: IApp[];
    tabs: ITab[];
    currentApp: IApp | null;
    currentTab: ITab | null;
    host2Apps: { [hostname: string]: number };
    app2Hosts: { [id: number]: string };
    currentTabs: { [appId: number]: number };
    tabIds: number[];
    isAddingApp: boolean;
    isClosingApp: boolean;
    isGoingtoApp: boolean;
    isAddingTab: boolean;
    topApps: IHistoryItem[];
    suggestions: any[];
}

const initialState: State = {
    apps: [],
    tabs: [],
    currentApp: null,
    currentTab: null,
    host2Apps: {},
    app2Hosts: {},
    currentTabs: {},
    tabIds: [],
    isAddingApp: false,
    isClosingApp: false,
    isGoingtoApp: false,
    isAddingTab: false,
    topApps: [],
    suggestions: []
};

export function reducer(state = initialState, action: app.Actions): State {
    switch (action.type) {
        case app.ADD_APP: {
            const newApp = action.payload;
            const hostname = StateHelper.extractHostname(newApp.url);
            
            // Update mappings
            const newHost2Apps = {
                ...state.host2Apps,
                [hostname]: newApp.id
            };
            const newApp2Hosts = {
                ...state.app2Hosts,
                [newApp.id]: hostname
            };

            return {
                ...state,
                apps: StateHelper.addNewApp(state.apps, newApp),
                host2Apps: newHost2Apps,
                app2Hosts: newApp2Hosts,
                currentApp: newApp,
                isAddingApp: true
            };
        }

        case app.ADD_TAB: {
            const newTab = action.payload;
            const hostname = StateHelper.extractHostname(newTab.url);

            // If this is a new app's first tab
            if (state.isAddingApp) {
                const newCurrentTabs = {
                    ...state.currentTabs,
                    [newTab.appId]: newTab.id
                };

                return {
                    ...state,
                    tabs: StateHelper.addNewTab(state.tabs, newTab),
                    tabIds: [...state.tabIds, newTab.id],
                    currentTabs: newCurrentTabs,
                    currentTab: newTab,
                    isAddingApp: false,
                    isAddingTab: true
                };
            }

            // If this is a tab for an existing app
            const existingApp = StateHelper.findAppByHostname(hostname, state.host2Apps, state.apps);
            if (existingApp) {
                const newCurrentTabs = {
                    ...state.currentTabs,
                    [existingApp.id]: newTab.id
                };

                return {
                    ...state,
                    tabs: StateHelper.addNewTab(state.tabs, newTab),
                    tabIds: [...state.tabIds, newTab.id],
                    currentTabs: newCurrentTabs,
                    currentApp: existingApp,
                    currentTab: newTab,
                    isAddingTab: true
                };
            }

            return state;
        }

        case app.GOTO_APP: {
            const app = action.payload;
            const currentTabId = state.currentTabs[app.id];
            const currentTab = state.tabs.find(t => t.id === currentTabId);

            return {
                ...state,
                currentApp: app,
                currentTab: currentTab || null,
                isGoingtoApp: true
            };
        }

        case app.CLOSE_APP: {
            const appToClose = action.payload;
            const hostname = state.app2Hosts[appToClose.id];
            
            // Remove app and its tabs
            const newApps = StateHelper.removeApp(state.apps, appToClose.id);
            const newTabs = StateHelper.removeAllTabsOfApp(appToClose.id, state.tabs);
            const newTabIds = state.tabIds.filter(id => newTabs.findIndex(t => t.id === id) >= 0);

            // Update mappings
            const newHost2Apps = { ...state.host2Apps };
            delete newHost2Apps[hostname];
            const newApp2Hosts = { ...state.app2Hosts };
            delete newApp2Hosts[appToClose.id];
            const newCurrentTabs = { ...state.currentTabs };
            delete newCurrentTabs[appToClose.id];

            // Update current app/tab
            let newCurrentApp = state.currentApp;
            let newCurrentTab = state.currentTab;
            if (state.currentApp && appToClose.id === state.currentApp.id) {
                const nextApp = StateHelper.getNextCurrentAppBeforeAppId(appToClose.id, state.apps);
                if (nextApp) {
                    newCurrentApp = nextApp;
                    const nextTabId = state.currentTabs[nextApp.id];
                    newCurrentTab = state.tabs.find(t => t.id === nextTabId) || null;
                } else {
                    newCurrentApp = null;
                    newCurrentTab = null;
                }
            }

            return {
                ...state,
                apps: newApps,
                tabs: newTabs,
                tabIds: newTabIds,
                host2Apps: newHost2Apps,
                app2Hosts: newApp2Hosts,
                currentTabs: newCurrentTabs,
                currentApp: newCurrentApp,
                currentTab: newCurrentTab,
                isClosingApp: true
            };
        }

        case app.GOTO_TAB: {
            const tab = action.payload;
            const app = state.apps.find(a => a.id === tab.appId);
            const newCurrentTabs = {
                ...state.currentTabs,
                [tab.appId]: tab.id
            };

            return {
                ...state,
                currentApp: app || null,
                currentTab: tab,
                currentTabs: newCurrentTabs
            };
        }

        case app.CLOSE_TAB: {
            const tabToClose = action.payload;
            const appId = tabToClose.appId;
            const appTabs = state.tabs.filter(t => t.appId === appId);

            // If this is the last tab of the app, close the app
            if (appTabs.length <= 1) {
                const appToClose = state.apps.find(a => a.id === appId);
                if (appToClose) {
                    return reducer(state, new app.CloseAppAction(appToClose));
                }
                return state;
            }

            // Remove the tab
            const newTabs = StateHelper.removeTab(state.tabs, tabToClose.id);
            const newTabIds = state.tabIds.filter(id => id !== tabToClose.id);

            // Update current tab if needed
            let newCurrentTab = state.currentTab;
            let newCurrentTabs = state.currentTabs;
            if (state.currentTab && tabToClose.id === state.currentTab.id) {
                const nextTab = StateHelper.getNextCurrentTabIndexBeforeTabId(appId, state.tabs, tabToClose.id);
                if (nextTab) {
                    newCurrentTab = nextTab;
                    newCurrentTabs = {
                        ...state.currentTabs,
                        [appId]: nextTab.id
                    };
                }
            }

            return {
                ...state,
                tabs: newTabs,
                tabIds: newTabIds,
                currentTab: newCurrentTab,
                currentTabs: newCurrentTabs
            };
        }

        case app.CHANGE_TAB_TITLE: {
            const event = action.payload;
            const tabToUpdate = state.tabs.find(t => t.id === event.tabId);
            if (!tabToUpdate) return state;

            const tabIndex = state.tabs.indexOf(tabToUpdate);
            const newTab = { ...tabToUpdate, title: event.eventValue };
            const newTabs = [
                ...state.tabs.slice(0, tabIndex),
                newTab,
                ...state.tabs.slice(tabIndex + 1)
            ];

            // Update app title if it's empty
            let newApps = state.apps;
            const app = state.apps.find(a => a.id === tabToUpdate.appId);
            if (app && (!app.title || app.title === '')) {
                const appIndex = state.apps.indexOf(app);
                const newApp = { ...app, title: event.eventValue };
                newApps = [
                    ...state.apps.slice(0, appIndex),
                    newApp,
                    ...state.apps.slice(appIndex + 1)
                ];
            }

            return {
                ...state,
                tabs: newTabs,
                apps: newApps,
                currentTab: state.currentTab?.id === newTab.id ? newTab : state.currentTab
            };
        }

        case app.CHANGE_TAB_ICON: {
            const event = action.payload;
            const tabToUpdate = state.tabs.find(t => t.id === event.tabId);
            if (!tabToUpdate) return state;

            const tabIndex = state.tabs.indexOf(tabToUpdate);
            const newTab = { ...tabToUpdate, icon: event.eventValue };
            const newTabs = [
                ...state.tabs.slice(0, tabIndex),
                newTab,
                ...state.tabs.slice(tabIndex + 1)
            ];

            // Update app icon
            let newApps = state.apps;
            const app = state.apps.find(a => a.id === tabToUpdate.appId);
            if (app) {
                const appIndex = state.apps.indexOf(app);
                const newApp = { ...app, icon: event.eventValue };
                newApps = [
                    ...state.apps.slice(0, appIndex),
                    newApp,
                    ...state.apps.slice(appIndex + 1)
                ];
            }

            return {
                ...state,
                tabs: newTabs,
                apps: newApps,
                currentTab: state.currentTab?.id === newTab.id ? newTab : state.currentTab
            };
        }

        case app.CHANGE_TAB_URL: {
            const event = action.payload;
            const tabToUpdate = state.tabs.find(t => t.id === event.tabId);
            if (!tabToUpdate) return state;

            const newUrl = event.eventValue;
            const newHostname = StateHelper.extractHostname(newUrl);

            // If hostname changed, we need to handle app switching
            if (newHostname !== tabToUpdate.hostName) {
                const existingApp = StateHelper.findAppByHostname(newHostname, state.host2Apps, state.apps);
                if (existingApp) {
                    // Move tab to existing app
                    const tabIndex = state.tabs.indexOf(tabToUpdate);
                    const newTab = {
                        ...tabToUpdate,
                        appId: existingApp.id,
                        url: newUrl,
                        hostName: newHostname
                    };
                    const newTabs = [
                        ...state.tabs.slice(0, tabIndex),
                        newTab,
                        ...state.tabs.slice(tabIndex + 1)
                    ];

                    const newCurrentTabs = {
                        ...state.currentTabs,
                        [existingApp.id]: newTab.id
                    };

                    return {
                        ...state,
                        tabs: newTabs,
                        currentApp: existingApp,
                        currentTab: newTab,
                        currentTabs: newCurrentTabs
                    };
                } else {
                    // Create new app and move tab to it
                    const newAppId = StateHelper.getNewAppId(state.apps);
                    const newApp = StateHelper.createApp(newAppId, newUrl);

                    const tabIndex = state.tabs.indexOf(tabToUpdate);
                    const newTab = {
                        ...tabToUpdate,
                        appId: newAppId,
                        url: newUrl,
                        hostName: newHostname
                    };
                    const newTabs = [
                        ...state.tabs.slice(0, tabIndex),
                        newTab,
                        ...state.tabs.slice(tabIndex + 1)
                    ];

                    const newHost2Apps = {
                        ...state.host2Apps,
                        [newHostname]: newAppId
                    };
                    const newApp2Hosts = {
                        ...state.app2Hosts,
                        [newAppId]: newHostname
                    };
                    const newCurrentTabs = {
                        ...state.currentTabs,
                        [newAppId]: newTab.id
                    };

                    return {
                        ...state,
                        apps: [...state.apps, newApp],
                        tabs: newTabs,
                        host2Apps: newHost2Apps,
                        app2Hosts: newApp2Hosts,
                        currentApp: newApp,
                        currentTab: newTab,
                        currentTabs: newCurrentTabs
                    };
                }
            }

            // If hostname didn't change, just update the URL
            const tabIndex = state.tabs.indexOf(tabToUpdate);
            const newTab = { ...tabToUpdate, url: newUrl };
            const newTabs = [
                ...state.tabs.slice(0, tabIndex),
                newTab,
                ...state.tabs.slice(tabIndex + 1)
            ];

            return {
                ...state,
                tabs: newTabs,
                currentTab: state.currentTab?.id === newTab.id ? newTab : state.currentTab
            };
        }

        default:
            return state;
    }
} 