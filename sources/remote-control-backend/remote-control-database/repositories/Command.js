const Base = require('./Base');

const Command = require('../models2/Command');

class TemperatureRecord extends Base {
  add(sensorId, script) {
    const model = {
      script,
      sensors: [sensorId],
    };
    return super.add(model);
  }
}

module.exports = new TemperatureRecord(Command);
