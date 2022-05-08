import httpTopic from 'core/http/singleton/topic';
import qs from 'qs';
import { ResultResponse } from 'core/models/ResultResponse';
import { TopicGetAllParams } from './types';
import { insertUrl, updateUrl, deleteUrl, getOneByTopicIDUrl, getAllUrl } from './urls';

export const topicGetAllApi = async (body: TopicGetAllParams): Promise<ResultResponse<any>> => {
  const res = await httpTopic.post<ResultResponse<any>>(getAllUrl, body);
  if (!res || !res.data) throw new Error('Opps');
  return res.data;
};
