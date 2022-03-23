import { useAppSelector } from '../useAppSelector';
import { useCallback, useEffect } from 'react';
import * as Keychain from 'react-native-keychain';
import { useAppDispatch } from '../useAppDispatch';
import { fetchRefreshToken } from '../../store/reducers/tokenSlice/asyncAction';
import {
  ITokenSlice,
  tokenSlice,
} from '../../store/reducers/tokenSlice/tokenSlice';
import { userSlice } from '../../store/reducers/userSlice/userSlice';

interface IKeychainData {
  username: string;
  password: string;
  storage: string;
  service: string;
}

export const useTokenStore = () => {
  const { refreshToken, authToken, userId, updateUser } = useAppSelector(
    (state) => state.tokenReducer
  );
  const dispatch = useAppDispatch();

  const updateRefreshToken = useCallback(() => {
    if (refreshToken && authToken) {
      setInterval(() => {
        dispatch(fetchRefreshToken({ authToken: authToken }));
      }, 110000);
    }
  }, [authToken]);

  // Keychain.resetGenericPassword();

  useEffect(() => {
    if (updateUser) {
      Keychain.getGenericPassword().then((keychainData) => {
        // Если хранилище пустое
        if (!keychainData) {
          console.log(keychainData);
          dispatch(tokenSlice.actions.notAuthUser());
          dispatch(userSlice.actions.loadingSuccess());
          return null;
        }
        // userId = username; authToken = password;
        const { username, password } = keychainData as IKeychainData;
        dispatch(fetchRefreshToken({ authToken: password })).then((data) => {
          const response = data.payload as ITokenSlice;
          if (response.refreshToken) {
            dispatch(
              tokenSlice.actions.tokenData({
                authToken: password,
                userId: Number(username),
              })
            );
          }
        });
      });
    }
  }, [updateUser]);

  useEffect(() => {
    if (authToken) {
      updateRefreshToken();
    }
  }, [authToken]);

  return {
    refreshToken,
    authToken,
    userId,
  };
};
