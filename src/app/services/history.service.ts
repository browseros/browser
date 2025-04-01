import { Injectable } from '@angular/core';
import { IHistoryItem } from '../models/history-item.model';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    private history: IHistoryItem[] = [];
    private readonly HISTORY_STORAGE_KEY = 'browser_history';
    private readonly MAX_HISTORY_ITEMS = 1000;

    constructor() {
        this.loadFromStorage();
    }

    private loadFromStorage(): void {
        try {
            const storedHistory = localStorage.getItem(this.HISTORY_STORAGE_KEY);
            if (storedHistory) {
                this.history = JSON.parse(storedHistory).map((item: any) => ({
                    ...item,
                    date: new Date(item.date)
                }));
            }
        } catch (error) {
            console.error('[HistoryService] Error loading history from storage:', error);
        }
    }

    private saveToStorage(): void {
        try {
            localStorage.setItem(this.HISTORY_STORAGE_KEY, JSON.stringify(this.history));
        } catch (error) {
            console.error('[HistoryService] Error saving history to storage:', error);
        }
    }

    public addHistoryItem(item: IHistoryItem): void {
        // Find existing item with the same link
        const existingIndex = this.history.findIndex(h => h.link === item.link);

        if (existingIndex >= 0) {
            // Update existing item
            const existingItem = this.history[existingIndex];
            this.history[existingIndex] = {
                ...existingItem,
                date: new Date(), // Update last visit date
                weight: existingItem.weight + 1, // Increment weight
                title: item.title || existingItem.title, // Update title if provided
                icon: item.icon || existingItem.icon // Update icon if provided
            };
        } else {
            // Add new item
            this.history.unshift(item);

            // Keep history size under limit
            if (this.history.length > this.MAX_HISTORY_ITEMS) {
                this.history = this.history.slice(0, this.MAX_HISTORY_ITEMS);
            }
        }

        this.saveToStorage();
    }

    public getHistory(): IHistoryItem[] {
        return this.history;
    }

    public getHistoryByHost(hostname: string): IHistoryItem[] {
        return this.history
            .filter(item => item.host === hostname)
            .sort((a, b) => b.weight - a.weight) // Sort by weight in descending order
            .slice(0, 10); // Return top 10 most visited items
    }

    public clearHistory(): void {
        this.history = [];
        this.saveToStorage();
    }
} 