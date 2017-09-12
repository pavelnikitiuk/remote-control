const dataHandlers = require('./handlers');
const nrf = require('./nrf');
const { Subject } = require('rxjs');

module.exports = function start() {
  const subject = new Subject();
  nrf.listen((data) => subject.next(data));
  dataHandlers.forEach(({ type, observer }) =>
    observer(subject.filter((data) => data.messageType === type))
  );
};
