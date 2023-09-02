import React from "react";
import "./index.less";
import { connect } from "react-redux";

import { POPUP_CHANGE } from "../../redux/general/general.action";
import { RootState } from "../../redux";
import general from "../../redux/general/general.reducer";
import PopupButton from "./BtnClosePopup";
import BtnClosePopup from "./BtnClosePopup";

//types for mapDispatchToProps
const { isState, stylesPopupBg, component, timer } = general.initialState.popup;
type IsPopup = typeof isState;
type Styles = typeof stylesPopupBg;
type ComponentType = typeof component;
type Timer = typeof timer;

interface Props {
  PopupBody: ComponentType;
  stylesPopupBg: Styles; //remove "null" from Styles
  stylesPopupBody?: Styles;
  timer: Timer;

  //mapDispatchToProps
  POPUP_CHANGE: (isPopup: IsPopup) => void;
}

interface State {
  isPopup: IsPopup;
}

class PopupHoc extends React.Component<Props, State> {

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    if (prevProps !== this.props) {

      const { timer } = this.props;
      const { POPUP_CHANGE } = this.props;
      console.log(timer)
      setTimeout(() => POPUP_CHANGE(false), timer);
    }
  }

  render() {
    const { PopupBody, stylesPopupBg, stylesPopupBody } = this.props;

    return <div className="popup_bg" style={stylesPopupBg}>
      <BtnClosePopup styles={{ "animation": "1s popup_UnMount" }} />
      <div className="popup__body" style={stylesPopupBody}>
        <span
          className="popupClose"
        >
          <BtnClosePopup
            styles={{ "animation": "1s popup_UnMount" }}
          />
        </span>
        {!!PopupBody && <PopupBody />}
      </div>
    </div>
  }
}

const mapStateToProps = (state: RootState) => {
  const { component, stylesPopupBg, stylePopupBody, timer } = state.general.popup;

  return {
    PopupBody: component,
    stylesPopupBg: stylesPopupBg,
    stylesPopupBody: stylePopupBody,
    timer: timer,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  POPUP_CHANGE: (isPopup: IsPopup) => dispatch(POPUP_CHANGE(isPopup)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupHoc);