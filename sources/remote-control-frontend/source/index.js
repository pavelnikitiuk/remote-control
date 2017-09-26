import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import store from 'store';
import App from 'containers/App';

const render = (Component) => {
  /* eslint-disable react/jsx-filename-extension */
  ReactDOM.render(
    <AppContainer>
      <Provider store={store()}>
        <Component />
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
