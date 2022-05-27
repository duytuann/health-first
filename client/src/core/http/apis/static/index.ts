import httpStaticData from 'core/http/singleton/static';
import { getDetailById } from './types';
import { provincesUrl, districtsUrl, wardsUrl, foodUrl, inspectionUnitUrl } from './urls';

export const getListProvincesApi = async (body: Object): Promise<any> => {
    const res = await httpStaticData.post(provincesUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const getListDistrictsByIdApi = async (body: getDetailById): Promise<any> => {
    const res = await httpStaticData.post(districtsUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const getListWardsUrlByIdApi = async (body: getDetailById): Promise<any> => {
    const res = await httpStaticData.post(wardsUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const getListFoodsApi = async (): Promise<any> => {
    const res = await httpStaticData.get(foodUrl);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const getListInspectionUnitsApi = async (): Promise<any> => {
    const res = await httpStaticData.get(inspectionUnitUrl);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};
