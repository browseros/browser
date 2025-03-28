import { IApp } from '../models/app.model';
import { ITab } from '../models/tab.model';

export class StateHelper {
    public static extractHostname(url: string): string {
        try {
            if (!url) return '';
            // Remove protocol and get hostname
            const hostname = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
            return hostname.toLowerCase();
        } catch {
            return '';
        }
    }

    public static prepareAppLink(url: string): string {
        if (!url) return '';
        return url.startsWith('http') ? url : `https://${url}`;
    }

    public static getNewAppId(apps: IApp[]): number {
        return apps.length > 0 ? Math.max(...apps.map(a => a.id)) + 1 : 1;
    }

    public static getNewTabId(tabs: ITab[]): number {
        return tabs.length > 0 ? Math.max(...tabs.map(t => t.id)) + 1 : 1;
    }

    public static createApp(id: number, url: string, icon: string = '', title: string = ''): IApp {
        return {
            id,
            url,
            icon,
            title
        };
    }

    public static findAppByHostname(hostname: string, host2Apps: { [hostname: string]: number }, apps: IApp[]): IApp | null {
        const appId = host2Apps[hostname];
        if (appId) {
            return apps.find(a => a.id === appId) || null;
        }
        return null;
    }

    public static addNewApp(apps: IApp[], app: IApp): IApp[] {
        return [...apps, app];
    }

    public static addNewTab(tabs: ITab[], tab: ITab): ITab[] {
        return [...tabs, tab];
    }

    public static removeApp(apps: IApp[], appId: number): IApp[] {
        return apps.filter(a => a.id !== appId);
    }

    public static removeTab(tabs: ITab[], tabId: number): ITab[] {
        return tabs.filter(t => t.id !== tabId);
    }

    public static removeAllTabsOfApp(appId: number, tabs: ITab[]): ITab[] {
        return tabs.filter(t => t.appId !== appId);
    }

    public static getNextCurrentAppBeforeAppId(appId: number, apps: IApp[]): IApp | null {
        const index = apps.findIndex(a => a.id === appId);
        if (index > 0) {
            return apps[index - 1];
        } else if (index === 0 && apps.length > 1) {
            return apps[1];
        }
        return null;
    }

    public static getNextCurrentTabIndexBeforeTabId(appId: number, tabs: ITab[], tabId: number): ITab | null {
        const appTabs = tabs.filter(t => t.appId === appId);
        const index = appTabs.findIndex(t => t.id === tabId);
        if (index > 0) {
            return appTabs[index - 1];
        } else if (index === 0 && appTabs.length > 1) {
            return appTabs[1];
        }
        return null;
    }
} 