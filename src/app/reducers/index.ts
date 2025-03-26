import { combineReducers, Action } from '@ngrx/store';
import * as fromApp from './app';
import * as fromHistory from './history';
import { Actions } from '../actions/app.actions';

export interface State {
    event: fromApp.State;
    history: fromHistory.State;
}

export const reducers = {
    event: fromApp.reducer,
    history: fromHistory.reducer
};

export const reducer = combineReducers<State, Actions>(reducers);

// App selectors
export const getEventApps = (state: State) => state.event.apps;
export const getEventCurrentApp = (state: State) => state.event.currentApp;
export const getEventCurrentTab = (state: State) => state.event.currentTab;
export const getEventTabs = (state: State) => state.event.tabs;
export const getHistories = (state: State) => state.history.histories;
export const getSuggestions = (state: State) => state.event.suggestions;
export const getTopApps = (state: State) => state.event.topApps;
export const getTabIds = (state: State) => state.event.tabIds;
export const getApp2Hosts = (state: State) => state.event.app2Hosts;
