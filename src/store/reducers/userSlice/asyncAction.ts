import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserModel } from '../../../models/IUserModel';
import { kvikAxios } from '../../../axios/customAxios';

export interface ISignInReq {
  phone: string;
  password: string;
}

export interface ISignInRespSuccess {
  idUser: number;
  jwt_refresh: string;
}

export interface ISignInRespFail {
  isset: boolean;
}

export interface ILoginReq {
  id: number;
  token: string;
}

export interface ILoginRespSuccess {
  userInfo: IUserModel;
  userId: number;
}

export const fetchUserSignIn = createAsyncThunk(
  'user/signIn',
  async (data: ISignInReq, thunkAPI) => {
    try {
      const response = await kvikAxios
        .post<ISignInRespSuccess | ISignInRespFail>('mobile/checkUser', data)
        .then((userData) => userData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Ошибка api mobile/checkUser');
    }
  }
);

export const fetchUserLogin = createAsyncThunk(
  'user/login',
  async (data: ILoginReq, thunkAPI) => {
    try {
      const response = await kvikAxios
        .post<ILoginRespSuccess>(
          'getUser?new',
          { id: data.id },
          {
            withCredentials: true,
            headers: {
              'x-access-token': data.token,
            },
          }
        )
        .then((userModel) => userModel);
      return { userInfo: response.data, userId: data.id };
    } catch (e) {
      return thunkAPI.rejectWithValue('getUser?new');
    }
  }
);
