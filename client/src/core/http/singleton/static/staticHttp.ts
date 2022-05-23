import HttpClient from 'core/http';
import { RESTFUL_STATIC_DATA_URL } from 'helper/apiConst';

export default class HttpStaticData extends HttpClient {
  private static classInstance?: HttpStaticData;
  private constructor() {
    super(RESTFUL_STATIC_DATA_URL || '');
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new HttpStaticData();
    }

    return this.classInstance;
  }
}
