import { ActionReducer } from '@ngrx/store';
import { createSelector } from 'reselect';
import * as fromRouter from '@ngrx/router-store';

import { compose } from '@ngrx/core/compose';

import { storeFreeze } from 'ngrx-store-freeze';

import { combineReducers } from '@ngrx/store';

import * as fromApp from './app';
import * as fromHistory from './history';

export interface State {
  event: fromApp.State;
  history: fromHistory.State;
}

const reducers = {
  event: fromApp.reducer,
  history: fromHistory.reducer
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
export const getEventApps = createSelector(getEventState, fromApp.getApps);
export const getEventTabs = createSelector(getEventState, fromApp.getTabs);
export const getEventCurrentApp = createSelector(getEventState, fromApp.getCurrentApp);
export const getEventCurrentTab = createSelector(getEventState, fromApp.getCurrentTab);
export const getIsNavigatingBack = createSelector(getEventState, fromApp.getIsNavigatingBack);
export const getIsNavigatingNext = createSelector(getEventState, fromApp.getIsNavigatingNext);
export const getIsNavigatingReload = createSelector(getEventState, fromApp.getIsNavigatingReload);
export const getIsChangingUrl = createSelector(getEventState, fromApp.getIsChangingUrl);
export const getTabIds = createSelector(getEventState, fromApp.getTabIds);
export const getApp2Hosts = createSelector(getEventState, fromApp.getApp2Hosts);

// history
export const getHistories = createSelector(getEventState, fromApp.getHistories);
export const getHistoryWithWeights = createSelector(getEventState, fromApp.getHistoryWithWeights);
export const getTopApps = createSelector(getEventState, fromApp.getTopApps);
export const getSuggestions = createSelector(getEventState, fromApp.getSuggestions);
