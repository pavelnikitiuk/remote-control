const api = require('express').Router();
const recordings = require('./recordings');

api.use('/recordings', recordings);

module.exports = api;
