const { Subject } = require('rxjs');
const dataHandlers = require('./handlers');

module.exports = function getObserverCallback() {
  const subject = new Subject();
  dataHandlers.forEach(({ type, observer }) =>
    observer(subject.filter((data) => data.messageType === type))
  );
  return (data) => subject.next(data);
};
