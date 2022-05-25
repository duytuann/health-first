import httpActivitiesData from 'core/http/singleton/activities';
// import { ResultResponse } from 'core/models/ResultResponse';
import { CreateActivityParams, DeleteActivityParams, UpdateActivityParams } from './types';
import { createUrl, deleteUrl, getListUrl, updateUrl } from './urls';

export const getGetListActivityApi = async (): Promise<any> => {
    const res = await httpActivitiesData.get(getListUrl);
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
