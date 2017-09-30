const express = require('express');

const api = require('remote-control-api');
const { get } = require('remote-control-config');
const { connect } = require('remote-control-database');
const { start: nrfStart } = require('remote-control-nrf');

const app = express();

app.use('/', api);

// connect to database
connect(get('connectionString'));

// start listening nrf modules
nrfStart();

module.exports = app;
