require('module-alias/register');

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const app = express();
const mongo = require('./mongo');

const api = require('./api');

const server = require('http').createServer(app);

// const socket = require('socket').initialize(server);
const nrfObservable = require('./remote/nrf/nrfObservable');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use('/api', api);

mongo();
nrfObservable();

app.get('/', function(req, res) {
  console.log('hello world');
  // console.log(new Date);
});

server.listen(80, () => console.log('Express server listening'));
