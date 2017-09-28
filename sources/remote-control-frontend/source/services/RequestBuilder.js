const methodsWithBody = [];

export default class RequestBuilder {
  constructor({ method = 'GET', url = '', responseType = 'json' } = {}) {
    this.request = {
      method,
      responseType,
      url,
      body: null,
    };

    this.transformResponseToType = this.transformResponseToType.bind(this);
  }

  headers(headers) {
    this.request.headers = headers;
    return this;
  }

  method(method) {
    this.request.method = method.toUpperCase();
    return this;
  }

  url(url) {
    this.request.url = url;
    return this;
  }

  queries(queries) {
    this.request.queries = queries;
    return this;
  }

  responseType(responseType) {
    this.request.responseType = responseType;
    return this;
  }

  send() {
    return this.fetch().then(this.transformResponseToType);
  }

  fetch() {
    this.processWithQueries();
    const { method, url, body, headers = {} } = this.request;
    const options = {
      method,
      headers,
      body,
    };
    return fetch(url, options);
  }

  transformResponseToType(response) {
    const { responseType } = this.request;
    const action = response[responseType];
    if (!action) {
      return response;
    }
    return action.call(response);
  }

  processWithQueries() {
    const { method } = this;
    if (methodsWithBody.indexOf(method) !== -1) {
      this.addQueryToUrl();
    } else {
      this.createBody();
    }
  }

  addQueryToUrl() {
    const { url, queries } = this;
    const query = Object.keys(queries).map(key => `${key}=${queries[key]}`);
    this.url = `${url}?${query}`;
  }

  createBody() {
    const { queries } = this.request;
    if (!queries) {
      this.body = null;
    }
    this.body = JSON.stringify(queries);
  }
}
