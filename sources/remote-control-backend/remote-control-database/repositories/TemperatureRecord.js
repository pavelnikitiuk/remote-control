const RecordBase = require('./Base/RecordBase');

const Record = require('../models2/Record');

class TemperatureRecord extends RecordBase {
  find(query) {
    const tempQuery = Object.assign({}, query, { messageType: 'T' });
    return super
        .find(tempQuery)
        .sort('-date')
        .limit(200);
  }

  findByUrlQuery(urlQuery, aditionalQuery = {}) {
    const query = Object.assign({}, super.parseQuery(urlQuery), aditionalQuery);
    return this.find(query);
  }

  getLastRecordBySensorId(sensorId) {
    const query = { sensorId };
    return super.findOne(query);
  }

  add(sensorId, value) {
    const model = {
      sensorId,
      value,
      type: 'T',
      date: +new Date(),
    };
    return super.add(model);
  }
}

module.exports = new TemperatureRecord(Record);
