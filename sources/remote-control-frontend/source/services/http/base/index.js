import RequestBuilder from 'services/RequestBuilder';
import { baseUrl } from 'config';

const methods = ['get'];

export default class HttpBase {
  constructor() {
    methods.forEach((method) => {
      this[method] = (url, params) => HttpBase.request(method, params, url);
    });
  }

  static request(method, params, url) {
    return new RequestBuilder()
      .responseType('json')
      .url(`${baseUrl}/${url}`)
      .method(method)
      .queries(params)
      .send();
  }
}
