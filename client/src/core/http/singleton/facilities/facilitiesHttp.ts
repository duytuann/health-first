import HttpClient from 'core/http';
import { RESTFUL_FACILITIES_URL } from 'helper/apiConst';

export default class HttpFacilitiesData extends HttpClient {
    private static classInstance?: HttpFacilitiesData;
    private constructor() {
        super(RESTFUL_FACILITIES_URL || '');
    }

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new HttpFacilitiesData();
        }

        return this.classInstance;
    }
}
