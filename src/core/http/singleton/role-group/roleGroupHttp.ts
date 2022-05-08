import HttpClient from 'core/http';
import { RESTFUL_ROLE_GROUP_URL } from 'helper/apiConst';

export default class HttpRoleGroup extends HttpClient {
  private static classInstance?: HttpRoleGroup;
  private constructor() {
    super(RESTFUL_ROLE_GROUP_URL || '');
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new HttpRoleGroup();
    }

    return this.classInstance;
  }
}
