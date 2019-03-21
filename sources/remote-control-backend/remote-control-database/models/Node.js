const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  _id: Schema.Types.Number,
  sensors: [{ type: Schema.Types.Number, ref: 'Sensor' }],
  switchers: [{ type: Schema.Types.Number, ref: 'Switcher' }],
  description: String,
});

module.exports = mongoose.model('Node', schema);
