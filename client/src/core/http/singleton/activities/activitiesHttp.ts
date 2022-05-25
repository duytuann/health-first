import HttpClient from 'core/http';
import { RESTFUL_ACTIVITIES_URL } from 'helper/apiConst';

export default class HttpActivitiesData extends HttpClient {
    private static classInstance?: HttpActivitiesData;
    private constructor() {
        super(RESTFUL_ACTIVITIES_URL || '');
    }

    public static getInstance() {
        if (!this.classInstance) {
            this.classInstance = new HttpActivitiesData();
        }

        return this.classInstance;
    }
}
