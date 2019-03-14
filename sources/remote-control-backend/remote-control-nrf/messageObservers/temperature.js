const { filter, tap, throttleTime } = require('rxjs/operators');
const { converters, rx } = require('remote-control-utils');
const { get } = require('remote-control-config');

const { toMinutes } = converters.time;

const minTemp = -60;
const maxTemp = 100;

const writeInSocket = (data, socket) =>
  socket.recordings && socket.recordings.emitTemperature(data);
const recordInDb = ({ fromNode, temperature }, TemperatureRecord) =>
  TemperatureRecord.add(fromNode, temperature);
const updateTime = get('recordings.temperature.updateTime');

function tempeartureHandler(
  message$,
  state$,
  { logger, socket, repositories: { TemperatureRecord } }
) {
  return message$.pipe(
    rx.ofMessageType('T'),
    filter(({ temperature }) => temperature > minTemp && temperature < maxTemp),
    tap((data) => logger.info(data)),
    tap((data) => writeInSocket(data, socket)),
    throttleTime(toMinutes(updateTime)),
    tap((data) => recordInDb(data, TemperatureRecord))
  );
}

module.exports = tempeartureHandler;
