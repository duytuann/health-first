import httpStaticData from 'core/http/singleton/static';
// import LoginInterface from 'core/models/Login';
// import { ResultResponse } from 'core/models/ResultResponse';
import { getDetailById } from './types';
import { provincesUrl, districtsUrl, wardsUrl } from './urls';

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
