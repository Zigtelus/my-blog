import React from "react";
import { Route, RouteComponentProps, Switch, withRouter } from "react-router-dom";

import Counter from "../components/counter";
import Name from "../components/name";
import Rikmorty from "../components/rikmorty";
import Main from "./main";
import Header from "./main/header";
import { Routes } from "../routes";
import Blog from "./blog";
import Popup from "./popup";
import BtnOpenPopup from "../HOCs/popup.hoc/BtnOpenPopup";



class PopupBody extends React.Component {

  render() {
    return <div>
      YES
    </div>
  }
}


interface Props extends RouteComponentProps { }

class App extends React.Component<Props>{

  render() {

    return <div>
      <Header />

      <Main>
        <Switch>
          <Route exact path={`${Routes.home}`} render={() => <div>{Routes.home}</div>} />
          <Route exact path={Routes.blog} component={Blog} />
          <Route path={`${Routes.blog}/:id`} render={() =>
            <div>
              11
            </div>
          } />
          <Route path={'/first'} component={Counter} />
          <Route path={'/second'} render={() =>
            <div>
              <React.Fragment>
                <Name />
                <Rikmorty />
              </React.Fragment>
            </div>}
          />

          <Route path="*" render={() => <div>404</div>} />
        </Switch>
      </Main>

      <div
        style={{ "position": "relative" }}
      >
        <BtnOpenPopup
          component={PopupBody}
          styles={{ "animation": "1s popup__body_willMount" }}
          timer={1000}
        />
        footer</div>

      <Popup />
    </div>
  }
}

export default withRouter(App);
