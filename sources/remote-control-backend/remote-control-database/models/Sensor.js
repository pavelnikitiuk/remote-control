const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  _id: Schema.Types.Number,
  records: [{ type: Schema.Types.ObjectId, ref: 'Record' }],
  node: { type: Schema.Types.Number, ref: 'Node' },
  mType: String,
});

module.exports = mongoose.model('Sensor', schema);
