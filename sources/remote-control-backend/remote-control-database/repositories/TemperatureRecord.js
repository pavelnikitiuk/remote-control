const RecordBase = require('./Base/RecordBase');

const TemperatureRecordModel = require('../models/recordings/Temperature');

class TemperatureRecord extends RecordBase {
  add(temperatureNote) {
    const { fromNode, temperature, messageType } = temperatureNote;
    const model = {
      sensorId: fromNode,
      value: temperature,
      messageType,
      date: new Date(),
    };
    return super.add(model);
  }
}

module.exports = new TemperatureRecord(TemperatureRecordModel);
