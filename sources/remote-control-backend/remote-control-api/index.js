const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const recordings = require('./recordings');
const sensors = require('./sensors');
const registerDependencies = require('./middlewares/dependencyInjection');

const depenndencies = {
  repositories: require('remote-control-database').repositories,
};

const api = express.Router();

api
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(methodOverride())
  .use(registerDependencies(depenndencies));

api
  .use('/recordings', recordings)
  .use('/sensors', sensors);

module.exports = api;
