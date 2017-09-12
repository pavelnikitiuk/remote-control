const temperature = require('./temperature');

const handlers = [
  {
    type: 'T',
    observer: (observable) => temperature(observable),
  },
];

module.exports = handlers;
