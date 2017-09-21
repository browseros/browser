import { IWebAction } from './../models/web-action.model';
import { IApp } from '../models/app.model';
import * as event from '../actions/event.actions';
import * as app from '../actions/app.actions';
import { ITab } from '../models/tab.model';
import { Helper } from './helper';

export interface State {
    apps: IApp[];
    currentTabs: { [id: number]: number };
    host2Apps: { [host: string]: number };
    app2Hosts: { [id: number]: string };
    tabs: ITab[];
    tabIds: number[];
    currentApp: IApp;
    currentTab: ITab;
    isGoingtoApp: boolean;
    isAddingApp: boolean;
    isAddingTab: boolean;
    isClosingApp: boolean;
    isNavigatingNext: IWebAction;
    isNavigatingBack: IWebAction;
    isChangingUrl: IWebAction;
}

export const initialState: State = {
    apps: [],
    currentTabs: {},
    host2Apps: {},
    app2Hosts: {},
    tabs: [],
    tabIds: [],
    currentApp: null,
    currentTab: null,
    isGoingtoApp: false,
    isAddingApp: false,
    isAddingTab: false,
    isClosingApp: false,
    isNavigatingNext: null,
    isNavigatingBack: null,
    isChangingUrl: null
};

export function reducer(state = initialState, action: event.Actions | app.Actions): State {
    switch (action.type) {

        case app.ADD_TAB: {
            let tab = JSON.parse(JSON.stringify(action.payload)) as ITab;
            let appId = state.host2Apps[tab.hostName];
            if (!appId || appId <= 0) {
                return Helper.changeStateByCreateNewTabAndNewApp(tab, state);
            }
            return Helper.changeStateByCreateNewTabForOldApp(appId, tab, state);
        }

        case app.CLOSE_APP: {
            return Helper.changeStateByCloseApp(action.payload, state);
        }

        case app.GOTO_APP: {
            return Helper.changeStateByGotoApp(action.payload.id, state);
        }

        case event.GOTO_TAB: {
            return Helper.changeStateByGotoTab(state, action.payload);
        }

        case event.CLOSE_TAB: {
            return Helper.changeStateByCloseTab(action.payload.id, action.payload.appId, state);
        }

        case event.CHANGE_TAB_TITLE: {
            return Helper.changeStateByChangeTabTitle(action.payload.tabId, action.payload.eventValue, state);
        }

        case event.CHANGE_TAB_URL: {
            return Helper.changeStateByChangeTabUrl(state, action.payload.tabId, action.payload.eventValue);
        }

        case event.CHANGE_TAB_ICON: {
            return Helper.changeStateByChangeTabIcon(action.payload.tabId, action.payload.eventValue, state);
        }

        case event.CHANGE_TAB_URL_FORCE: {
            return Helper.changeStateByForceChangeTabUrl(state, action.payload.tabId, action.payload.eventValue);
        }

        case event.CHANGE_TAB_URL_FORCE_COMPLETE: {
            let appAction: IWebAction = {
                tab: state.currentTab,
                app: state.currentApp,
                isCalling: false, value: action.payload.eventValue
            };
            return Object.assign({}, state, {
                isChangingUrl: appAction
            });
        }

        case event.DO_BACK: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case event.DO_BACK_COMPLETE: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: false };
            return Object.assign({}, state, {
                isNavigatingBack: appAction
            });
        }

        case event.DO_NEXT: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: true };
            return Object.assign({}, state, {
                isNavigatingNext: appAction
            });
        }

        case event.DO_NEXT_COMPLETE: {
            let appAction: IWebAction = { tab: state.currentTab, app: state.currentApp, isCalling: false };
            return Object.assign({}, state, {
                isNavigatingNext: appAction
            });
        }

        default: {
            return state;
        }
    }
}

/**
 * Because the data structure is defined within the reducer it is optimal to
 * locate our selector functions at this level. If store is to be thought of
 * as a database, and reducers the tables, selectors can be considered the
 * queries into said database. Remember to keep your selectors small and
 * focused so they can be combined and composed to fit each particular
 * use-case.
 */

export const getApps = (state: State) => state.apps;

export const getTabs = (state: State) => state.tabs;

export const getCurrentApp = (state: State) => state.currentApp;

export const getCurrentTab = (state: State) => state.currentTab;

export const getIsNavigatingBack = (state: State) => state.isNavigatingBack;

export const getIsNavigatingNext = (state: State) => state.isNavigatingNext;

export const getIsChangingUrl = (state: State) => state.isChangingUrl;

export const getTabIds = (state: State) => state.tabIds;

export const getApp2Hosts = (state: State) => state.app2Hosts;
