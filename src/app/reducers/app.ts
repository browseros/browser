import { IApp } from '../models/app.model';
import * as app from '../actions/app.actions';
import * as event from '../actions/event.actions';
import { ITab } from '../models/tab.model';

export interface State {
    apps: IApp[];
    tabs: ITab[];
    isGoingtoApp: boolean;
    isAddingApp: boolean;
    isAddingTab: boolean;
    isClosingApp: boolean;
}

export const initialState: State = {
    apps: [],
    tabs: [],
    isGoingtoApp: false,
    isAddingApp: false,
    isAddingTab: false,
    isClosingApp: false
};
// TODO: 1 - tabs reload after add/remove tab; link changed not saved because of reload (effect of 1)
export function reducer(state = initialState, action: app.Actions | event.Actions): State {
    switch (action.type) {
        case app.ADD_APP: {
            let newApp = JSON.parse(JSON.stringify(action.payload));
            let newAppId = state.apps.length === 0 ? 1 : (Math.max(...state.apps.map(a => a.id)) + 1);
            newApp.id = newAppId;
            let newTab: ITab = { id: 1, appId: newAppId, hostName: action.payload.hostName, title: '',
                url: '' };
            return Object.assign({}, state, {
                apps: [...state.apps, newApp],
                tabs: [...state.tabs, newTab],
                isAddingApp: true
            });
        }

        case app.ADD_APP_COMPLETE: {
            return Object.assign({}, state, {
                isAddingApp: false
            });
        }

        case app.ADD_TAB: {
            let tab = JSON.parse(JSON.stringify(action.payload));
            let appId = state.apps.findIndex(item => item.hostName === tab.hostName);
            if (appId < 0) {
                let newAppId = state.apps.length === 0 ? 1 : (Math.max(...state.apps.map(a => a.id)) + 1);
                let newTabId = state.tabs.length === 0 ? 1 : (Math.max(...state.tabs.map(a => a.id)) + 1);
                tab.id = newTabId;
                tab.appId = newAppId;
                let newApp: IApp = {
                    id: newAppId, currentTabId: newTabId,
                    url: '', hostName: tab.hostName, icon: '', title: ''
                };
                return Object.assign({}, state, {
                    apps: [...state.apps, newApp],
                    tabs: [...state.tabs, tab],
                    isAddingApp: true,
                    isGoingtoApp: true
                });
            }
            let stateAppToAdd = state.apps[appId];
            let newTabId = state.tabs.length === 0
                ? 1
                : (Math.max(...state.tabs.map(a => a.id)) + 1);
            tab.id = newTabId;
            tab.appId = stateAppToAdd.id;

            return Object.assign({}, state, {
                tabs: [...state.tabs, tab],
            });
        }

        case app.ADD_TAB_COMPLETE: {
            return Object.assign({}, state, {
                isAddingTab: false
            });
        }

        case app.GOTO_APP: {
            return Object.assign({}, state, {
                currentApp: action.payload,
                isGoingtoApp: true
            });
        }

        case app.GOTO_APP_COMPLETE: {
            return Object.assign({}, state, {
                isGoingtoApp: false
            });
        }

        case app.CLOSE_APP: {
            let app = action.payload;
            let newApps = state.apps.filter(a => a.id !== app.id);
            let newTabs = state.tabs.filter(a => a.appId !== app.id);
            return Object.assign({}, state, {
                apps: newApps,
                tabs: newTabs,
                isClosingApp: true
            });
        }

        case event.CLOSE_TAB: {
            let newTabs = state.tabs.filter(a => a.id !== action.payload.id);
            return Object.assign({}, state, {
                tabs: newTabs
            });
        }

        case app.CLOSE_APP_COMPLETE: {
            return Object.assign({}, state, {
                isClosingApp: false
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
