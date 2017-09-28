import Base from './../base';

class TemperatureRecord extends Base {
  getAll() {
    return this.get('recordings/temperature');
  }
}

export default new TemperatureRecord();
