import { Action, InitialState } from "./general.types";

const initialState: InitialState = {
  popup: {
    isState: true,
    component: null,
    stylePopup: undefined,
    stylePopupBody: undefined,
  },
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'POPUP_CHANGE':
      return {
        ...state,
        popup: { ...state.popup, isState: action.payload }
      }
    case 'POPUP_CONTENT':
      return {
        ...state,
        popup: { ...state.popup, isState: true, component: action.payload }
      }
    case 'POPUP_STYLES_POPUP':
      return {
        ...state,
        popup: { ...state.popup, stylePopup: action.payload }
      }
    case 'POPUP_STYLES_POPUPBODY':
      return {
        ...state,
        popup: { ...state.popup, stylePopupBody: action.payload }
      }
    default:
      return state
  }
};

export default { reducer, initialState };