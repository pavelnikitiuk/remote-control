const TemperatureRepository = require('mongo/repositories/TemperatureRecord');

const { info } = require('services/logger');
const { get } = require('services//config');

const { toMinutes } = require('utils/converters/time');

const minTemp = -60;
const maxTemp = 100;

function temperature(observable) {
  const updateTime = get('recordings.temperature.updateTime');
  const temperatureObservable = observable.filter(
    ({ temperature }) => temperature > minTemp && temperature < maxTemp
  );
  temperatureObservable.subscribe((data) => {
    info(data);
    return data;
  });
  temperatureObservable
    .throttleTime(toMinutes(updateTime))
    .subscribe((data) => {
    TemperatureRepository.add(data);
  });
}

module.exports = temperature;
