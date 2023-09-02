import React from "react";
import s from "./index.module.less";
import { Link } from "react-router-dom";
import { Routes, RoutesType } from "../../../routes";

class Header extends React.Component {
  routes: RoutesType = Routes;

  // Making links for ul
  makeLinks(routes: RoutesType) {
    return (Object.keys(routes) as []).map(route =>
      <li key={route}>
        <Link to={routes[route]}>{route}</Link>
      </li>
    );
  }

  render() {
    const { makeLinks, routes } = this;
    return (
      <header className={s.header}>
        <nav className={s.nav}>
          <ul>
            {makeLinks(routes)}
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
