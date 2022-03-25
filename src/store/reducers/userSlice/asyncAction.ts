import { createAsyncThunk } from '@reduxjs/toolkit';
import { IUserModel } from '../../../models/IUserModel';
import { kvikAxios } from '../../../http/customAxios';
import Keychain from 'react-native-keychain';

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
  'user/login',
  async (data: ISignInReq, thunkAPI) => {
    try {
      const response = await kvikAxios
        .post<ISignInRespSuccess>('mobile/checkUser', data)
        .then((userData) => {
          const { data: loginData } = userData;
          if (loginData.idUser && loginData.jwt_refresh) {
            Keychain.setGenericPassword(
              `${loginData.idUser}`,
              loginData.jwt_refresh
            ).then(() => {
              console.log('update');
            });
            return 'user login';
          }
          return 'Ошибка api mobile/checkUser';
        });
      return response;
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
      return {
        userInfo: response.data,
        userId: data.id,
      };
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue('getUser?new');
    }
  }
);
