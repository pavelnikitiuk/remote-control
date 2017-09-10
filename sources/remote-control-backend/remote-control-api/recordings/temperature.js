const api = require('express').Router();

const Base = require('../base/Base');
const TemperatureRecord = require('mongo/repositories/TemperatureRecord');

const { get } = Base;

get(api, TemperatureRecord);

module.exports = api;
