class Router {
  constructor(app, recource, routePath = '/') {
    this.recource = recource;
    this.app = app;
    this.routePath = routePath;
    this.registerServices();
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
