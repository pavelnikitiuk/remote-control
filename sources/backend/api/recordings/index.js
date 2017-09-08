const { Router } = require('express');

const api = Router();

const temperature = require('./temperature');

api.use('/temperature', temperature);

module.exports = api;
