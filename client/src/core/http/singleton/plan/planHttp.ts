import HttpClient from 'core/http';
import { RESTFUL_PLAN_URL } from 'helper/apiConst';

export default class HttpPlansData extends HttpClient {
    private static classInstance?: HttpPlansData;
    private constructor() {
        super(RESTFUL_PLAN_URL || '');
    }

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new HttpPlansData();
        }

        return this.classInstance;
    }
}
