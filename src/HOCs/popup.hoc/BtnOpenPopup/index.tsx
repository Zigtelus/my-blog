import React from "react";
import { connect } from "react-redux";
import s from "./index.module.less";
import general from "../../../redux/general/general.reducer";
import { POPUP_CONTENT, POPUP_STYLES_POPUPBODY, POPUP_TIMER } from "../../../redux/general/general.action";

// DONT FORGOT ADD "position: relative" FOR PARENT THIS ELEMENT

const { stylesPopupBg, component, timer } = general.initialState.popup;
type Styles = typeof stylesPopupBg;
type ComponentType = typeof component;
type Timer = typeof timer;

interface Props {
  styles: Styles;
  component: ComponentType;
  timer: number;

  //mapDispatchToProps
  POPUP_CONTENT: (component: ComponentType) => void;
  POPUP_STYLES_POPUPBODY: (styles: Styles) => void;
  POPUP_TIMER: (timer: Timer) => void;
}

class BtnOpenPopup extends React.Component<Props> {

  componentDidMount(): void {
    const { POPUP_TIMER, timer } = this.props;
    POPUP_TIMER(timer)
  }

  render() {
    const { POPUP_CONTENT, POPUP_STYLES_POPUPBODY, component, styles } = this.props;

    return <div
      className={s.btn}
      onClick={() => {
        POPUP_CONTENT(component)
        POPUP_STYLES_POPUPBODY(styles);
      }}
    >
    </div>
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  POPUP_CONTENT: (component: ComponentType) => dispatch(POPUP_CONTENT(component)),
  POPUP_STYLES_POPUPBODY: (styles: Styles) => dispatch(POPUP_STYLES_POPUPBODY(styles)),
  POPUP_TIMER: (timer: Timer) => dispatch(POPUP_TIMER(timer))
})

export default connect(null, mapDispatchToProps)(BtnOpenPopup);