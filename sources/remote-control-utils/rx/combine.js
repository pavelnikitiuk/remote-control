const { merge } = require('rxjs');

const combine = (...observables) => {
  const merger = (...args) =>
    merge(...observables.map(observable => observable(...args)));

  return merger;
};

module.exports = combine;
