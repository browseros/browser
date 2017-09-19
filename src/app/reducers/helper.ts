import { IApp } from '../models/app.model';
import { ITab } from '../models/tab.model';

import * as fromEvent from './event';

export class Helper {
    public static RemoveApp(apps: IApp[], appId: number): IApp[] {
        return apps.filter(a => a.id !== appId);
    }

    public static ModifyApp(apps: IApp[], changedApp: IApp, index: number): IApp[] {
        return [...apps.slice(0, index),
            changedApp,
        ...apps.slice(index + 1)];
    }

    public static AddNewApp(apps: IApp[], app: IApp): IApp[] {
        return this.AddNewToArray<IApp>(apps, app);
    }

    public static AddNewTab(tabs: ITab[], tab: ITab): ITab[] {
        return this.AddNewToArray<ITab>(tabs, tab);
    }

    public static ModifyTab(tabs: ITab[], changedTab: ITab, index: number): ITab[] {
        return [...tabs.slice(0, index),
            changedTab,
        ...tabs.slice(index + 1)];
    }

    public static RemoveTab(tabs: ITab[], tabId: number): ITab[] {
        return tabs.filter(a => a.id !== tabId);
    }

    public static RemoveALlTabsOfApp(appId: number, tabs: ITab[]): ITab[] {
        return tabs.filter(a => a.appId !== appId);
    }

    public static AddNewToArray<T>(items: T[], item: T): T[] {
        return [...items, item];
    }

    public static CreateApp(appId: number, url: string, icon: string, title: string): IApp {
        let newApp: IApp = {
            id: appId,
            url, icon, title
        };
        return newApp;
    }

    public static GetNewAppId(apps: IApp[]): number {
        let maxId = Math.max(...apps.map(a => a.id)) + 1;
        let newAppId = apps.length === 0 ? 1 : maxId;
        return newAppId;
    }

    public static GetNewTabId(tabs: ITab[]): number {
        let maxId = Math.max(...tabs.map(a => a.id)) + 1;
        let newId = tabs.length === 0 ? 1 : maxId;
        return newId;
    }

    public static CreateNewTabAndNewApp(tab: ITab, state: fromEvent.State): fromEvent.State {
        let newAppId = this.GetNewAppId(state.apps);
        let newTabId = this.GetNewTabId(state.tabs);
        tab.id = newTabId;
        tab.appId = newAppId;
        let newApp: IApp = this.CreateApp(newAppId, tab.url, '', tab.title);
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
            apps: this.AddNewApp(state.apps, newApp),
            currentTabs: newCurrentTabs,
            app2Hosts: newApp2Hosts,
            host2Apps: newHost2Apps,
            tabs: this.AddNewTab(state.tabs, tab),
            tabIds: this.AddNewToArray<number>(state.tabIds, tab.id),
            currentApp: newApp,
            currentTab: tab,
            isAddingApp: true,
            isGoingtoApp: true
        });
    }

    public static CreateNewTabForOldApp(appId: number, tab: ITab, state: fromEvent.State): fromEvent.State {
        let stateAppToAdd = state.apps.find(a => a.id === appId);
        let newTabId = this.GetNewTabId(state.tabs);
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

    public static CloseApp(app: IApp, state: fromEvent.State): fromEvent.State {
        let newCurrentApp: IApp = state.currentApp;
        let newApps = this.RemoveApp(state.apps, app.id);
        let newTabs = this.RemoveALlTabsOfApp(app.id, state.tabs);
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

    public static GotoApp(appId: number, state: fromEvent.State): fromEvent.State {
        let currentApp = state.apps.find(a => a.id === appId);
        let newCurrentTabId = state.currentTabs[currentApp.id];
        let currentTab = state.tabs.find(t => t.id === newCurrentTabId);
        return Object.assign({}, state, {
            currentApp,
            currentTab,
            isGoingtoApp: true
        });
    }

    public static GetNextCurrentTabIndexBeforeTabId(appId: number, tabs: ITab[], tabId: number): ITab {
        let appTabs = tabs.filter(a => a.appId === appId);
        let tabIdx = appTabs.findIndex(a => a.id === tabId);

        if (tabIdx === appTabs.length - 1) {
            tabIdx--;
        }
        if (tabIdx >= 0) {
            return appTabs[tabIdx];
        }
        return null;
    }

    public static CloseTab(tabId: number, appId: number, state: fromEvent.State): fromEvent.State {
        let currentAppIndex = state.apps.findIndex(a => a.id === state.currentApp.id);
        let newTabs = this.RemoveTab(state.tabs, tabId);
        let newTabIds = state.tabIds.filter(id => newTabs.findIndex(a => a.id === id) >= 0);
        let newCurrentTab = state.currentTab;
        if (newCurrentTab.id === tabId) {
            let nextCurrentTab = this.GetNextCurrentTabIndexBeforeTabId(appId,
                state.tabs,
                newCurrentTab.id);
            if (nextCurrentTab) {
                newCurrentTab = nextCurrentTab;
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

    public static ChangeTabTitle(tabId: number, newTitle: string, state: fromEvent.State): fromEvent.State {
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
        let newState = Object.assign({}, state, {
            tabs: this.ModifyTab(state.tabs, newChangedTab, changedTabIndex)
        });
        return newState;
    }

    public static ChangeTabIcon(tabId: number, newIcon: string, state: fromEvent.State): fromEvent.State {
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
        let newState = Object.assign({}, state, {
            apps: this.ModifyApp(state.apps, newChangedApp, changedAppIndex)
        });
        return newState;
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

        return hostname;
    }
}
