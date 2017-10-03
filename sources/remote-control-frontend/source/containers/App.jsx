import React, { Component } from 'react';
import Router from 'router';

import NavigationBar from 'components/NavigationBar';
import Header from 'components/Header';

/* eslint-disable react/prefer-stateless-function */
export default class App extends Component {
  render() {
    return (
      <main className="app">
        <Header />
        <NavigationBar />
        <Router />
      </main>
    );
  }
}
