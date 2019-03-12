const { fromEventPattern, Subject, queueScheduler, from } = require('rxjs');
const R = require('ramda');
const { StateObservable } = require('redux-observable');
const {
  filter,
  map,
  mergeMap,
  observeOn,
  subscribeOn,
  tap,
  ignoreElements,
} = require('rxjs/operators');
const dataHandlers = require('./handlers');

const observable$ = new Subject();
const stateSubject$ = new Subject().pipe(observeOn(queueScheduler));
const state$ = new StateObservable(stateSubject$, {});
const messageSubject$ = new Subject().pipe(observeOn(queueScheduler));

function handleMessage(msg) {
  const newValue = Object.assign({}, msg, { id: msg.fromNode });
  const newState = Object.assign({}, state$.value, newValue);
  stateSubject$.next(newState);
  messageSubject$.next(msg);
}

module.exports = function createObservable(nrf, dependencies = {}) {
  nrf.on('onDataReceived', handleMessage);
  observable$
    .pipe(
      map((x) => x(messageSubject$, state$, dependencies)),
      mergeMap((output$) =>
        from(output$).pipe(
          subscribeOn(queueScheduler),
          observeOn(queueScheduler),
        )
      )
    )
    .subscribe(/* TODO: nrf.sendMessage() */);
  observable$.next(dataHandlers);
};
