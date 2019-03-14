const { filter, distinctUntilChanged } = require("rxjs/operators");

const ofSensor = id => source =>
  source.pipe(
    filter(({ fromNode } = {}) => {
      return fromNode === id;
    })
  );

const whenSensorValueChange = (id, getter) => source =>
  source.pipe(
    ofSensor(id),
    distinctUntilChanged((a, b) => {
      return getter(a) === getter(b);
    })
  );

const ofMessageType = type => source =>
  source.pipe(filter(({ messageType }) => type === messageType));

module.exports = {
  whenSensorValueChange,
  ofSensor,
  ofMessageType
};
