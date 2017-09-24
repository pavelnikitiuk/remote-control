const api = require('express').Router();
const recordings = require('./recordings');
const queryParams = require('./middlewares/queryParamsParser');

api.use(queryParams);
api.use('/recordings', recordings);

module.exports = api;
