const mongoose = require('mongoose');
const { Schema } = mongoose;

const Sensor = new Schema({
  _id: Number,
  name: String,
  type: String,
  description: String,
  recordings: [{ type: Schema.Types.ObjectId, ref: 'Record' }],
});

Sensor.virtual('id').get(function() {
  return this._id;
});

Sensor.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Sensor', Sensor);
