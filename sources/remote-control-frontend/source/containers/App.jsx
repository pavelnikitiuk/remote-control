import React, { Component } from 'react';
import Counter from 'components/Counter';

/* eslint-disable react/prefer-stateless-function */
export default class App extends Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}
