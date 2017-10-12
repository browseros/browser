import { IApp } from './app.model';

export interface IHistoryItem {
    link: string;
    date: Date;
    title: string;
    host: string;
    weight: number;
    icon: string;
}
