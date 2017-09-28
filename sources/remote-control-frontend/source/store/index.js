import { createStore, compose, applyMiddleware } from 'redux';
import reducers from 'reducers';
import middlewares from 'middlewares';

const states = middlewares.map(middleware => applyMiddleware(middleware));

/* eslint-disable */
if (isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  states.push(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());
}
/* eslint-enable */


export default (initialState) => {
  const store = createStore(reducers, initialState, compose(...states));
  if (module.hot) {
    module.hot.accept('reducers', () => {
      /* eslint-disable */
      const nextRootReducer = require('reducers/index').default;
      /* eslint-enable */

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};
