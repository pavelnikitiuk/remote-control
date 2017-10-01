const mongoose = require('mongoose');
const { Schema } = mongoose;

const Sensor = new Schema({
  _id: Number,
  name: String,
  type: String,
  description: String,
  recordings: [{ type: Schema.Types.ObjectId, ref: 'Record' }],
});

module.exports = mongoose.model('Sensor', Sensor);
