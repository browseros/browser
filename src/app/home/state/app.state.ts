import type { IApp } from '../../models/app.model';
import type { ITab } from '../../models/tab.model';

export interface AppState {
    apps: IApp[];
    tabs: ITab[];
    currentApp: IApp;
    currentTab: ITab;
    tabIds: number[];
    screenWidth: number;
    screenHeight: number;
} 