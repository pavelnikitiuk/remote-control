const Nrf = require('./nrf');
const { createObservable, updateObservers } = require('./messageObservable');

const { repositories } = require('remote-control-database');
const { logger } = require('remote-control-services');
const socket = require('remote-control-socket');

const dependencies = {
  repositories,
  logger,
  socket,
};

module.exports = {
  Nrf,
  start: (observers) => {
    createObservable(Nrf, dependencies, observers);
  },
  updateObservers: (observers) => updateObservers(observers),
};
