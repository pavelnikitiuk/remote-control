const express = require('express');
const backend = require('remote-control-backend');
const http = require('http');
const { get } = require('remote-control-config');
const { logger } = require('remote-control-services');

const app = express().use('/', backend);

const backendServer = http.createServer(app);

backendServer.listen(get('backendPort'), () => logger.info('app started'));
