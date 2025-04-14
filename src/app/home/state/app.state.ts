import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';
import type { IHistoryItem } from '../../models/history-item.model';
import type { IWebEvent } from '../../models/web-event.model';

export interface AppState {
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
    isNavigatingNext: IWebEvent | null;
    isNavigatingBack: IWebEvent | null;
    isNavigatingReload: IWebEvent | null;
    isChangingUrl: IWebEvent | null;
    histories: IHistoryItem[];
    historyWithWeights: IHistoryItem[];
    topApps: IHistoryItem[];
    suggestions: any[];
    screenWidth: number;
    screenHeight: number;
} 