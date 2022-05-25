import HttpClient from 'core/http';
import { RESTFUL_USER_URL } from 'helper/apiConst';

export default class HttpUsers extends HttpClient {
    private static classInstance?: HttpUsers;
    private constructor() {
        super(RESTFUL_USER_URL || '');
    }

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new HttpUsers();
        }

        return this.classInstance;
    }
}
