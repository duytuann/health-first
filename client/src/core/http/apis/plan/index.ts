import httpPlansData from 'core/http/singleton/plan';
// import { ResultResponse } from 'core/models/ResultResponse';
import { createPlanParams, updatePlanParams, deletePlanParams, getListParams } from './types';
import { getListUrl, createUrl, updateUrl, deleteUrl } from './urls';

export const getGetListPlanApi = async (body: getListParams): Promise<any> => {
    const res = await httpPlansData.post(getListUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postCreatePlanApi = async (body: createPlanParams): Promise<any> => {
    const res = await httpPlansData.post(createUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postUpdatePlanApi = async (body: updatePlanParams): Promise<any> => {
    const res = await httpPlansData.post(updateUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postDeletePlanApi = async (body: deletePlanParams): Promise<any> => {
    const res = await httpPlansData.post(deleteUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};
