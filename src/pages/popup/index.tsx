import React from "react";
import { connect } from "react-redux";

import { RootState } from "../../redux";
import PopupHoc from "../../HOCs/popup.hoc";


interface Props {
  //mapStateToProps
  isPopup: boolean
}

class Popup extends React.Component<Props> {

  render() {

    const { isPopup } = this.props;

    return <>
      {isPopup && <PopupHoc />}
    </>
  }
}

const mapStateToProps = (state: RootState) => ({
  isPopup: state.general.popup.isState
})

export default connect(mapStateToProps)(Popup)