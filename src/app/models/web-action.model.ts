import { ITab } from './tab.model';
import { IApp } from './app.model';

export interface IWebAction {
    tab: ITab;
    app: IApp;
    isCalling: boolean;
}
