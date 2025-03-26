import { ITab } from './tab.model';
import { IApp } from './app.model';

export interface IWebEvent {
    tabId: number;
    app: IApp;
    eventName: string;
    eventValue: any;
}
