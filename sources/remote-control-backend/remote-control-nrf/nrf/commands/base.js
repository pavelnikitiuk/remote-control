class BaseCommand {
  constructor(nodeId) {
    this.nodeId = nodeId;
  }

  get node() {
    return this.nodeId;
  }
}

module.exports = BaseCommand;
