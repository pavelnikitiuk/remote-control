require('module-alias/register');

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const morgan = require('morgan');
const config = 'remote-control-config';
const api = require('remote-control-api');
const database = require('remote-control-database');
const { Nrf, getObserverCallback } = require('remote-control-database');
const http = require('http');

const app = express();
const server = http.createServer(app);

Nrf.addListener(getObserverCallback());


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
app.use('/api', api);

// database.connect(config.connectionString);
// nrfObservable();

app.get('/', function(req, res) {
  res.send('Hello World');
  // console.log(new Date);
});

server.listen(80, () => console.log('Express server listening'));
