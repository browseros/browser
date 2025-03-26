import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as historyActions from '../actions/history.actions';

@Injectable()
export class HistoryEffects {
  constructor(
    private actions$: Actions
  ) {}

  newHistory$ = createEffect(() => this.actions$.pipe(
    ofType(historyActions.NEW_HISTORY),
    mergeMap(() => of(new historyActions.NewHistoryAction({
      host: '',
      title: '',
      link: '',
      date: new Date(),
      weight: 0,
      icon: ''
    })))
  ));

  // Add effect handlers here
} 