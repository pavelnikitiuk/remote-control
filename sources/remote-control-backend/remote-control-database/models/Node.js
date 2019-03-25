const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = Schema({
  _id: Schema.Types.Number,
  description: String,
});

module.exports = mongoose.model('Node', schema);
