import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GoogleSuggestionService {
    constructor(private http: Http) { }

    public getSuggestionWords(key: string) {
        let link = 'http://suggestqueries.google.com/complete/search?output=chrome&q=' + encodeURI(key);
        return this.http.get(link)
            .map((res: Response) => {
                return res.json();
            });
    }
}
