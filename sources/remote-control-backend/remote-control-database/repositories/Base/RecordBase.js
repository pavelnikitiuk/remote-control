const Base = require('./index');
const queryConverter = require('./../../services/queryToMongoConverter');

module.exports = class RecordBase extends Base {
  parseQuery(query) {
    return queryConverter(query);
  }
};
