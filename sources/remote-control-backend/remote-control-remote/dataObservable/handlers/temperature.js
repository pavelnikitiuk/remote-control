const { config: configService, logger } = require('remote-control-services');

const config = require('remote-control-config');
const { converters } = require('remote-control-utils');
const TemperatureRepository = require('remote-control-database');

const minTemp = -60;
const maxTemp = 100;
const updateTimePath = 'recordings.temperature.updateTime';

const { info } = logger;
const { time } = converters;

function temperature(observable) {
  const updateTime = configService.get(config, updateTimePath);
  const temperatureObservable = observable.filter(
    ({ temperature }) => temperature > minTemp && temperature < maxTemp
  );
  temperatureObservable.subscribe((data) => {
    info(data);
    return data;
  });
  temperatureObservable
    .throttleTime(time.toMinutes(updateTime))
    .subscribe((data) => {
      TemperatureRepository.add(data);
    });
}

module.exports = temperature;
