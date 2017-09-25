import { Action } from '@ngrx/store';
import { IApp } from '../models/app.model';
import { IWebEvent } from '../models/web-event.model';
import { ITab } from '../models/tab.model';

export const CHANGE_TAB_TITLE =            '[Event] Change Tab Title';
export const CHANGE_TAB_URL =              '[Event] Change Tab Url';
export const CHANGE_TAB_URL_FORCE =        '[Event] Change Tab Url Force';
export const CHANGE_TAB_URL_FORCE_COMPLETE =        '[Event] Change Tab Url Force Complete';
export const CHANGE_TAB_TITLE_COMPLETE =   '[Event] Change Tab Title Complete';
export const DO_NEXT =                     '[Event] Do Next';
export const DO_NEXT_COMPLETE =            '[Event] Do Next Complete';
export const DO_BACK =                     '[Event] Do Back';
export const DO_BACK_COMPLETE =            '[Event] Do Back Complete';
export const GOTO_TAB =                    '[Event] Goto Tab';
export const GOTO_TAB_COMPLETE =           '[Event] Goto Tab Complete';
export const CLOSE_TAB =                   '[Event] Close Tab';
export const CLOSE_TAB_COMPLETE =          '[Event] Close Tab Complete';
export const CHANGE_TAB_ICON =             '[Event] Change Tab Icon';
export const CHANGE_TAB_ICON_COMPLETE =    '[Event] Change Tab Icon Complete';
export const CLOSE_OTHER_TABS =            '[Event] Close Other Tabs';
export const CLOSE_OTHER_TABS_COMPLETE =   '[Event] Close Other Tabs Complete';

// tslint:disable-next-line:max-classes-per-file
export class ChangeTabTitleAction implements Action {
  public readonly type = CHANGE_TAB_TITLE;

  constructor(public payload: IWebEvent) { }
}

// tslint:disable-next-line:max-classes-per-file
export class ChangeTabUrlAction implements Action {
  public readonly type = CHANGE_TAB_URL;

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

// tslint:disable-next-line:max-classes-per-file
export class GotoTabAction implements Action {
  public readonly type = GOTO_TAB;

  constructor(public payload: ITab) { }
}

// tslint:disable-next-line:max-classes-per-file
export class GotoTabCompleteAction implements Action {
  public readonly type = GOTO_TAB_COMPLETE;

  constructor(public payload: ITab) { }
}

// tslint:disable-next-line:max-classes-per-file
export class CloseTabAction implements Action {
  public readonly type = CLOSE_TAB;

  constructor(public payload: ITab) { }
}

// tslint:disable-next-line:max-classes-per-file
export class CloseTabCompleteAction implements Action {
  public readonly type = CLOSE_TAB_COMPLETE;

  constructor(public payload: ITab) { }
}

// tslint:disable-next-line:max-classes-per-file
export class ChangeTabIconAction implements Action {
  public readonly type = CHANGE_TAB_ICON;

  constructor(public payload: IWebEvent) { }
}

// tslint:disable-next-line:max-classes-per-file
export class ChangeTabIconCompleteAction implements Action {
  public readonly type = CHANGE_TAB_ICON_COMPLETE;

  constructor(public payload: IWebEvent) { }
}

// tslint:disable-next-line:max-classes-per-file
export class DoChangeUrlAction implements Action {
  public readonly type = CHANGE_TAB_URL_FORCE;

  constructor(public payload: IWebEvent) { }
}

// tslint:disable-next-line:max-classes-per-file
export class DoChangeUrlCompleteAction implements Action {
  public readonly type = CHANGE_TAB_URL_FORCE_COMPLETE;

  constructor(public payload: IWebEvent) { }
}

// tslint:disable-next-line:max-classes-per-file
export class CloseOtherTabsAction implements Action {
  public readonly type = CLOSE_OTHER_TABS;

  constructor(public payload: ITab) { }
}

// tslint:disable-next-line:max-classes-per-file
export class CloseOtherTabsCompleteAction implements Action {
  public readonly type = CLOSE_OTHER_TABS_COMPLETE;

  constructor(public payload: ITab) { }
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
  | GotoTabAction
  | GotoTabCompleteAction
  | CloseTabAction
  | CloseTabCompleteAction
  | ChangeTabIconAction
  | ChangeTabIconCompleteAction
  | ChangeTabUrlAction
  | DoChangeUrlAction
  | DoChangeUrlCompleteAction
  | CloseOtherTabsAction
  | CloseOtherTabsCompleteAction
;
