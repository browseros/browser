import { Action } from '@ngrx/store';
import { IApp } from '../models/app.model';
import { IWebEvent } from '../models/web-event.model';

export const CHANGE_TAB_TITLE =     '[Event] Change Tab Title';
export const CHANGE_TAB_TITLE_COMPLETE =   '[Event] Change Tab Title Complete';

// tslint:disable-next-line:max-classes-per-file
export class ChangeTabTitleAction implements Action {
  public readonly type = CHANGE_TAB_TITLE;

  constructor(public payload: IWebEvent) { }
}

// tslint:disable-next-line:max-classes-per-file
export class ChangeTabTitleCompleteAction implements Action {
  public readonly type = CHANGE_TAB_TITLE_COMPLETE;

  constructor(public payload: IApp) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
= ChangeTabTitleAction
| ChangeTabTitleCompleteAction;
