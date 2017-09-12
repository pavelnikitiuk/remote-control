const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = {
  connect: function(connectionString = 'mongodb://database') {
    return mongoose.connect(connectionString, {
      useMongoClient: true,
    });
  },
  repositories: require('./repositories'),
};
