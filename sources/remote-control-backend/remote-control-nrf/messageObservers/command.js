const { filter, tap } = require('rxjs/operators');

const commandMessages = ['T'];
function commandHandler(
  message$,
  state$,
  { repositories: { TemperatureRecord, Command } }
) {
  return message$.pipe(
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
