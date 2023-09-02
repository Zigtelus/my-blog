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
import BlogPage from "../components/blogPage";
import Footer from "./main/footer";




interface Props extends RouteComponentProps { }

class App extends React.Component<Props>{

  render() {

    return <div>
      <Header />

      <Main>
        <Switch>
          <Route exact path={`${Routes.home}`} render={() => <div>{Routes.home}</div>} />
          <Route exact path={Routes.blog} component={Blog} />
          <Route path={`${Routes.blog}/:id`} component={BlogPage} />
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


      <Footer />

      <Popup />
    </div>
  }
}

export default withRouter(App);
