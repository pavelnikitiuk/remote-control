const RxOperators = require('rxjs/operators');
const Rx = require('rxjs');

const { Subject, queueScheduler, from, BehaviorSubject } = require('rxjs');
const { StateObservable } = require('redux-observable');
const {
  map,
  mergeMap,
  observeOn,
  subscribeOn,
  switchMap,
} = require('rxjs/operators');
const { rx } = require('remote-control-utils');

const defaultObservers = require('./messageObservers');

const observable$ = new Subject();
const stateSubject$ = new Subject().pipe(observeOn(queueScheduler));
const state$ = new StateObservable(stateSubject$, {});
const messageSubject$ = new Subject().pipe(observeOn(queueScheduler));

const root$ = new BehaviorSubject(defaultObservers);

function handleMessage(msg) {
  state$.value[msg.fromNode] = msg;
  const newState = Object.assign({}, state$.value);
  stateSubject$.next(newState);
  messageSubject$.next(msg);
}

function createObservable(nrf, dependencies = {}, observers) {
  nrf.on('onDataReceived', handleMessage);
  nrf.start();
  observable$
      .pipe(
          map((x) => x(messageSubject$, state$, dependencies)),
          mergeMap((output$) =>
            from(output$).pipe(
                subscribeOn(queueScheduler),
                observeOn(queueScheduler)
            )
          )
      )
      .subscribe(nrf.send);

  const rootObserver = (...args) =>
    root$.pipe(switchMap((observer) => observer(...args)));
  observable$.next(rootObserver);
}

function updateObservers(...observersString) {
  const observers = observersString.map((observerString) => {
    const s = new Function('Rx, RxOperators', ` return ${observerString};`);
    return s(Rx, RxOperators);
  });
  const newRootObserver = rx.combine(defaultObservers, ...observers);
  root$.next(newRootObserver);
}

module.exports = {
  createObservable,
  updateObservers,
};
