class Pipeline {
  constructor() {
    this.pipes = [];
  }
  add(...func) {
    this.pipes.push(...func);
    return this;
  }
  start(...args) {
    let next = () => {};
    for (let i = this.pipes.length - 1; i >= 0; i--) {
      next = this.pipes[i].bind(null, ...[next, ...args]);
    }
    next();
    return this;
  }
}

module.exports = Pipeline;
