const BaseCommand = require('./base');

class RelayCommand extends BaseCommand {
  constructor(node, enabled) {
    super(node);
    this.enabled = enabled;
  }

  get type() {
    return '0x43';
  }

  get payload() {
    const data = Buffer.alloc(4);
    data.writeUInt32LE(+this.enabled);
    return data;
  }
}

module.exports = RelayCommand;
