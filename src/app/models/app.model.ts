import { ITab } from './tab.model';

export interface IApp {
    title: string;
    url: string;
    hostName: string;
    icon: string;
    tabs: ITab[];
    currentTab: ITab;
}
