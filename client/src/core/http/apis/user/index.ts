import httpUsers from 'core/http/singleton/user';
import {
    addRegionUserParams,
    addRoleUserParams,
    createUserParams,
    deleteUserParams,
    getListUserParams,
    updateUserParams,
} from './types';
import { addRegionUserUrl, addRoleUserUrl, createUrl, deleteUrl, getListUrl, updateUrl } from './urls';

export const getGetListUserApi = async (body: getListUserParams): Promise<any> => {
    const res = await httpUsers.post(getListUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postCreatePlanApi = async (body: createUserParams): Promise<any> => {
    const res = await httpUsers.post(createUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postUpdatePlanApi = async (body: updateUserParams): Promise<any> => {
    const res = await httpUsers.post(updateUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postDeletePlanApi = async (body: deleteUserParams): Promise<any> => {
    const res = await httpUsers.post(deleteUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postAddRoleUserApi = async (body: addRoleUserParams): Promise<any> => {
    const res = await httpUsers.post(addRoleUserUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};

export const postAddRegionUserApi = async (body: addRegionUserParams): Promise<any> => {
    const res = await httpUsers.post(addRegionUserUrl, body);
    if (!res || !res.data) throw new Error('Opps');
    return res.data;
};
