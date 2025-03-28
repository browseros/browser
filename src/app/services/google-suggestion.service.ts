import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface GoogleSuggestion {
    key: string;
    title: string;
}

@Injectable({
    providedIn: 'root'
})
export class GoogleSuggestionService {
    constructor(private http: HttpClient) { }

    getSuggestionWords(key: string): Observable<GoogleSuggestion[]> {
        const link = `http://suggestqueries.google.com/complete/search?output=chrome&q=${encodeURIComponent(key)}`;
        return this.http.get<[string, string[], string[], string[]]>(link).pipe(
            map(res => {
                const words = res[1];
                const titles = res[2];
                return words.map((word, i) => ({
                    key: word,
                    title: titles[i] || word
                }));
            })
        );
    }
}
