import { createStore, compose } from 'redux';
import reducers from 'reducers';
/* eslint-disable */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/* eslint-enable */

export default (initialState) => {
  const store = createStore(reducers, initialState, composeEnhancers());
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      /* eslint-disable */
      const nextRootReducer = require('reducers/index').default;
      /* eslint-enable */

      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};
