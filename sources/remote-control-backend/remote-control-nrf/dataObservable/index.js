const { fromEventPattern } = require('rxjs');
const dataHandlers = require('./handlers');

module.exports = function createObservable(nrf) {
  const nrf$ = fromEventPattern(
    (handler) => nrf.on('onDataReceived', handler),
    (handler) => nrf.off('onDataReceived', handler)
  );

  nrf$.pipe(dataHandlers).subscribe();
};
