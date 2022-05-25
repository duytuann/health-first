import HttpClient from 'core/http';
import { RESTFUL_CERTIFICATES_URL } from 'helper/apiConst';

export default class HttpCertificates extends HttpClient {
    private static classInstance?: HttpCertificates;
    private constructor() {
        super(RESTFUL_CERTIFICATES_URL || '');
    }

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new HttpCertificates();
        }

        return this.classInstance;
    }
}
