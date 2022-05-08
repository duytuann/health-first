import HttpClient from 'core/http';
import { RESTFUL_COMMON_URL } from 'helper/apiConst';

export default class HttpCommon extends HttpClient {
  private static classInstance?: HttpCommon;
  private constructor() {
    super(RESTFUL_COMMON_URL || '');
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new HttpCommon();
    }

    return this.classInstance;
  }
}
