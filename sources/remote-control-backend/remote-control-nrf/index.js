const Nrf = require('./nrf');
const createObservable = require('./dataObservable');

module.exports = {
  Nrf,
  start: () => {
    createObservable(Nrf);
  },
};
