import httpCertificates from 'core/http/singleton/certificates';
import { createCertificateParams, updateCertificateParams, deleteCertificateParams } from './types';
import { getListUrl, createUrl, updateUrl, deleteUrl } from './urls';

export const getGetListCertificateApi = async (): Promise<any> => {
    const res = await httpCertificates.get(getListUrl);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postCreateCertificateApi = async (body: createCertificateParams): Promise<any> => {
    const res = await httpCertificates.post(createUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postUpdateCertificateApi = async (body: updateCertificateParams): Promise<any> => {
    const res = await httpCertificates.post(updateUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postDeleteCertificateApi = async (body: deleteCertificateParams): Promise<any> => {
    const res = await httpCertificates.post(deleteUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};
