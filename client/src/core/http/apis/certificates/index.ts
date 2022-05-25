import httpCertificates from 'core/http/singleton/certificates';
import { createUserParams, updateUserParams, deleteUserParams } from './types';
import { getListUrl, createUrl, updateUrl, deleteUrl } from './urls';

export const getGetListUserApi = async (): Promise<any> => {
    const res = await httpCertificates.get(getListUrl);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postCreatePlanApi = async (body: createUserParams): Promise<any> => {
    const res = await httpCertificates.post(createUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postUpdatePlanApi = async (body: updateUserParams): Promise<any> => {
    const res = await httpCertificates.post(updateUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postDeletePlanApi = async (body: deleteUserParams): Promise<any> => {
    const res = await httpCertificates.post(deleteUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};
