import { ComponentType, Reducer, ReducerAction } from "react";

//these styles are only for "initialState" in "Reducer"

export type InitialState = {
  popup: Popup
};

type Popup = {
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

// get a list of key types
type PopupKeys = keyof Popup;
export type Action = {
  payload: Popup[PopupKeys];
  type: any;
};