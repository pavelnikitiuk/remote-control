const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  sensors: [{ type: Schema.Types.Number, ref: 'Sensor' }],
  switchers: [{ type: Schema.Types.Number, ref: 'Switcher' }],
  script: String,
});

module.exports = mongoose.model('Command', schema);
