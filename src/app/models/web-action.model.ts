import { IApp } from './app.model';
import { ITab } from './tab.model';

export interface IWebAction {
    tab: ITab | null;
    app: IApp | null;
    isCalling: boolean;
    value: any;
}
