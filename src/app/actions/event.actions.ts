import { Action } from '@ngrx/store';
import { IApp } from '../models/app.model';
import { IWebEvent } from '../models/web-event.model';

export const CHANGE_TAB_TITLE =            '[Event] Change Tab Title';
export const CHANGE_TAB_TITLE_COMPLETE =   '[Event] Change Tab Title Complete';
export const DO_NEXT =                     '[Event] Do Next';
export const DO_NEXT_COMPLETE =            '[Event] Do Next Complete';
export const DO_BACK =                     '[Event] Do Back';
export const DO_BACK_COMPLETE =            '[Event] Do Back Complete';

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

// tslint:disable-next-line:max-classes-per-file
export class DoNextAction implements Action {
  public readonly type = DO_NEXT;

  constructor(public payload: IApp) { }
}

// tslint:disable-next-line:max-classes-per-file
export class DoNextCompleteAction implements Action {
  public readonly type = DO_NEXT_COMPLETE;

  constructor(public payload: IApp) { }
}

// tslint:disable-next-line:max-classes-per-file
export class DoBackAction implements Action {
  public readonly type = DO_BACK;

  constructor(public payload: IApp) { }
}

// tslint:disable-next-line:max-classes-per-file
export class DoBackCompleteAction implements Action {
  public readonly type = DO_BACK_COMPLETE;

  constructor(public payload: IApp) { }
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type Actions
= ChangeTabTitleAction
  | ChangeTabTitleCompleteAction
  | DoNextAction
  | DoNextCompleteAction
  | DoBackAction
  | DoBackCompleteAction
;
