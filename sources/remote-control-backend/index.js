const express = require('express');

const api = require('remote-control-api');
const { get } = require('remote-control-config');
const { connect } = require('remote-control-database');
const { start: nrfStart } = require('remote-control-nrf');
const socket = require('remote-control-socket');

const app = express();

app.use('/', api);

// connect to database
connect(get('connectionString'));
/* eslint-disable */
// start listening nrf modules
nrfStart();

module.exports = {
  app,
  initializeSocket: socket.initialize,
};
