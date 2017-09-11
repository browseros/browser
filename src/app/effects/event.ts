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

import * as eventActions from '../actions/event.actions';

@Injectable()
export class EventEffects {

    @Effect()
    public doBack$: Observable<Action> = this.actions$
        .ofType(eventActions.DO_BACK)
        .map((action: eventActions.DoBackAction) => action.payload)
        .map(app => {
            return new eventActions.DoBackCompleteAction(app);
        });

        @Effect()
        public doNext$: Observable<Action> = this.actions$
            .ofType(eventActions.DO_NEXT)
            .map((action: eventActions.DoNextAction) => action.payload)
            .map(app => {
                return new eventActions.DoNextCompleteAction(app);
            });

    constructor(private actions$: Actions) { }
}
