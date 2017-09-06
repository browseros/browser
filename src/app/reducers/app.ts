
import { IApp } from '../models/app.model';
import * as app from '../actions/app.actions';
import { ITab } from '../models/tab.model';

export interface State {
    apps: IApp[];
    currentApp: IApp;
    currentTab: ITab;
}

export const initialState: State = {
    apps: [],
    currentApp: null,
    currentTab: null
};

export function reducer(state = initialState, action: app.Actions): State {
    switch (action.type) {
        case app.ADD_APP: {
            const newApp = action.payload as IApp;
            newApp.tabs = [];
            let newTab: ITab = { hostName: newApp.hostName, id: 0, title: '', url: newApp.url };
            newApp.tabs.push(newTab);
            return Object.assign({}, state, {
                apps: [...state.apps, newApp]
            });
        }

        case app.ADD_TAB: {
            const tab = action.payload as ITab;
            let appId = state.apps.findIndex(item => item.url === tab.hostName);
            if (appId < 0) {
                const newApp = action.payload as IApp;
                newApp.tabs = [];
                newApp.tabs.push(tab);
                return Object.assign({}, state, {
                    apps: [...state.apps, newApp]
                });
            }
            let appToAdd = state.apps[appId];
            appToAdd.tabs.push(tab);

            return Object.assign({}, state, {
                apps: Object.assign({}, state.apps, {
                    [appId]: appToAdd
                }),
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

export const getCurrentApp = (state: State) => state.currentApp;

export const getCurrentTab = (state: State) => state.currentTab;
