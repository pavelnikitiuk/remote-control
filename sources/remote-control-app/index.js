const express = require('express');
const backend = require('remote-control-backend');
const http = require('http');
const cors = require('cors');

const { get } = require('remote-control-config');
const { logger } = require('remote-control-services');

if (process.NODE_ENV !== 'production') {
  backend.use(cors());
}

const app = express().use('/', backend);

const backendServer = http.createServer(app);

backendServer.listen(get('backendPort'), () => logger.info('app started'));
