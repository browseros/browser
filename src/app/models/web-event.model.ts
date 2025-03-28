import { IApp } from './app.model';

export interface IWebEvent {
    eventValue: any;
    eventName: string;
    tabId: number;
    app: IApp | null;
}
