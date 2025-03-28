import type { IApp } from '../models/app.model';
import type { ITab } from '../models/tab.model';
import * as app from '../actions/app.actions';
import { StateHelper } from './helper';
import { IHistoryItem } from '../models/history-item.model';
import { IWebAction } from '../models/web-action.model';

export interface WebAction {
  tab: ITab;
  app: IApp;
  isCalling: boolean;
  value?: string;
}

export interface State {
  apps: IApp[];
  currentTabs: { [id: number]: number };
  host2Apps: { [host: string]: number };
  app2Hosts: { [id: number]: string };
  tabs: ITab[];
  tabIds: number[];
  currentApp: IApp | null;
  currentTab: ITab | null;
  isGoingtoApp: boolean;
  isAddingApp: boolean;
  isAddingTab: boolean;
  isClosingApp: boolean;
  isNavigatingNext: IWebAction | null;
  isNavigatingBack: IWebAction | null;
  isNavigatingReload: IWebAction | null;
  isChangingUrl: IWebAction | null;
  histories: IHistoryItem[];
  historyWithWeights: IHistoryItem[];
  topApps: IHistoryItem[];
  suggestions: any[];
}

const defaultApp: IApp = { id: 0, title: '', url: '', icon: '' };
const defaultTab: ITab = { id: 0, appId: 0, title: '', url: '', hostName: '', icon: '' };
const defaultWebAction: WebAction = { tab: defaultTab, app: defaultApp, isCalling: false };

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
  isNavigatingReload: null,
  isChangingUrl: null,
  histories: [],
  historyWithWeights: [],
  topApps: [],
  suggestions: []
};

export function reducer(state = initialState, action: app.Actions): State {
  switch (action.type) {
    case app.ADD_TAB: {
      let tab = JSON.parse(JSON.stringify(action.payload)) as ITab;
      let appId = state.host2Apps[tab.hostName];
      if (!appId || appId <= 0) {
        return StateHelper.changeStateByCreateNewTabAndNewApp(tab, state);
      }
      return StateHelper.changeStateByCreateNewTabForOldApp(appId, tab, state);
    }

    case app.CLOSE_APP: {
      return StateHelper.changeStateByCloseApp(action.payload, state);
    }

    case app.GOTO_APP: {
      return StateHelper.changeStateByGotoApp(action.payload.id, state);
    }

    case app.GOTO_TAB: {
      return StateHelper.changeStateByGotoTab(state, action.payload);
    }

    case app.CLOSE_TAB: {
      return StateHelper.changeStateByCloseTab(action.payload.id, action.payload.appId, state);
    }

    case app.CLOSE_OTHER_APPS: {
      return StateHelper.changeStateByCloseOtherApps(action.payload.id, state);
    }

    case app.CLOSE_OTHER_TABS: {
      return StateHelper.changeStateByCloseOtherTabs(action.payload.id, action.payload.appId, state);
    }

    case app.CLOSE_OTHER_TABS_ALL_APPS: {
      return StateHelper.changeStateByCloseOtherTabsAllApps(action.payload.id, state);
    }

    case app.CHANGE_TAB_TITLE: {
      return StateHelper.changeStateByChangeTabTitle(action.payload.tabId, action.payload.eventValue || '', state);
    }

    case app.CHANGE_TAB_URL: {
      return StateHelper.changeStateByChangeTabUrl(state, action.payload.tabId, action.payload.eventValue || '');
    }

    case app.CHANGE_TAB_ICON: {
      return StateHelper.changeStateByChangeTabIcon(action.payload.tabId, action.payload.eventValue || '', state);
    }

    case app.CHANGE_TAB_URL_FORCE: {
      return StateHelper.changeStateByForceChangeTabUrl(state, action.payload.tabId, action.payload.eventValue || '');
    }

    case app.CHANGE_TAB_URL_FORCE_COMPLETE: {
      if (!state.currentTab || !state.currentApp) {
        return state;
      }
      let appAction: WebAction = {
        tab: state.currentTab,
        app: state.currentApp,
        isCalling: false,
        value: action.payload.eventValue
      };
      return Object.assign({}, state, {
        isChangingUrl: appAction
      });
    }

    case app.DO_BACK: {
      if (!state.currentTab || !state.currentApp) {
        return state;
      }
      let appAction: IWebAction = {
        tab: state.currentTab,
        app: state.currentApp,
        isCalling: true,
        value: null
      };
      return Object.assign({}, state, {
        isNavigatingBack: appAction
      });
    }

    case app.DO_BACK_COMPLETE: {
      if (!state.currentTab || !state.currentApp) {
        return state;
      }
      let appAction: IWebAction = {
        tab: state.currentTab,
        app: state.currentApp,
        isCalling: false,
        value: null
      };
      return Object.assign({}, state, {
        isNavigatingBack: appAction
      });
    }

    case app.DO_NEXT: {
      if (!state.currentTab || !state.currentApp) {
        return state;
      }
      let appAction: IWebAction = {
        tab: state.currentTab,
        app: state.currentApp,
        isCalling: true,
        value: null
      };
      return Object.assign({}, state, {
        isNavigatingNext: appAction
      });
    }

    case app.DO_NEXT_COMPLETE: {
      if (!state.currentTab || !state.currentApp) {
        return state;
      }
      let appAction: IWebAction = {
        tab: state.currentTab,
        app: state.currentApp,
        isCalling: false,
        value: null
      };
      return Object.assign({}, state, {
        isNavigatingNext: appAction
      });
    }

    case app.DO_RELOAD: {
      if (!state.currentTab || !state.currentApp) {
        return state;
      }
      let appAction: IWebAction = {
        tab: state.currentTab,
        app: state.currentApp,
        isCalling: true,
        value: null
      };
      return Object.assign({}, state, {
        isNavigatingReload: appAction
      });
    }

    case app.DO_RELOAD_COMPLETE: {
      if (!state.currentTab || !state.currentApp) {
        return state;
      }
      let appAction: IWebAction = {
        tab: state.currentTab,
        app: state.currentApp,
        isCalling: false,
        value: null
      };
      return Object.assign({}, state, {
        isNavigatingReload: appAction
      });
    }

    case app.GET_SUGGESTIONS: {
      return Object.assign({}, state, {
        suggestions: []
      });
    }

    case app.GET_SUGGESTIONS_COMPLETE: {
      return Object.assign({}, state, {
        suggestions: action.payload
      });
    }

    case app.CLEAR_SUGGESTIONS: {
      return Object.assign({}, state, {
        suggestions: []
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

export const getIsNavigatingReload = (state: State) => state.isNavigatingReload;

export const getIsChangingUrl = (state: State) => state.isChangingUrl;

export const getTabIds = (state: State) => state.tabIds;

export const getApp2Hosts = (state: State) => state.app2Hosts;

export const getHistories = (state: State) => state.histories;

export const getHistoryWithWeights = (state: State) => state.historyWithWeights;

export const getTopApps = (state: State) => state.topApps;

export const getSuggestions = (state: State) => state.suggestions;
