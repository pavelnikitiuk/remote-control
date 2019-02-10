const { filter, tap, throttleTime } = require('rxjs/operators');
const { repositories } = require('remote-control-database');
const { converters } = require('remote-control-utils');
const { logger } = require('remote-control-services');
const { get } = require('remote-control-config');
const socket = require('remote-control-socket');

const { toMinutes } = converters.time;

const { Command, TemperatureRecord } = repositories;

const minTemp = -60;
const maxTemp = 100;

const commandMessages = ['T'];

function commandHandler(observable) {
  return observable.pipe(
    filter(({ messageType }) => commandMessages.includes(messageType)),
    //    throttleTime(toMinutes(updateTime)),
    tap(async () => {
      //   Command.add(1, 'function (a, b) { debugger; }');
      const lastRecord = await TemperatureRecord.getLastRecordBySensorId(1);
      const commands = await Command.all();

      commands.forEach(({ script }) => {
        const s = eval(script);
        s(lastRecord);
      });
    })
  );
}

module.exports = commandHandler;
