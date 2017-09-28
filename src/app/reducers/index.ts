import { ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as fromRouter from '@ngrx/router-store';

import { compose } from '@ngrx/core/compose';

import { storeFreeze } from 'ngrx-store-freeze';

import { combineReducers } from '@ngrx/store';

import * as fromEvent from './event';

export interface State {
  event: fromEvent.State;
}

const reducers = {
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

// event
export const getEventState = (state: State) => state.event;
export const getEventApps = createSelector(getEventState, fromEvent.getApps);
export const getEventTabs = createSelector(getEventState, fromEvent.getTabs);
export const getEventCurrentApp = createSelector(getEventState, fromEvent.getCurrentApp);
export const getEventCurrentTab = createSelector(getEventState, fromEvent.getCurrentTab);
export const getIsNavigatingBack = createSelector(getEventState, fromEvent.getIsNavigatingBack);
export const getIsNavigatingNext = createSelector(getEventState, fromEvent.getIsNavigatingNext);
export const getIsNavigatingReload = createSelector(getEventState, fromEvent.getIsNavigatingReload);
export const getIsChangingUrl = createSelector(getEventState, fromEvent.getIsChangingUrl);
export const getTabIds = createSelector(getEventState, fromEvent.getTabIds);
export const getApp2Hosts = createSelector(getEventState, fromEvent.getApp2Hosts);
