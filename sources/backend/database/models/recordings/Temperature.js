const mongoose = require('mongoose');
const {Schema} = mongoose;

const TemperatureRecord = new Schema({
  sensorId: Number,
  messageType: String,
  value: Number,
  date: Date,
});

module.exports = mongoose.model('TemperatureRecord', TemperatureRecord);
