import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import BrowserRouter from 'react-router-dom/BrowserRouter';

import store from 'store';
import App from 'containers/App';

import 'normalize.css';
import 'reset-css/reset.css';
import './index.css';


const render = (Component) => {
  /* eslint-disable react/jsx-filename-extension */
  ReactDOM.render(
    <AppContainer>
      <Provider store={store()}>
        <BrowserRouter>
          <Component />
        </BrowserRouter>
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('containers/App', () => {
    render(App);
  });
}
