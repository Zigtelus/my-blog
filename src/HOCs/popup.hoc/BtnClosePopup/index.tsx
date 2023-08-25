import React from "react";
import { connect } from "react-redux";
import s from "./index.module.less";
import general from "../../../redux/general/general.reducer";
import { POPUP_CHANGE, POPUP_STYLES_POPUP, POPUP_STYLES_POPUPBODY, POPUP_TIMER } from "../../../redux/general/general.action";


const { isState, stylesPopupBg, timer } = general.initialState.popup;
type IsPopup = typeof isState;
type Styles = typeof stylesPopupBg;
type Timer = typeof timer;

type NewStyles = Exclude<Styles, null>;

interface Props {

  styles: Styles;

  //mapDispatchToProps
  chageIsPopup: (isPopup: IsPopup) => void;
  changeStylePopup: (style: NewStyles) => void;
  changeStylePopupBody: (style: NewStyles) => void;
  changeTimer: (timer: Timer) => void;
}

class BtnClosePopup extends React.Component<Props> {

  constructor(props: Props) {
    super(props);
    this.handeClick = this.handeClick.bind(this);
  }

  handeClick() {
    const { changeStylePopupBody, changeTimer, styles } = this.props

    changeStylePopupBody(styles);
  }

  render() {
    const { handeClick } = this;

    return <button
      className={s.btn}
      onClick={handeClick}
    >
    </button>
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  chageIsPopup: (isPopup: IsPopup) => dispatch(POPUP_CHANGE(isPopup)),
  changeStylePopup: (styles: Styles) => dispatch(POPUP_STYLES_POPUP(styles)),
  changeStylePopupBody: (styles: Styles) => dispatch(POPUP_STYLES_POPUPBODY(styles)),
  changeTimer: (timer: Timer) => dispatch(POPUP_TIMER(timer))
})

export default connect(null, mapDispatchToProps)(BtnClosePopup);