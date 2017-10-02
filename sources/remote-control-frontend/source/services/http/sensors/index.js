import Base from './../base';

class Sensors extends Base {
  all() {
    return this.get('sensors');
  }
}

export default new Sensors();
