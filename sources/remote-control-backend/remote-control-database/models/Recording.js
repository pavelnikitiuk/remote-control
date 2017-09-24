const mongoose = require('mongoose');
const {Schema} = mongoose;

const TemperatureRecord = new Schema({
  sensorId: Number,
  messageType: String,
  value: Number,
  date: Number,
});

module.exports = mongoose.model('Record', TemperatureRecord);
