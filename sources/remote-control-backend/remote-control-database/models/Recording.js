const mongoose = require('mongoose');
const { Schema } = mongoose;

const TemperatureRecord = new Schema({
  sensor: { type: Schema.Types.Number, ref: 'Sensor' },
  messageType: String,
  value: Number,
  date: Number,
});

module.exports = mongoose.model('Record', TemperatureRecord);
