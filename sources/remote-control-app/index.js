const express = require('express');
const backend = require('remote-control-backend');
const http = require('http');
const cors = require('cors');

const { get } = require('remote-control-config');
const { logger } = require('remote-control-services');

const app = express();

if (process.NODE_ENV !== 'production') {
  app.use(cors())
}

app.use('/', backend);

const backendServer = http.createServer(app);

backendServer.listen(get('backendPort'), () => logger.info('app started'));
