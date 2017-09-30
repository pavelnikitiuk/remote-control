const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');

const api = require('express').Router();

api
.use(morgan('dev'))
.use(bodyParser.json())
.use(methodOverride());

const recordings = require('./recordings');

api.use('/recordings', recordings);

module.exports = api;
