const Nrf = require('./nrf');
const getObserverCallback = require('./dataObservable');

module.exports = {
  Nrf,
  getObserverCallback,
  start: () => {
    Nrf.addListener(getObserverCallback());
  },
};
