const { fromEventPattern, Subject, queueScheduler, from } = require('rxjs');
const { map, mergeMap, observeOn, subscribeOn } = require('rxjs/operators');
const dataHandlers = require('./handlers');

const observable$ = new Subject();

module.exports = function createObservable(nrf, dependencies = {}) {
  const nrf$ = fromEventPattern(
    (handler) => nrf.on('onDataReceived', handler),
    (handler) => nrf.off('onDataReceived', handler)
  );
  observable$
    .pipe(
      map((x) => x(nrf$, dependencies)),
      mergeMap((output$) =>
        from(output$).pipe(
          subscribeOn(queueScheduler),
          observeOn(queueScheduler)
        )
      )
    )
    .subscribe(/* TODO: nrf.sendMessage() */);
  observable$.next(dataHandlers);
};
