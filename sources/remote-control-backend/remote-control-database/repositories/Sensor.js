const RecordBase = require('./Base/RecordBase');

const Sensor = require('../models2/Sensor');

class SensorRepository extends RecordBase {
  find(query) {
    return this._model.find(query).populate('records');
  }
}

const sensor = new SensorRepository(Sensor);

module.exports = sensor;
