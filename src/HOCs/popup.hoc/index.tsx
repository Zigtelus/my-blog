import React from "react";
import "./index.less";
import { connect } from "react-redux";

import { POPUP_CHANGE } from "../../redux/general/general.action";
import { RootState } from "../../redux";
import general from "../../redux/general/general.reducer";
import PopupButton from "../popupButton";

//types for mapDispatchToProps
const { isState, stylePopup, component, timer } = general.initialState.popup;
type IsPopup = typeof isState;
type Styles = typeof stylePopup;
type ComponentType = typeof component;
type Timer = typeof timer;

interface Props {
  PopupBody: ComponentType;
  stylesForPopup: Styles; //remove "null" from Styles
  stylesForPopupBody?: Styles;
  timer: Timer;

  //mapDispatchToProps
  chageIsPopup: (isPopup: IsPopup) => void;
}

interface State {
  isPopup: IsPopup;
}

class PopupHoc extends React.Component<Props, State> {

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
    if (prevProps !== this.props) {

      const { timer } = this.props;
      const { chageIsPopup } = this.props;
      setTimeout(() => chageIsPopup(false), timer);
    }
  }

  render() {
    const { PopupBody, stylesForPopup, stylesForPopupBody } = this.props;

    return <div className="popup" style={stylesForPopup}>
      <div className="popup__body" style={stylesForPopupBody}>
        <span
          className="popupClose"
        ><PopupButton /></span>
        {!!PopupBody && <PopupBody />}
      </div>
    </div>
  }
}

const mapStateToProps = (state: RootState) => {
  const { component, stylePopup, stylePopupBody, timer } = state.general.popup;

  return {
    PopupBody: component,
    stylesForPopup: stylePopup,
    stylesForPopupBody: stylePopupBody,
    timer: timer,
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  chageIsPopup: (isPopup: IsPopup) => dispatch(POPUP_CHANGE(isPopup)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PopupHoc);