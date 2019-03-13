const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  value: Number,
  date: Date,
  type: String,
  sensor: { type: Schema.Types.Number, ref: 'Sensor' },
});

module.exports = mongoose.model('Record', schema);
