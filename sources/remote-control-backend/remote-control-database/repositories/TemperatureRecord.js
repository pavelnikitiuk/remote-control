const RecordBase = require('./Base/RecordBase');

const Record = require('../models/Recording');

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

  add(sensor, value) {
    const model = {
      sensor,
      value,
      messageType: 'T',
      date: +new Date(),
    };
    return super.add(model);
  }
}

module.exports = new TemperatureRecord(Record);
