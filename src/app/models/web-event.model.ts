import { ITab } from './tab.model';
import { IApp } from './app.model';

export interface IWebEvent {
    tab: ITab;
    app: IApp;
    eventName: string;
    eventValue: any;
}
