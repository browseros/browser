import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Action } from '@ngrx/store';

@Injectable()

export class AppActions {

  public static NEW_URL = '[App] New Url';
  public static CLOSE_APP = '[App] Close App';
  public static CLOSE_TAB = '[App] Close Tab';
  public setValue(value: string): Action {
    return {
      type: HomeActions.SET_VALUE,
      payload: value
    };
  }
}
