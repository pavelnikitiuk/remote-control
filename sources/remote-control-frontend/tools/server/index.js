const express = require('express');
const logger = require('morgan');

const { resolve } = require('path');
const http = require('http');

const { paths } = require('./../consts');

const app = express();


app.use(express.static(paths.public));
app.use(logger('dev'));
app.get('*', (req, res) => res.sendFile(resolve(paths.public, 'index.html')));

const server = http.createServer(app);

server.listen(8080);

