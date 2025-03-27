import { Action } from '@ngrx/store';
import type { IApp } from '../models/app.model';
import type { ITab } from '../models/tab.model';
import type { IWebEvent } from '../models/web-event.model';

export const GOTO_APP = '[App] Go To App';
export const GOTO_APP_COMPLETE = '[App] Go To App Complete';
export const ADD_TAB = '[App] Add Tab';
export const ADD_TAB_COMPLETE = '[App] Add Tab Complete';
export const CHANGE_TAB_TITLE = '[App] Change Tab Title';
export const CHANGE_TAB_URL = '[App] Change Tab Url';
export const CHANGE_TAB_URL_FORCE = '[App] Change Tab Url Force';
export const CHANGE_TAB_URL_FORCE_COMPLETE = '[App] Change Tab Url Force Complete';
export const CHANGE_TAB_TITLE_COMPLETE = '[App] Change Tab Title Complete';
export const DO_NEXT = '[App] Do Next';
export const DO_NEXT_COMPLETE = '[App] Do Next Complete';
export const DO_BACK = '[App] Do Back';
export const DO_BACK_COMPLETE = '[App] Do Back Complete';
export const DO_RELOAD = '[App] Do Reload';
export const DO_RELOAD_COMPLETE = '[App] Do Reload Complete';
export const GOTO_TAB = '[App] Goto Tab';
export const GOTO_TAB_COMPLETE = '[App] Goto Tab Complete';
export const CLOSE_APP = '[App] Close App';
export const CLOSE_APP_COMPLETE = '[App] Close App Complete';
export const CLOSE_TAB = '[App] Close Tab';
export const CLOSE_TAB_COMPLETE = '[App] Close Tab Complete';
export const CHANGE_TAB_ICON = '[App] Change Tab Icon';
export const CHANGE_TAB_ICON_COMPLETE = '[App] Change Tab Icon Complete';
export const CLOSE_OTHER_TABS = '[App] Close Other Tabs';
export const CLOSE_OTHER_TABS_COMPLETE = '[App] Close Other Tabs Complete';
export const CLOSE_OTHER_TABS_ALL_APPS = '[App] Close Other Tabs All Apps';
export const CLOSE_OTHER_TABS_ALL_APPS_COMPLETE = '[App] Close Other Tabs All Apps Complete';
export const CLOSE_OTHER_APPS = '[App] Close Other Apps';
export const CLOSE_OTHER_APPS_COMPLETE = '[App] Close Other Apps Complete';
export const DOM_READY = '[App] Dom Ready';
export const CLEAR_SUGGESTIONS = '[App] Clear Suggestions';
export const GET_SUGGESTIONS = '[App] Get Suggestions';
export const GET_SUGGESTIONS_COMPLETE = '[App] Get Suggestions Complete';

// tslint:disable-next-line:max-classes-per-file
export class GotoAppAction implements Action {
  public readonly type = GOTO_APP;

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
export class CloseAppAction implements Action {
  public readonly type = CLOSE_APP;

  constructor(public payload: IApp) { }
}

// tslint:disable-next-line:max-classes-per-file
export class CloseAppCompleteAction implements Action {
  public readonly type = CLOSE_APP_COMPLETE;

  constructor(public payload: IApp) { }
}

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
export class DoReloadAction implements Action {
  public readonly type = DO_RELOAD;

  constructor(public payload: IApp) { }
}

// tslint:disable-next-line:max-classes-per-file
export class DoReloadCompleteAction implements Action {
  public readonly type = DO_RELOAD_COMPLETE;

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

// tslint:disable-next-line:max-classes-per-file
export class CloseOtherTabsAllAppsAction implements Action {
  public readonly type = CLOSE_OTHER_TABS_ALL_APPS;

  constructor(public payload: ITab) { }
}

// tslint:disable-next-line:max-classes-per-file
export class CloseOtherTabsAllAppsCompleteAction implements Action {
  public readonly type = CLOSE_OTHER_TABS_ALL_APPS_COMPLETE;

  constructor(public payload: ITab) { }
}

// tslint:disable-next-line:max-classes-per-file
export class CloseOtherAppsAction implements Action {
  public readonly type = CLOSE_OTHER_APPS;

  constructor(public payload: IApp) { }
}

// tslint:disable-next-line:max-classes-per-file
export class CloseOtherAppsCompleteAction implements Action {
  public readonly type = CLOSE_OTHER_APPS_COMPLETE;

  constructor(public payload: IApp) { }
}

// tslint:disable-next-line:max-classes-per-file
export class DomReadyAction implements Action {
  public readonly type = DOM_READY;

  constructor(public payload?: IWebEvent) { }
}

// tslint:disable-next-line:max-classes-per-file
export class ClearSuggestionsAction implements Action {
  public readonly type = CLEAR_SUGGESTIONS;
}

// tslint:disable-next-line:max-classes-per-file
export class GetSuggestionsAction implements Action {
  public readonly type = GET_SUGGESTIONS;

  constructor(public payload: string) { }
}

// tslint:disable-next-line:max-classes-per-file
export class GetSuggestionsCompleteAction implements Action {
  public readonly type = GET_SUGGESTIONS_COMPLETE;

  constructor(public payload: any[]) { }
}

export type Actions =
  | GotoAppAction
  | AddTabAction
  | AddTabCompleteAction
  | CloseAppAction
  | CloseAppCompleteAction
  | ChangeTabTitleAction
  | ChangeTabUrlAction
  | ChangeTabTitleCompleteAction
  | DoNextAction
  | DoNextCompleteAction
  | DoBackAction
  | DoBackCompleteAction
  | DoReloadAction
  | DoReloadCompleteAction
  | GotoTabAction
  | GotoTabCompleteAction
  | CloseTabAction
  | CloseTabCompleteAction
  | ChangeTabIconAction
  | ChangeTabIconCompleteAction
  | DoChangeUrlAction
  | DoChangeUrlCompleteAction
  | CloseOtherTabsAction
  | CloseOtherTabsCompleteAction
  | CloseOtherTabsAllAppsAction
  | CloseOtherTabsAllAppsCompleteAction
  | CloseOtherAppsAction
  | CloseOtherAppsCompleteAction
  | DomReadyAction
  | ClearSuggestionsAction
  | GetSuggestionsAction
  | GetSuggestionsCompleteAction;
