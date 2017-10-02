import { createAction } from 'redux-actions';
import { SET_SENSORS } from 'consts/sensors';

import http from 'services/http';

export const setSensors = createAction(SET_SENSORS);

export const requestSensors = () => dispatch =>
  http.sensors.all().then(sensors => dispatch(setSensors(sensors)));
