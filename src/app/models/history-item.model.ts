import { IApp } from './app.model';

export interface IHistoryItem {
    id: number;
    link: string;
    title: string;
    icon: string;
    hostName: string;
    weight: number;
}
