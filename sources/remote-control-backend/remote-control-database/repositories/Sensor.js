const RecordBase = require('./Base/RecordBase');

const Sensor = require('../models/Sensor');

class SensorRepository extends RecordBase {
  find(query) {
    return this._model.find(query).populate('records');
  }
}

const sensor = new SensorRepository(Sensor);

// sensor.add({
//   _id: 1,
//   name: 'Temperature Sensor',
//   type: 'T',
//   description: 'Inside termometr',
// });

module.exports = sensor;
