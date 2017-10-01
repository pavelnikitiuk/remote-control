const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const recordings = require('./recordings');
const devices = require('./devices');
const sensors = require('./sensors');

const api = express.Router();

api
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(methodOverride());

api
  .use('/recordings', recordings)
  .use('/devices', devices)
  .use('/sensors', sensors);

module.exports = api;
