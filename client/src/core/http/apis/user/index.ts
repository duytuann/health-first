import httpUsers from 'core/http/singleton/user';
// import { ResultResponse } from 'core/models/ResultResponse';
import { getListUrl } from './urls';

export const getGetListUserApi = async (): Promise<any> => {
    const res = await httpUsers.get(getListUrl);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};
