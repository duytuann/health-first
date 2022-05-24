import httpFacilitiesData from 'core/http/singleton/facilities';
// import { ResultResponse } from 'core/models/ResultResponse';
import { CreateParams } from './types';
import { getListUrl, createUrl } from './urls';

export const postCreateFacitityApi = async (body: CreateParams): Promise<any> => {
    const res = await httpFacilitiesData.post(createUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const getGetListFacitityApi = async (): Promise<any> => {
    const res = await httpFacilitiesData.get(getListUrl);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};
