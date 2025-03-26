import type { IApp } from './app.model';

export interface IWebEvent {
    tabId: number;
    eventValue: string;
    eventName: string;
    app: IApp;
}
