import PopupTypes from "./general.reducer";

//get objects to convert to types
const { isState, component, stylePopup, stylePopupBody } = PopupTypes.initialState.popup;


type isPopupType = typeof isState;
const POPUP_CHANGE = (isPopup: isPopupType) => ({
  payload: isPopup,
  type: 'POPUP_CHANGE'
});

type ComponentType = typeof component;
const POPUP_CONTENT = (component: ComponentType) => ({
  payload: component,
  type: 'POPUP_CONTENT'
});

type StylesType = typeof stylePopup;
const POPUP_STYLES_POPUP = (component: StylesType) => ({
  payload: component,
  type: 'POPUP_STYLES_POPUP'
});

type StylePopupBody = typeof stylePopupBody;
const POPUP_STYLES_POPUPBODY = (component: StylePopupBody) => ({
  payload: component,
  type: 'POPUP_STYLES_POPUPBODY'
});

export { POPUP_CHANGE, POPUP_CONTENT, POPUP_STYLES_POPUP, POPUP_STYLES_POPUPBODY };