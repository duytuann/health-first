import httpPlansData from 'core/http/singleton/plan';
// import { ResultResponse } from 'core/models/ResultResponse';
import {} from './types';
import { getListUrl } from './urls';

export const getGetListPlanApi = async (): Promise<any> => {
    const res = await httpPlansData.get(getListUrl);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};
