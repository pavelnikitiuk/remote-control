const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  _id: Schema.Types.Number,
  recordings: [{ type: Schema.Types.ObjeNumberctId, ref: 'Record' }],
  node: { type: Schema.Types.Number, ref: 'Node' },
  type: String,
});

module.exports = mongoose.model('Sensor', schema);
