import React, { Component } from 'react';

import Dashboard from 'icons/dashboard.svg';

import Link from './Link';

const navRoutes = [
  {
    name: 'Dashboard',
    route: '/',
    Icon: Dashboard,
  },
];

/* eslint-disable react/prefer-stateless-function */
export default class NavigationBar extends Component {
  render() {
    return (
      <header className="navigation-bar">
        <ul className="navigation-bar__routes">
          {navRoutes.map(({ name, route, Icon }) => (
            <Link className="navigation-bar__route" key={route} to={route} Icon={Icon}>
              {name}
            </Link>
          ))}
        </ul>
      </header>
    );
  }
}
