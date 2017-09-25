const { Router } = require('express');
const temperature = require('./temperature');


const api = Router();

api.use('/temperature', temperature);

module.exports = api;
