import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as appActions from '../actions/app.actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions
  ) {}

  getSuggestions$ = createEffect(() => this.actions$.pipe(
    ofType(appActions.GET_SUGGESTIONS),
    mergeMap(() => of(new appActions.GetSuggestionsCompleteAction([])))
  ));
} 