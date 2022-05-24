import HttpClient from 'core/http';
import { RESTFUL_USER_URL } from 'helper/apiConst';

export default class HttpUsersData extends HttpClient {
    private static classInstance?: HttpUsersData;
    private constructor() {
        super(RESTFUL_USER_URL || '');
    }

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new HttpUsersData();
        }

        return this.classInstance;
    }
}
