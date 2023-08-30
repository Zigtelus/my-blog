import { ComponentType, Reducer, ReducerAction } from "react";

//these styles are only for "initialState" in "Reducer"

interface Popup {
  isState: boolean;
  component: ComponentType | null;
  stylesPopupBg: {
    [name: string]: string;
  } | undefined;
  stylePopupBody: {
    [name: string]: string;
  } | undefined;
  timer: number;
};

export interface InitialState {
  popup: Popup
};

// get a list of key types
type PopupKeys = keyof Popup;
export interface Action {
  payload: Popup[PopupKeys];
  type: any;
};