import axios from 'axios';
import httpCommon from 'core/http/singleton/common';
import { ResultResponse } from 'core/models/ResultResponse';
import storage from 'helper/storage';
import { HistoryObjectGuid, SystemKey } from './types';
import { downloadTemplateUrl, getListCommonDataUrl, historyLogUrl } from './urls';

export const getListCommonData = async (key: string) => {
  const res = await httpCommon.get<ResultResponse<SystemKey[]>>(getListCommonDataUrl(key));
  if (!res || !res.data) throw new Error('Opps');
  return res.data;
};

export const downloadTemplate = async (templateName: string) => {
  const token = await storage.getAccessToken();
  const res = await axios.get<any>(
    `${process.env.REACT_APP_RESTFUL_BASE_URL}Common/${downloadTemplateUrl(templateName)}`,
    {
      responseType: 'blob',
      headers: { Authorization: `${token}` },
    }
  );
  if (!res || !res.data) throw new Error('Opps');
  return res;
};

export const historyLog = async (body: HistoryObjectGuid) => {
  const res = await httpCommon.post<ResultResponse<any>>(historyLogUrl, body);
  if (!res || !res.data) throw new Error('Opps');
  return res.data;
};
