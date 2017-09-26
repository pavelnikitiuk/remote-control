import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default initialState =>
  createStore(reducers, initialState, composeEnhancers());
