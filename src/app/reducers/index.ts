import { ActionReducer, ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import * as fromApp from './app';
import * as appActions from '../actions/app.actions';
import { IWebAction } from '../models/web-action.model';

export interface State {
  app: fromApp.State;
}

type AppAction = appActions.Actions;
type AllActions = AppAction;

export const reducers: ActionReducerMap<State, AllActions> = {
  app: fromApp.reducer,
};

export function reducer(state: State | undefined, action: AllActions) {
  if (process.env['NODE_ENV'] === 'production') {
    return reducers.app(state?.app, action);
  } else {
    return storeFreeze((state: State | undefined, action: AllActions) => ({
      app: reducers.app(state?.app, action)
    }))(state, action);
  }
}

// App Selectors
export const getAppState = createFeatureSelector<fromApp.State>('app');

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
export const getHistories = createSelector(
  getAppState,
  fromApp.getHistories
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
