const { resolve } = require('path');

const environment = process.env.NODE_ENV || 'development';
const isDevelopment = environment === 'development';

const paths = {
  root: resolve(__dirname, '..'),
};

paths.source = resolve(paths.root, 'source');
paths.entry = resolve(paths.source, 'index.js');
paths.public = resolve(paths.root, 'public');
paths.output = paths.public;
paths.assets = resolve(paths.root, 'assets');
paths.template = resolve(paths.assets, 'index.html');

module.exports = {
  paths,
  isDevelopment,
  environment,
};
