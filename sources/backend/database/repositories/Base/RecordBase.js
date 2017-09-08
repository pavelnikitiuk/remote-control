const Base = require('./index');

module.exports = class RecordBase extends Base {
  findByDateRange(startDate, endDate) {
    return super.find({ date: { $gt: startDate, $lt: endDate } });
  }
};
