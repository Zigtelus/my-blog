import React from "react";
import "./index.less";
import { connect } from "react-redux";
import { POPUP_CHANGE, POPUP_STYLES_POPUP, POPUP_STYLES_POPUPBODY } from "../../redux/general/general.action";
import { RootState } from "../../redux";
import general from "../../redux/general/general.reducer";

//types for mapDispatchToProps
const { isState, stylePopup, component } = general.initialState.popup;
type IsPopup = typeof isState;
type Styles = typeof stylePopup;
type ComponentType = typeof component;

type NewStyles = Exclude<Styles, null>;

interface Props {
  PopupBody: ComponentType;
  stylesForPopup: Styles; //remove "null" from Styles
  stylesForPopupBody?: Styles;

  //mapDispatchToProps
  chageIsPopup: (isPopup: IsPopup) => void;
  changeStylePopup: (style: NewStyles) => void;
  changeStylePopupBody: (style: NewStyles) => void;
}

interface State {
  isPopup: IsPopup;
}

class PopupHoc extends React.Component<Props, State> {

  render() {
    const { PopupBody, stylesForPopup, stylesForPopupBody } = this.props;
    const { chageIsPopup, changeStylePopup, changeStylePopupBody } = this.props;

    return <div className="popup" style={stylesForPopup}>
      <div className="popup__body" style={stylesForPopupBody}>
        <span
          className="popupClose"
          // onClick={() => chageIsPopup(false)}
          // onClick={() => changeStylePopup({ "animation": "0.3s popup_UnMount" })}
          onClick={() => changeStylePopupBody({ "animation": "0.3s popup_UnMount" })}
        ></span>
        {!!PopupBody && <PopupBody />}
      </div>
    </div>
  }
}

const mapStateToProps = (state: RootState) => ({
  PopupBody: state.general.popup.component,
  stylesForPopup: state.general.popup.stylePopup,
  stylesForPopupBody: state.general.popup.stylePopupBody
})

const mapDispatchToProps = (dispatch: any) => ({
  chageIsPopup: (isPopup: IsPopup) => dispatch(POPUP_CHANGE(isPopup)),
  changeStylePopup: (styles: Styles) => dispatch(POPUP_STYLES_POPUP(styles)),
  changeStylePopupBody: (styles: Styles) => dispatch(POPUP_STYLES_POPUPBODY(styles))
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupHoc);