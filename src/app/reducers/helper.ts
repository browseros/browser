import { IWebAction } from './../models/web-action.model';
import { IApp } from '../models/app.model';
import { ITab } from '../models/tab.model';

import * as fromApp from './app';

export class StateHelper {

    public static changeStateByCreateNewTabAndNewApp(tab: ITab, state: fromApp.State): fromApp.State {
        let newAppId = this.getNewAppId(state.apps);
        let newTabId = this.getNewTabId(state.tabs);
        tab.id = newTabId;
        tab.appId = newAppId;
        let newApp: IApp = this.createApp(newAppId, tab.url, '', tab.title);
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
            apps: this.addNewApp(state.apps, newApp),
            currentTabs: newCurrentTabs,
            app2Hosts: newApp2Hosts,
            host2Apps: newHost2Apps,
            tabs: this.addNewTab(state.tabs, tab),
            tabIds: this.addNewToArray<number>(state.tabIds, tab.id),
            currentApp: newApp,
            currentTab: tab,
            isAddingApp: true,
            isGoingtoApp: true
        });
    }

    public static changeStateByCreateNewTabForOldApp(
        appId: number,
        tab: ITab,
        state: fromApp.State): fromApp.State {
        let stateAppToAdd = state.apps.find(a => a.id === appId);
        if (!stateAppToAdd) {
            return state;
        }
        let newTabId = this.getNewTabId(state.tabs);
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

    public static changeStateByCloseApp(app: IApp, state: fromApp.State): fromApp.State {
        let newCurrentApp: IApp | null = state.currentApp;
        let newApps = this.removeApp(state.apps, app.id);
        let newTabs = this.removeALlTabsOfApp(app.id, state.tabs);
        let newTabIds = state.tabIds.filter(id => newTabs.findIndex(a => a.id === id) >= 0);
        if (state.currentApp && app.id === state.currentApp.id) {
            let nextCurrentApp = this.getNextCurrentAppBeforeAppId(app.id, state.apps);
            if (nextCurrentApp) {
                newCurrentApp = nextCurrentApp;
            } else {
                newCurrentApp = null;
            }
        }
        let newCurrentTabId = newCurrentApp ? state.currentTabs[newCurrentApp.id] : -1;
        let currentTab = state.tabs.find(t => t.id === newCurrentTabId) || null;
        let currentHost = state.app2Hosts[app.id];
        let newHost2Apps = Object.assign({}, state.host2Apps, {
            [currentHost]: 0
        });
        let newApp2Hosts = Object.assign({}, state.app2Hosts, {
            [app.id]: ''
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

    public static changeStateByGotoApp(appId: number, state: fromApp.State): fromApp.State {
        let currentApp = state.apps.find(a => a.id === appId);
        if (!currentApp) {
            return state;
        }
        let newCurrentTabId = state.currentTabs[currentApp.id];
        let currentTab = state.tabs.find(t => t.id === newCurrentTabId) || null;
        return Object.assign({}, state, {
            currentApp,
            currentTab,
            isGoingtoApp: true
        });
    }

    public static changeStateByCloseTab(tabId: number, appId: number, state: fromApp.State): fromApp.State {
        let closedTab = state.tabs.find(t => t.id === tabId);
        if (!closedTab) {
            return state;
        }
        let countTabs = state.tabs.filter(t => t.appId === closedTab.appId).length;
        if (countTabs <= 1) {
            let closingApp = state.apps.find(a => a.id === closedTab.appId);
            if (!closingApp) {
                return state;
            }
            return this.changeStateByCloseApp(closingApp, state);
        }
        let newTabs = this.removeTab(state.tabs, tabId);
        let newTabIds = state.tabIds.filter(id => newTabs.findIndex(a => a.id === id) >= 0);
        let newCurrentTab = state.currentTab;
        if (newCurrentTab && newCurrentTab.id === tabId) {
            let nextCurrentTab = this.getNextCurrentTabIndexBeforeTabId(appId,
                state.tabs,
                newCurrentTab.id);
            if (nextCurrentTab) {
                newCurrentTab = nextCurrentTab;
            }
        }
        let newCurrentTabs = Object.assign({}, state.currentTabs, {
            [state.currentApp?.id || 0]: newCurrentTab?.id || 0
        });
        return Object.assign({}, state, {
            currentTabs: newCurrentTabs,
            currentTab: newCurrentTab,
            tabs: newTabs,
            tabIds: newTabIds
        });
    }

    public static changeStateByCloseOtherApps(appId: number, state: fromApp.State): fromApp.State {
        let appsToClose = state.apps.filter(t => t.id !== appId);
        let newState = state;
        for (let app of appsToClose) {
            newState = this.changeStateByCloseApp(app, newState);
        }
        return newState;
    }

    public static changeStateByCloseOtherTabs(tabId: number, appId: number, state: fromApp.State): fromApp.State {
        let tabsToClose = state.tabs.filter(t => t.appId === appId && t.id !== tabId);
        let newState = state;
        for (let tab of tabsToClose) {
            newState = this.changeStateByCloseTab(tab.id, tab.appId, newState);
        }
        return newState;
    }

    public static changeStateByCloseOtherTabsAllApps(tabId: number, state: fromApp.State): fromApp.State {
        let tabsToClose = state.tabs.filter(t => t.id !== tabId);
        let newState = state;
        for (let tab of tabsToClose) {
            newState = this.changeStateByCloseTab(tab.id, tab.appId, newState);
        }
        return newState;
    }

    public static changeStateByChangeTabTitle(
        tabId: number, newTitle: string, state: fromApp.State): fromApp.State {
        let changedTabIndex = state.tabs.findIndex(t => t.id === tabId);
        if (changedTabIndex < 0) {
            return state;
        }
        let changedTab = state.tabs[changedTabIndex];
        if (newTitle === changedTab.title) {
            return state;
        }
        let newChangedTab = Object.assign({}, changedTab, {
            title: newTitle
        });
        let newApps = state.apps;
        let newTopApps = state.topApps;
        let appId = state.apps.findIndex(a => a.id === changedTab.appId);
        if (appId >= 0) {
            let app = state.apps[appId];
            if (!app.title || app.title === '') {
                let newApp = Object.assign({}, app, {
                    title: newTitle
                });
                newApps = this.modifyApp(newApps, newApp, appId);
                let appHistoryItemIndex = state.topApps.findIndex(ta =>
                    ta.host.toLowerCase() === changedTab.hostName.toLowerCase());
                if (appHistoryItemIndex >= 0) {
                    let appHistoryItem = newTopApps[appHistoryItemIndex];
                    let newAppHistoryItem = Object.assign({}, appHistoryItem, {
                        title: newTitle
                    });
                    newTopApps = [...newTopApps.slice(0, appHistoryItemIndex),
                        newAppHistoryItem,
                    ...newTopApps.slice(appHistoryItemIndex + 1)];
                }
            }
        }

        let newState = Object.assign({}, state, {
            tabs: this.modifyTab(state.tabs, newChangedTab, changedTabIndex),
            apps: newApps,
            topApps: newTopApps
        });
        return newState;
    }

    public static changeStateByChangeTabIcon(tabId: number, newIcon: string, state: fromApp.State): fromApp.State {
        let changedTab = state.tabs.find(a => a.id === tabId);
        if (!changedTab) {
            return state;
        }
        let changedAppIndex = state.apps.findIndex(t => t.id === changedTab.appId);
        if (changedAppIndex < 0) {
            return state;
        }
        let changedApp = state.apps[changedAppIndex];
        if (newIcon === changedApp.icon) {
            return state;
        }
        let newChangedApp = Object.assign({}, changedApp, {
            icon: newIcon
        });

        let appHistoryItemIndex = state.topApps.findIndex(ta =>
            ta.host.toLowerCase() === changedTab.hostName.toLowerCase());
        let newTopApps = state.topApps;
        if (appHistoryItemIndex >= 0) {
            let appHistoryItem = newTopApps[appHistoryItemIndex];
            let newAppHistoryItem = Object.assign({}, appHistoryItem, {
                icon: newIcon
            });
            newTopApps = [...newTopApps.slice(0, appHistoryItemIndex),
                newAppHistoryItem,
            ...newTopApps.slice(appHistoryItemIndex + 1)];
        }

        let newState = Object.assign({}, state, {
            apps: this.modifyApp(state.apps, newChangedApp, changedAppIndex),
            topApps: newTopApps
        });
        return newState;
    }

    public static changeStateByGotoTab(state: fromApp.State, tab: ITab) {
        let newCurrentTabs = Object.assign({}, state.currentTabs, {
            [tab.appId]: tab.id
        });
        return Object.assign({}, state, {
            currentTabs: newCurrentTabs,
            currentTab: tab
        });
    }

    public static changeStateByChangeModifyTabUrl(state: fromApp.State, tabId: number, url: string) {
        let oldTabIndex = state.tabs.findIndex(t => t.id === tabId);
        let oldTab = state.tabs[oldTabIndex];
        let newTab = Object.assign({}, oldTab, {
            url
        });
        return Object.assign({}, state, {
            tabs: this.modifyTab(state.tabs, newTab, oldTabIndex),
            currentTab: state.currentTab && tabId === state.currentTab.id ? newTab : state.currentTab
        });
    }

    public static changeStateByMoveTabWithNewUrlToExistApp(
        state: fromApp.State,
        tabId: number,
        url: string,
        newAppId: number,
        oldAppId: number
    ) {
        let changedTabIndex = state.tabs.findIndex(t => t.id === tabId);
        let changedTab = state.tabs[changedTabIndex];
        let newHostName = this.extractHostname(url);
        let newChangedTab = Object.assign({}, changedTab, {
            appId: newAppId,
            url,
            hostName: newHostName
        });

        let newHost2Apps = Object.assign({}, state.host2Apps);
        let newApp2Hosts = Object.assign({}, state.app2Hosts);
        let newApps = state.apps;
        let newCurrentTabs = Object.assign({}, state.currentTabs, {
            [newAppId]: tabId
        });

        let countTabsOfOldHostName = state.tabs.filter(t => t.appId === oldAppId).length;
        if (countTabsOfOldHostName <= 1) {
            let oldHostName = state.app2Hosts[oldAppId];
            newHost2Apps[oldHostName] = 0;
            newApp2Hosts[oldAppId] = '';
            newApps = newApps.filter(a => a.id !== oldAppId);
        } else {
            let nextCurrentTab = this.getNextCurrentTabIndexBeforeTabId(oldAppId,
                state.tabs,
                tabId);
            if (nextCurrentTab) {
                newCurrentTabs[oldAppId] = nextCurrentTab.id;
            }
        }
        let currentTab = state.currentTab;
        if (currentTab && currentTab.id === newChangedTab.id) {
            currentTab = newChangedTab;
        }
        let newState = Object.assign({}, state, {
            apps: newApps,
            tabs: this.modifyTab(state.tabs, newChangedTab, changedTabIndex),
            app2Hosts: newApp2Hosts,
            host2Apps: newHost2Apps,
            currentTab,
            currentApp: state.apps.find(a => a.id === newAppId) || null,
            currentTabs: newCurrentTabs
        });
        return newState;
    }

    public static changeStateByMoveTabWithNewUrlToNewlyApp(
        state: fromApp.State,
        tabId: number,
        url: string
    ) {
        let changedTabIndex = state.tabs.findIndex(t => t.id === tabId);
        let changedTab = state.tabs[changedTabIndex];

        let oldAppIndex = state.apps.findIndex(a => a.id === changedTab.appId);
        let oldApp = state.apps[oldAppIndex];
        let oldHostName = state.app2Hosts[oldApp.id];
        let newHostName = this.extractHostname(url);
        // new app
        let newAppId = this.getNewAppId(state.apps);
        let newApp: IApp = this.createApp(newAppId, changedTab.url, '', newHostName);

        let newChangedTab = Object.assign({}, changedTab, {
            appId: newAppId,
            url,
            hostName: newHostName
        });

        let newApps = this.addNewApp(state.apps, newApp);

        let newCurrentTabs = Object.assign({}, state.currentTabs);
        newCurrentTabs[newAppId] = newChangedTab.id;

        let newHost2Apps = Object.assign({}, state.host2Apps);
        let newApp2Hosts = Object.assign({}, state.app2Hosts);

        newHost2Apps[newHostName] = newAppId;
        newApp2Hosts[newAppId] = newHostName;

        let countTabsOfOldApp = state.tabs.filter(t => t.appId === oldApp.id).length;
        if (countTabsOfOldApp > 1) {
            let nextCurrentTab = this.getNextCurrentTabIndexBeforeTabId(oldApp.id, state.tabs, newChangedTab.id);
            if (nextCurrentTab) {
                newCurrentTabs[oldApp.id] = nextCurrentTab.id;
            }
        } else {
            newHost2Apps[oldHostName] = 0;
            newApp2Hosts[oldApp.id] = '';
            newApps = this.removeApp(newApps, oldApp.id);
        }
        let currentTab = state.currentTab;
        if (currentTab && currentTab.id === newChangedTab.id) {
            currentTab = newChangedTab;
        }
        let newState = Object.assign({}, state, {
            apps: newApps,
            tabs: this.modifyTab(state.tabs, newChangedTab, changedTabIndex),
            app2Hosts: newApp2Hosts,
            host2Apps: newHost2Apps,
            currentTab,
            currentApp: newApp,
            currentTabs: newCurrentTabs
        });
        return newState;
    }

    public static changeStateByChangeTabUrl(state: fromApp.State, tabId: number, url: string): fromApp.State {
        /*
        happen, redirect, did-navigate
        case: same hostname
            - modify current tab: url

        case: change to newhostname
            + app with newhostname exists
                - change tab to that app, set that tab to current
                - if no more tabs in oldhostname, remove old app
                - if old tab contains tabs, change the default tab for it
            + no app with newhostname exist
                - create new app with newhostname
                - change tab to that app, set that tab to current
                - if no more tabs in oldhostname, remove old app
                - if old tab contains tabs, change the default tab for it
        */
        let changedTabIndex = state.tabs.findIndex(t => t.id === tabId);
        if (changedTabIndex < 0) {
            return state;
        }
        let changedTab = state.tabs[changedTabIndex];
        if (url === changedTab.url) {
            return state;
        }
        let newHostName = this.extractHostname(url);
        let changedAppIndex = state.apps.findIndex(a => a.id === changedTab.appId);
        let changedApp = state.apps[changedAppIndex];
        if (!changedApp) {
            return state;
        }
        let oldHostName = state.app2Hosts[changedApp.id];

        if (newHostName === oldHostName) {
            return this.changeStateByChangeModifyTabUrl(state, tabId, url);
        }

        let appIdOfNewHostName = state.host2Apps[newHostName];
        if (appIdOfNewHostName && appIdOfNewHostName > 0) {
            return this.changeStateByMoveTabWithNewUrlToExistApp(state,
                tabId,
                url,
                appIdOfNewHostName,
                changedApp.id
            );
        }

        return this.changeStateByMoveTabWithNewUrlToNewlyApp(state, tabId, url);
    }

    public static changeStateByForceChangeTabUrl(state: fromApp.State, tabId: number, url: string): fromApp.State {
        if (!state.currentTab || !state.currentApp) {
            return state;
        }
        let appAction: IWebAction = {
            tab: state.currentTab,
            app: state.currentApp,
            isCalling: true,
            value: url
        };
        return Object.assign({}, state, {
            isChangingUrl: appAction
        });
    }

    public static prepareAppLink(app: string) {
        let appLower = app.toLowerCase().trim();
        // check is http
        let id = appLower.indexOf('http://');
        if (id === 0) {
            return appLower;
        }
        id = appLower.indexOf('https://');
        if (id === 0) {
            return appLower;
        }
        id = appLower.indexOf('ftp://');
        if (id === 0) {
            return appLower;
        }
        id = appLower.indexOf('//');
        if (id === 0) {
            return 'http:' + appLower;
        }
        return 'http://' + appLower;

    }

    public static extractHostname(url: string): string {
        let hostname;

        if (url.indexOf('://') > -1) {
            hostname = url.split('/')[2];
        } else {
            hostname = url.split('/')[0];
        }

        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];

        let wwwIndex = hostname ? hostname.indexOf('www.') : -1;
        if (wwwIndex === 0) {
            hostname = hostname.substring(4);
        }

        return hostname;
    }

    private static getNextCurrentTabIndexBeforeTabId(appId: number, tabs: ITab[], tabId: number): ITab | null {
        let appTabs = tabs.filter(a => a.appId === appId);
        let tabIdx = appTabs.findIndex(a => a.id === tabId);

        if (tabIdx === appTabs.length - 1) {
            tabIdx--;
        }
        if (tabIdx >= 0) {
            let newTabs = appTabs.filter(t => t.id !== tabId);
            return newTabs[tabIdx];
        }
        return null;
    }

    private static getNextCurrentAppBeforeAppId(appId: number, apps: IApp[]): IApp | null {
        let appIdx = apps.findIndex(a => a.id === appId);

        if (appIdx === apps.length - 1) {
            appIdx--;
        }
        if (appIdx >= 0) {
            let newApps = apps.filter(a => a.id !== appId);
            return newApps[appIdx];
        }
        return null;
    }

    private static removeApp(apps: IApp[], appId: number): IApp[] {
        return apps.filter(a => a.id !== appId);
    }

    private static modifyApp(apps: IApp[], changedApp: IApp, index: number): IApp[] {
        return [...apps.slice(0, index),
            changedApp,
        ...apps.slice(index + 1)];
    }

    private static addNewApp(apps: IApp[], app: IApp): IApp[] {
        return this.addNewToArray<IApp>(apps, app);
    }

    private static addNewTab(tabs: ITab[], tab: ITab): ITab[] {
        return this.addNewToArray<ITab>(tabs, tab);
    }

    private static modifyTab(tabs: ITab[], changedTab: ITab, index: number): ITab[] {
        return [...tabs.slice(0, index),
            changedTab,
        ...tabs.slice(index + 1)];
    }

    private static removeTab(tabs: ITab[], tabId: number): ITab[] {
        return tabs.filter(a => a.id !== tabId);
    }

    private static removeALlTabsOfApp(appId: number, tabs: ITab[]): ITab[] {
        return tabs.filter(a => a.appId !== appId);
    }

    private static addNewToArray<T>(items: T[], item: T): T[] {
        return [...items, item];
    }

    private static createApp(appId: number, url: string, icon: string, title: string): IApp {
        let newApp: IApp = {
            id: appId,
            url, icon, title
        };
        return newApp;
    }

    private static getNewAppId(apps: IApp[]): number {
        let maxId = Math.max(...apps.map(a => a.id)) + 1;
        let newAppId = apps.length === 0 ? 1 : maxId;
        return newAppId;
    }

    private static getNewTabId(tabs: ITab[]): number {
        let maxId = Math.max(...tabs.map(a => a.id)) + 1;
        let newId = tabs.length === 0 ? 1 : maxId;
        return newId;
    }
}
