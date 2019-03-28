import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './components/Button';

export function render() {
  ReactDOM.render(<Button />, document.getElementById('app'));
}
