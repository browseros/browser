import { Action } from '@ngrx/store';
import { IHistoryItem } from '../models/history-item.model';

export const NEW_HISTORY =              '[History] New History';

export class NewHistoryAction implements Action {
  public readonly type = NEW_HISTORY;

  constructor(public payload: IHistoryItem) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
= NewHistoryAction;
