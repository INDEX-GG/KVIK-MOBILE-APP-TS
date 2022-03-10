import axios from 'axios';
import { HOST } from '../constants/constants';
import { SignInReq, SignInRes } from '../types/fetchTypes';

export const signIn = async (signInObj: SignInReq) => {
  const response = await axios
    .post<SignInRes>(`${HOST}/api/mobile/checkUser`, signInObj)
    .then((r) => r.data);
  return response;
};
