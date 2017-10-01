const mongoose = require('mongoose');
const { Schema } = mongoose;

const Device = new Schema({
  Name: String,
  sensors: [{ type: Schema.Types.ObjectId, ref: 'Sensor' }],
});

module.exports = mongoose.model('Device', Device);
