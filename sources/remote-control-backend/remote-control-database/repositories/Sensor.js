const RecordBase = require('./Base/RecordBase');

const Sensor = require('../models/Sensor');

class SensorRepository extends RecordBase {
  find(query) {
    return this._model.find(query).populate('node');
  }
}

const sensor = new SensorRepository(Sensor);

module.exports = sensor;
