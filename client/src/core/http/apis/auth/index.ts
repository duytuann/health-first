import httpAuth from 'core/http/singleton/auth';
// import LoginInterface from 'core/models/Login';
import { ResultResponse } from 'core/models/ResultResponse';
import { LoginParams } from './types';
import { loginUrl, logoutUrl } from './urls';

/**
 * Function to login.
 * @param {LoginParams} LoginParams of the user
 * { Username: string; Password: string; IsRememberPassword: boolean;  RecaptchaResponse: string; }
 * @returns {LoginInterface}  LoginInterface respponse of User and UserToken
 */
export const loginApi = async (data: LoginParams) => {
  const res = await httpAuth.post(loginUrl, data);
  if (!res || !res.data) throw new Error('Opps');
  return res.data;
};

export const logoutApi = async () => {
  const res = await httpAuth.post<ResultResponse<any>>(logoutUrl);
  if (!res || !res.data) throw new Error('Opps');
  return res.data;
};
