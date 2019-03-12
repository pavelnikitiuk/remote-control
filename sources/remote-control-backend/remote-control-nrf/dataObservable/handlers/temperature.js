const { filter, tap, throttleTime } = require('rxjs/operators');
const { repositories } = require('remote-control-database');
const { converters, rx } = require('remote-control-utils');
const { logger } = require('remote-control-services');
const { get } = require('remote-control-config');
const socket = require('remote-control-socket');

const { toMinutes } = converters.time;

const { TemperatureRecord } = repositories;

const minTemp = -60;
const maxTemp = 100;

const writeInSocket = (data) =>
  socket.recordings && socket.recordings.emitTemperature(data);
const recordInDb = ({ fromNode, temperature }) =>
  TemperatureRecord.add(fromNode, temperature);
const updateTime = get('recordings.temperature.updateTime');

function tempeartureHandler(message$, state$) {
  return message$.pipe(
    filter(({ messageType }) => messageType === 'T'),
    filter(({ temperature }) => temperature > minTemp && temperature < maxTemp),
    tap((a) => {
      logger.info(a);
    }),
    tap(writeInSocket),
    throttleTime(toMinutes(updateTime)),
    tap(recordInDb)
  );
}

function stateHandler(message$, state$) {
  return state$.pipe(
    // tap(() => {
    //   console.log(state$.value);
    // })
  );
}

module.exports = rx.combine(tempeartureHandler, stateHandler);
