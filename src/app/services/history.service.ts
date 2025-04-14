import { Injectable } from '@angular/core';
import { IHistoryItem } from '../models/history-item.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HistoryService {
    private history: IHistoryItem[] = [];
    private readonly HISTORY_STORAGE_KEY = 'browser_history';
    private readonly MAX_HISTORY_ITEMS = 1000;
    
    private historySubject = new BehaviorSubject<IHistoryItem[]>([]);
    public history$ = this.historySubject.asObservable();

    constructor() {
        this.loadFromStorage();
    }

    private loadFromStorage(): void {
        try {
            const storedHistory = localStorage.getItem(this.HISTORY_STORAGE_KEY);
            if (storedHistory) {
                this.history = JSON.parse(storedHistory).map((item: any) => ({
                    ...item,
                    date: new Date(item.date),
                    weight: item.weight || 1
                }));
                this.historySubject.next(this.history);
                console.log('[HistoryService] Loaded history items:', this.history.length);
            }
        } catch (error) {
            console.error('[HistoryService] Error loading history from storage:', error);
            this.history = [];
            this.historySubject.next(this.history);
        }
    }

    private saveToStorage(): void {
        try {
            localStorage.setItem(this.HISTORY_STORAGE_KEY, JSON.stringify(this.history));
            this.historySubject.next(this.history);
            console.log('[HistoryService] Saved history items:', this.history.length);
        } catch (error) {
            console.error('[HistoryService] Error saving history to storage:', error);
        }
    }

    public addHistoryItem(item: IHistoryItem): void {
        if (!item.link || !item.host) {
            console.warn('[HistoryService] Invalid history item:', item);
            return;
        }

        // Find existing item with the same host and link
        const existingIndex = this.history.findIndex(h => 
            h.link === item.link || 
            (h.host === item.host && h.title === item.title)
        );

        if (existingIndex >= 0) {
            // Update existing item
            const existingItem = this.history[existingIndex];
            const updatedItem = {
                ...existingItem,
                date: new Date(), // Update last visit date
                weight: (existingItem.weight || 1) + 1, // Increment weight
                title: item.title || existingItem.title, // Update title if provided
                icon: item.icon || existingItem.icon // Update icon if provided
            };
            
            // Remove the old item and add the updated one at the start
            this.history.splice(existingIndex, 1);
            this.history.unshift(updatedItem);
            
            console.log('[HistoryService] Updated history item:', updatedItem);
        } else {
            // Add new item with initial weight
            const newItem = {
                ...item,
                date: new Date(),
                weight: 1
            };
            this.history.unshift(newItem);
            console.log('[HistoryService] Added new history item:', newItem);
        }

        // Keep history size under limit
        if (this.history.length > this.MAX_HISTORY_ITEMS) {
            this.history = this.history.slice(0, this.MAX_HISTORY_ITEMS);
        }

        this.saveToStorage();
    }

    public getHistory(): IHistoryItem[] {
        return this.history;
    }

    public getHistoryByHost(hostname: string): IHistoryItem[] {
        if (!hostname) return [];
        
        return this.history
            .filter(item => item.host === hostname)
            .sort((a, b) => b.weight - a.weight) // Sort by weight in descending order
            .slice(0, 10); // Return top 10 most visited items
    }

    public getTopItems(limit: number = 10): IHistoryItem[] {
        return [...this.history]
            .sort((a, b) => b.weight - a.weight)
            .slice(0, limit);
    }

    public clearHistory(): void {
        this.history = [];
        this.saveToStorage();
        console.log('[HistoryService] History cleared');
    }
} 