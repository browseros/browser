import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromApp from './app';
import * as fromHistory from './history';
import * as appActions from '../actions/app.actions';
import * as historyActions from '../actions/history.actions';

export interface State {
  event: fromApp.State;
  history: fromHistory.State;
}

type AppAction = appActions.Actions;
type HistoryAction = historyActions.Actions;
type AllActions = AppAction | HistoryAction;

export const reducers: ActionReducerMap<State, AllActions> = {
  event: fromApp.reducer as ActionReducer<fromApp.State, AllActions>,
  history: fromHistory.reducer as ActionReducer<fromHistory.State, AllActions>
};

const developmentReducer: ActionReducer<State, AllActions> = combineReducers(reducers);
const productionReducer: ActionReducer<State, AllActions> = combineReducers(reducers);

export function reducer(state: State | undefined, action: AllActions) {
  if (process.env['NODE_ENV'] === 'production') {
    return productionReducer(state, action);
  } else {
    return storeFreeze(developmentReducer)(state, action);
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
