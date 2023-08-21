import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Counter from "../components/counter";
import Name from "../components/name";
import Rikmorty from "../components/rikmorty";
import Main from "./main";
import Header from "./main/header";
import { Routes } from "../routes";
import Blog from "./blog";
import { POPUP_CONTENT } from "../redux/general/general.action";
import Popup from "./popup";
import initialState from "../redux/general/general.reducer"

type ComponentType = typeof initialState.initialState.popup.component;

class PopupBody extends React.Component {

  render() {
    return <div>
      YES
    </div>
  }
}


interface Props {

  //mapDispatchToProps
  POPUP_CONTENT: (component: ComponentType) => void;
}

class App extends React.Component<Props>{

  render() {
    const { POPUP_CONTENT } = this.props;

    return <div>
      <Header />

      <Main>
        <Switch>
          <Route path={Routes.blog} component={Blog} />
          <Route path={'/first'} component={Counter} />
          <Route path={'/second'} render={() =>
            <div>
              <React.Fragment>
                <Name />
                <Rikmorty />
              </React.Fragment>
            </div>}
          />
        </Switch>
      </Main>

      <div
        onClick={() => {
          POPUP_CONTENT(PopupBody)
        }}
      >footer</div>

      <Popup />
    </div>
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  POPUP_CONTENT: (component: ComponentType) => dispatch(POPUP_CONTENT(component))
})

export default connect(null, mapDispatchToProps)(App);
