const { rx } = require('remote-control-utils');
const temperature = require('./temperature');
const command = require('./command');

module.exports = rx.combine(temperature, command);
