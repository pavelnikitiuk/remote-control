const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = async () => {
  await mongoose.connect('mongodb://database', {
    useMongoClient: true,
  });
};
