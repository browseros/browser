import { ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as fromRouter from '@ngrx/router-store';

import { compose } from '@ngrx/core/compose';

import { storeFreeze } from 'ngrx-store-freeze';

import { combineReducers } from '@ngrx/store';

import * as fromApp from './app';
import * as fromEvent from './event';

export interface State {
  app: fromApp.State;
  event: fromEvent.State;
}

const reducers = {
  app: fromApp.reducer,
  event: fromEvent.reducer
};

const developmentReducer: ActionReducer<State> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<State> = combineReducers(reducers);

export function reducer(state: any, action: any) {
  if (ENV !== 'development') {
    return productionReducer(state, action);
  } else {
    return developmentReducer(state, action);
  }
}

// app
export const getAppState = (state: State) => state.app;
export const getApps = createSelector(getAppState, fromApp.getApps);
export const getCurrentApp = createSelector(getAppState, fromApp.getCurrentApp);

// event
export const getEventState = (state: State) => state.event;
export const getEventApps = createSelector(getEventState, fromEvent.getApps);
export const getEventCurrentApp = createSelector(getEventState, fromEvent.getCurrentApp);
export const getIsNavigatingBack = createSelector(getEventState, fromEvent.getIsNavigatingBack);
export const getIsNavigatingNext = createSelector(getEventState, fromEvent.getIsNavigatingNext);
