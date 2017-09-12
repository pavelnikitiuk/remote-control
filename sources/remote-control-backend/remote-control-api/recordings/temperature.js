const api = require('express').Router();
const { repositories } = require('remote-control-database');

const Base = require('../base/Base');

const { TemperatureRecord } = repositories;

const { get } = Base;

get(api, TemperatureRecord);

module.exports = api;
