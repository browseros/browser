import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import * as appActions from '../actions/app.actions';
import { GoogleSuggestionService } from '../services/google-suggestion.service';

@Injectable()
export class AppEffects {

    @Effect()
    public doBack$: Observable<Action> = this.actions$
        .ofType(appActions.DO_BACK)
        .map((action: appActions.DoBackAction) => action.payload)
        .map(app => {
            return new appActions.DoBackCompleteAction(app);
        });

    @Effect()
    public doNext$: Observable<Action> = this.actions$
        .ofType(appActions.DO_NEXT)
        .map((action: appActions.DoNextAction) => action.payload)
        .map(app => {
            return new appActions.DoNextCompleteAction(app);
        });

    @Effect()
    public getSuggestions$: Observable<Action> = this.actions$
        .ofType(appActions.GET_SUGGESTIONS)
        .map((action: appActions.GetSuggestionsAction) => action.payload)
        .mergeMap(key =>
            this.googleSuggestionService.getSuggestionWords(key)
                .map((res) => {
                    let arr = res[1];
                    let titles = res[2];
                    let ret = [];
                    for (let i = 0; i < arr.length; i++) {
                        ret.push({ key: arr[i], title: titles[i] });
                    }
                    return new appActions.GetSuggestionsCompleteAction(ret);
                })
        );

    constructor(private actions$: Actions, private googleSuggestionService: GoogleSuggestionService) { }
}
