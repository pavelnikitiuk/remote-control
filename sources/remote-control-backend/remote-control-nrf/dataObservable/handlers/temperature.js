const { repositories } = require('remote-control-database');
const { converters } = require('remote-control-utils');
const { logger } = require('remote-control-services');
const { get } = require('remote-control-config');

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
    return data;
  });
  temperatureObservable
    .throttleTime(toMinutes(updateTime))
    .subscribe((data) => {
      TemperatureRecord.add(data);
    });
}

module.exports = temperature;
