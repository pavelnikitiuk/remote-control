class Router {
  constructor(app, routePath = '/') {
    if (app == null) throw new Error('Missing required App');

    this.app = app;
    this.routePath = routePath;
    this._routes = [];
    this.registerServices();
  }

  get services() {
    return [];
  }

  registerServices() {
    const { services } = this;
    services.forEach(({ method = 'get', route = '/', action }) =>
      this.app[method](route, action.bind(this))
    );
  }
}

module.exports = Router;
