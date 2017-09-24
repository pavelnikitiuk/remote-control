const api = require('express').Router();
const { repositories } = require('remote-control-database');

const Recording = require('../base/Recording');

const { TemperatureRecord } = repositories;

module.exports = new Recording(TemperatureRecord, api, '/').app;
