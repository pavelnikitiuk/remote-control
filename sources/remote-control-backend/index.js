const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const api = require('remote-control-api');
const { logger } = require('remote-control-services');
const { get } = require('remote-control-config');
// const { Nrf, getObserverCallback } = require('remote-control-database');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use('/api', api);

app.get('/', function(req, res) {
  res.send('Hello World');
});

server.listen(get('port'), () => {
  logger.info('Express server listening');
});
