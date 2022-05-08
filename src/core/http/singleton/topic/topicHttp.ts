import HttpClient from 'core/http';
import { RESTFUL_TOPIC_URL } from 'helper/apiConst';

export default class HttpTopic extends HttpClient {
  private static classInstance?: HttpTopic;
  private constructor() {
    super(RESTFUL_TOPIC_URL || '');
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new HttpTopic();
    }

    return this.classInstance;
  }
}
