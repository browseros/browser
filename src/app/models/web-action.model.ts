import type { IApp } from './app.model';
import type { ITab } from './tab.model';

export interface IWebAction {
    tab: ITab;
    app: IApp;
    isCalling: boolean;
    value?: any;
}
