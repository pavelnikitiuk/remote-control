import { List, Map, fromJS } from 'immutable';
import { SET_SENSORS } from 'consts/sensors';
import { TEMPERATURE } from 'consts/socket';

const setActions = [SET_SENSORS];

const getCollectionKey = action => action.split('.')[0];

const createInitialState = () => {
  const state = setActions.reduce((acc, action) => {
    const collectionName = getCollectionKey(action);
    acc[collectionName] = List();
    return acc;
  }, {});
  return Map(state);
};

const setInCollection = (type, payload, state) => {
  const key = getCollectionKey(type);
  return state.set(key, fromJS(payload));
};

const setSensorValue = (payload, state) =>
  state.update('sensors', sensors =>
    sensors.update(sensors.findIndex(sensor => sensor.get('id') === payload.id), sensor =>
      sensor && sensor.set('value', payload.value),
    ),
  );

export default function (state = createInitialState(), { type, payload }) {
  if (setActions.indexOf(type) !== -1) {
    return setInCollection(type, payload, state);
  }

  switch (type) {
    case TEMPERATURE: {
      return setSensorValue(payload, state);
    }
    default:
      return state;
  }
}
