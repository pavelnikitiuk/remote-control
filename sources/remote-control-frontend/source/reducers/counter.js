import { Map } from 'immutable';
import { handleActions } from 'redux-actions';

import { DECREMENT, INCREMENT } from 'consts/counter';

const initialState = Map({ count: 0 });

export default handleActions({
  [INCREMENT]: state => state.update('count', value => value + 1),
  [DECREMENT]: state => state.update('count', value => value - 1),
}, initialState);

