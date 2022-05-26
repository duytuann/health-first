import httpCertificates from 'core/http/singleton/certificates';
import { createCertificateParams, deleteCertificateParams, updateCertificateParams } from './types';
import { createUrl, deleteUrl, getListUrl, updateUrl } from './urls';

export const getGetListCertificateApi = async (body: any): Promise<any> => {
    const res = await httpCertificates.post(getListUrl, body);
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
