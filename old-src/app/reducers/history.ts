import * as app from '../actions/app.actions';
import * as history from '../actions/history.actions';
import { IHistoryItem } from '../models/history-item.model';
import { IApp } from '../models/app.model';

export interface State {
    histories: IHistoryItem[];
    apps: IApp[];
}

export const initialState: State = {
    histories: [],
    apps: []
};

export function reducer(state = initialState, action: app.Actions | history.Actions): State {
    switch (action.type) {

        case history.NEW_HISTORY: {
            return Object.assign({}, state, {
                histories: [...state.histories, action.payload]
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

export const getHistories = (state: State) => state.histories;
