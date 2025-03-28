import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { createSelector } from 'reselect';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromApp from './app';
import * as fromHistory from './history';
import * as appActions from '../actions/app.actions';
import * as historyActions from '../actions/history.actions';
import { IWebAction } from '../models/web-action.model';

export interface State {
  app: fromApp.State;
  history: fromHistory.State;
}

type AppAction = appActions.Actions;
type HistoryAction = historyActions.Actions;
type AllActions = AppAction | HistoryAction;

export const reducers: ActionReducerMap<State, AllActions> = {
  app: fromApp.reducer as ActionReducer<fromApp.State, AllActions>,
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

// App Selectors
export const getAppState = (state: State) => state.app;

export const getEventApps = createSelector(
  getAppState,
  state => state.apps
);

export const getEventTabs = createSelector(
  getAppState,
  state => state.tabs
);

export const getEventCurrentApp = createSelector(
  getAppState,
  state => state.currentApp
);

export const getEventCurrentTab = createSelector(
  getAppState,
  state => state.currentTab
);

export const getApp2Hosts = createSelector(
  getAppState,
  state => state.app2Hosts
);

export const getHost2Apps = createSelector(
  getAppState,
  state => state.host2Apps
);

export const getTabIds = createSelector(
  getAppState,
  state => state.tabIds
);

export const getCurrentTabs = createSelector(
  getAppState,
  state => state.currentTabs
);

// History Selectors
export const getHistoryState = (state: State) => state.history;

export const getHistories = createSelector(
  getHistoryState,
  state => state.histories
);

export const getTopApps = createSelector(
  getAppState,
  state => state.topApps
);

export const getSuggestions = createSelector(
  getAppState,
  state => state.suggestions
);

export const getIsNavigatingBack = createSelector(
  getAppState,
  state => state.isNavigatingBack
);

export const getIsNavigatingNext = createSelector(
  getAppState,
  state => state.isNavigatingNext
);

export const getIsNavigatingReload = createSelector(
  getAppState,
  state => state.isNavigatingReload
);

export const getIsChangingUrl = createSelector(
  getAppState,
  state => state.isChangingUrl
);
