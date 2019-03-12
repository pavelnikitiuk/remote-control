const { rx } = require('remote-control-utils');
const temperature = require('./temperature');

module.exports = rx.combine(temperature);
