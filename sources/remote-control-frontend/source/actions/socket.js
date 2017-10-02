import { createAction } from 'redux-actions';

import { TEMPERATURE } from 'consts/socket';

export const updateTemperature = createAction(TEMPERATURE);
