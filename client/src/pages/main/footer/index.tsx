import React from "react";
import "./index.less";
import BtnOpenPopup from "../../../HOCs/popup.hoc/BtnOpenPopup";


class PopupBody extends React.Component {

  render() {
    return <div>
      YES
    </div>
  }
}

class Footer extends React.Component {

  render() {
    return <div
      className="footer"
    >
      <div
        style={{ "width": '20px', 'height': "20px", "position": "relative" }}
      >

        <BtnOpenPopup
          component={PopupBody}
          styles={{ "animation": "1s popup__body_willMount" }}
          timer={1000}
        />
      </div>
      footer</div>
  }
}

export default Footer;