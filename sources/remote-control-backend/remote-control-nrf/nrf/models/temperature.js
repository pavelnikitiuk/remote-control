const BaseModel = require("./baseModel");

class TemperatureModel extends BaseModel {
  get type() {
    return "0x54";
  }

  get maxLength () {
    return 4;
  }

  getModel(header, buffer) {
    return {
      ...super.getModel(header),
      temperature: buffer.readFloatLE(0)
    };
  }
}

module.exports = TemperatureModel;