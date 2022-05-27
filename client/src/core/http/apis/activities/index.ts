import httpActivitiesData from 'core/http/singleton/activities';
// import { ResultResponse } from 'core/models/ResultResponse';
import {
    CreateActivityParams,
    DeleteActivityParams,
    UpdateActivityParams,
    GetListParams,
    GetListSampleParams,
    CreateSampleParams,
    UpdateSampleParams,
    DeleteSampleParams,
} from './types';
import {
    createUrl,
    deleteUrl,
    getListUrl,
    updateUrl,
    createSample,
    updateSample,
    deleteSample,
    getListSample,
} from './urls';

export const getGetListActivityApi = async (body: GetListParams): Promise<any> => {
    const res = await httpActivitiesData.post(getListUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postCreateActivityApi = async (body: CreateActivityParams): Promise<any> => {
    const res = await httpActivitiesData.post(createUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postUpdateActivityApi = async (body: UpdateActivityParams): Promise<any> => {
    const res = await httpActivitiesData.post(updateUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postDeleteActivityApi = async (body: DeleteActivityParams): Promise<any> => {
    const res = await httpActivitiesData.post(deleteUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const getGetListSampleApi = async (body: GetListSampleParams): Promise<any> => {
    const res = await httpActivitiesData.post(getListSample, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postCreateSampleApi = async (body: CreateSampleParams): Promise<any> => {
    const res = await httpActivitiesData.post(createSample, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postUpdateSampleApi = async (body: UpdateSampleParams): Promise<any> => {
    const res = await httpActivitiesData.post(updateSample, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postDeleteSampleApi = async (body: DeleteSampleParams): Promise<any> => {
    const res = await httpActivitiesData.post(deleteSample, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};
