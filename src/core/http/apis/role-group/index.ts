import httpRoleGroup from 'core/http/singleton/role-group';
import { ResultResponse } from 'core/models/ResultResponse';
import qs from 'qs';
import { RoleGroupItem, ListComboBoxResponsive, RoleGroupResponse } from 'core/models/RoleGroup';
import { RoleGroupListComboBox, RoleGroupListParams, RoleGroupParams } from './types';
import {
  createUpdateRuleGroupUrl,
  getDeleteRuleGroupUrl,
  getListUrl,
  getOneRuleGroupUrl,
  listComboBoxUrl,
} from './urls';

export const getListRoleGroup = async (body: RoleGroupListParams): Promise<ResultResponse<RoleGroupResponse>> => {
  const query = qs.stringify(body);
  const res = await httpRoleGroup.get<ResultResponse<RoleGroupResponse>>(getListUrl(query));
  if (!res || !res.data) throw new Error('Opps');
  return res.data;
};

export const getOneRoleGroup = async (id: string): Promise<ResultResponse<RoleGroupItem>> => {
  const res = await httpRoleGroup.get<ResultResponse<RoleGroupItem>>(getOneRuleGroupUrl(id));
  if (!res || !res.data) throw new Error('Opps');
  return res.data;
};

export const createUpdateRoleGroup = async (body: RoleGroupParams): Promise<ResultResponse<any>> => {
  const res = await httpRoleGroup.post<ResultResponse<any>>(createUpdateRuleGroupUrl, body);
  if (!res || !res.data) throw new Error('Opps');
  return res.data;
};

export const getListComboBox = async (body: RoleGroupListComboBox): Promise<ResultResponse<ListComboBoxResponsive>> => {
  const query = qs.stringify(body);
  const res = await httpRoleGroup.get<ResultResponse<ListComboBoxResponsive>>(listComboBoxUrl(query));
  if (!res || !res.data) throw new Error('Opps');
  return res.data;
};

export const deleteRoleGroup = async (body: any): Promise<ResultResponse<any>> => {
  const res = await httpRoleGroup.delete<ResultResponse<any>>(getDeleteRuleGroupUrl(body));
  if (!res || !res.data) throw new Error('Opps');
  return res.data;
};
