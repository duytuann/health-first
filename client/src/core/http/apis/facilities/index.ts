import httpFacilitiesData from 'core/http/singleton/facilities';
// import { ResultResponse } from 'core/models/ResultResponse';
import { CreateParams, DeleteParams, UpdateParams, GetListParams } from './types';
import { createUrl, deleteUrl, getListUrl, updateUrl } from './urls';

export const getGetListFacitityApi = async (body: GetListParams): Promise<any> => {
    const res = await httpFacilitiesData.post(getListUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postCreateFacitityApi = async (body: CreateParams): Promise<any> => {
    const res = await httpFacilitiesData.post(createUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postUpdateFacitityApi = async (body: UpdateParams): Promise<any> => {
    const res = await httpFacilitiesData.post(updateUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postDeleteFacitityApi = async (body: DeleteParams): Promise<any> => {
    const res = await httpFacilitiesData.post(deleteUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};
