const api = require('express').Router();
const { repositories } = require('remote-control-database');
const { get } = require('remote-control-config');

const cache = require('../middlewares/cacheRecordingQueries');

const Recording = require('../base/Recording');

const { TemperatureRecord } = repositories;

api.use(cache(get('recordings.temperature')));

module.exports = new Recording(TemperatureRecord, api, '/').app;
