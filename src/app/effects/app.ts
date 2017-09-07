import { ADD_TAB } from './../actions/app.actions';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
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

@Injectable()
export class AppEffects {

    @Effect()
    public addApp$: Observable<Action> = this.actions$
        .ofType(appActions.ADD_APP)
        .map((action: appActions.AddAppAction) => action.payload)
        .map(app => {
            return new appActions.AddAppCompleteAction(app);
        });

    @Effect()
    public addTab$: Observable<Action> = this.actions$
        .ofType(appActions.ADD_TAB)
        .map((action: appActions.AddTabAction) => action.payload)
        .map(tab => {
            return new appActions.AddTabCompleteAction(tab);
        });

    constructor(private actions$: Actions) { }
}
