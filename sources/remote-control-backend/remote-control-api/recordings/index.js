const { Router } = require('express');
const temperature = require('./temperature');
const dateDependQueries = require('./../middlewares/dateDependQueries');

const api = Router();


api.use(dateDependQueries);
api.use('/temperature', temperature);

module.exports = api;
