const config = require('./config');

function get(path, pathSeporator = '.') {
  return path.split(pathSeporator).reduce((acc = {}, pathPart) => {
    return acc[pathPart];
  }, Object.assign({}, config));
}

module.exports = {
  get,
};
