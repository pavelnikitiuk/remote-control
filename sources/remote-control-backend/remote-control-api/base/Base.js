class Router {
  constructor(app, routePath = '/') {
    this.app = app;
    this.routePath = routePath;
    this.registerServices();
  }

  resource(res) {
    return this.getResource(res.locals.dependencies.repositories);
  }

  // shoul return array of apis
  // availiable fields
  //  method - http method, e.g get, put
  //  route - url
  //  action - callback
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
