import { ITab } from './tab.model';

export interface IApp {
    id: number;
    url: string;
    hostName: string;
    icon: string;
    title: string;
    weight?: number;
}
