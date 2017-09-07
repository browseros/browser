import { Action } from '@ngrx/store';
import { IApp } from '../models/app.model';
import { ITab } from '../models/tab.model';

export const ADD_APP =              '[App] Add App';
export const ADD_APP_COMPLETE =     '[App] Add App Complete';
export const ADD_TAB =              '[App] Add Tab';
export const ADD_TAB_COMPLETE =     '[App] Add Tab Complete';
export const GOTO_APP =             '[App] Go To App';
export const GOTO_APP_COMPLETE =    '[App] Go To App Complete';

export class AddAppAction implements Action {
  public readonly type = ADD_APP;

  constructor(public payload: IApp) { }
}

// tslint:disable-next-line:max-classes-per-file
export class AddAppCompleteAction implements Action {
  public readonly type = ADD_APP_COMPLETE;

  constructor(public payload: IApp) { }
}

// tslint:disable-next-line:max-classes-per-file
export class AddTabCompleteAction implements Action {
  public readonly type = ADD_TAB_COMPLETE;

  constructor(public payload: ITab) { }
}

// tslint:disable-next-line:max-classes-per-file
export class AddTabAction implements Action {
  public readonly type = ADD_TAB;

  constructor(public payload: ITab) { }
}

// tslint:disable-next-line:max-classes-per-file
export class GotoTabAction implements Action {
  public readonly type = GOTO_APP;

  constructor(public payload: IApp) { }
}

// tslint:disable-next-line:max-classes-per-file
export class GotoTabCompleteAction implements Action {
  public readonly type = GOTO_APP_COMPLETE;

  constructor(public payload: IApp) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
= AddAppAction
| AddAppCompleteAction
| AddTabCompleteAction
| GotoTabAction
| GotoTabCompleteAction
| AddTabAction;
