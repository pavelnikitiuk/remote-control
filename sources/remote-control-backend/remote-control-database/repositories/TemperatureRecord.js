const RecordBase = require('./Base/RecordBase');

const TemperatureRecordModel = require('../models/Recording');

class TemperatureRecord extends RecordBase {
  find(query) {
    const tempQuery = Object.assign({}, query, {messageType: 'T'});
    return super.find(tempQuery);
  }

  findByUrlQuery(urlQuery) {
    const query = super.parseQuery(urlQuery);
    return this.find(query);
  }

  add(sensorId, value) {
    const model = {
      sensorId,
      value,
      messageType: 'T',
      date: +new Date(),
    };
    return super.add(model);
  }
}

module.exports = new TemperatureRecord(TemperatureRecordModel);
