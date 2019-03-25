const api = require('express').Router();
const { get } = require('remote-control-config');

const cache = require('../middlewares/cacheRecordingQueries');

const Record = require('../base/Record');

api.use(cache(get('recordings.temperature')));

class Temperature extends Record {
  getResource(resources) {
    return resources.TemperatureRecord;
  }
}

module.exports = new Temperature(api).app;
