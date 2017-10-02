const { repositories } = require('remote-control-database');
const { converters } = require('remote-control-utils');
const { logger } = require('remote-control-services');
const { get } = require('remote-control-config');
const socket = require('remote-control-socket');

const { toMinutes } = converters.time;

const { TemperatureRecord } = repositories;

const minTemp = -60;
const maxTemp = 100;

function temperature(observable) {
  const updateTime = get('recordings.temperature.updateTime');
  const temperatureObservable = observable.filter(
    ({ temperature }) => temperature > minTemp && temperature < maxTemp
  );
  temperatureObservable.subscribe((data) => {
    logger.info(data);
    socket.recordings && socket.recordings.emitTemperature(data);
  });
  temperatureObservable.throttleTime(
    toMinutes(updateTime)).subscribe((data) => {
    const { fromNode, temperature } = data;
    TemperatureRecord.add(fromNode, temperature);
  });
}

module.exports = temperature;
