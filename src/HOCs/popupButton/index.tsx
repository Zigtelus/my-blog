import React from "react";
import { connect } from "react-redux";
import general from "../../redux/general/general.reducer";
import { POPUP_CHANGE, POPUP_STYLES_POPUP, POPUP_STYLES_POPUPBODY, POPUP_TIMER } from "../../redux/general/general.action";


const { isState, stylePopup, component, timer } = general.initialState.popup;
type IsPopup = typeof isState;
type Styles = typeof stylePopup;
type ComponentType = typeof component;
type Timer = typeof timer;

type NewStyles = Exclude<Styles, null>;

interface Props {

  //mapDispatchToProps
  chageIsPopup: (isPopup: IsPopup) => void;
  changeStylePopup: (style: NewStyles) => void;
  changeStylePopupBody: (style: NewStyles) => void;
  changeTimer: (timer: Timer) => void;
}

class PopupButton extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.handeClick = this.handeClick.bind(this);
  }

  handeClick() {
    const { changeStylePopupBody, changeTimer } = this.props

    changeStylePopupBody({ "animation": "0.3s popup_UnMount" });
    changeTimer(300)
  }

  render() {
    const { handeClick } = this;

    return <button
      style={{ 'width': '100%', 'height': '100%' }}
      onClick={handeClick}
    >
      close
    </button>
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  chageIsPopup: (isPopup: IsPopup) => dispatch(POPUP_CHANGE(isPopup)),
  changeStylePopup: (styles: Styles) => dispatch(POPUP_STYLES_POPUP(styles)),
  changeStylePopupBody: (styles: Styles) => dispatch(POPUP_STYLES_POPUPBODY(styles)),
  changeTimer: (timer: Timer) => dispatch(POPUP_TIMER(timer))
})

export default connect(null, mapDispatchToProps)(PopupButton);