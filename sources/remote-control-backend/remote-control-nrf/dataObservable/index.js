const { fromEventPattern } = require('rxjs');
const { tap } = require('rxjs/operators');
const dataHandlers = require('./handlers');

module.exports = function createObservable(nrf) {
  const nrf$ = fromEventPattern(
    (handler) => nrf.on('onDataReceived', handler),
    (handler) => nrf.off('onDataReceived', handler)
  );
  nrf$.subscribe.pipe(
    tap((d) => {
      console.log(d);
    })
  ).subscribe();
};

// function getObserverCallback() {
//   const subject = new Subject();
//   dataHandlers.forEach(({ type, observer }) =>
//     observer(subject.filter((data) =>{
//       return data.messageType === type;
//     }))
//   );
//   return (data) => subject.next(data);
// };
