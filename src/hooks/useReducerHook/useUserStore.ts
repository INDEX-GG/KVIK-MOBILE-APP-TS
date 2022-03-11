import { useAppSelector } from '../useAppSelector';
import { useEffect } from 'react';
import { useAppDispatch } from '../useAppDispatch';
import { fetchUserLogin } from '../../store/reducers/userSlice/asyncAction';
import { useTokenStore } from './useTokenStore';

export const useUserStore = () => {
  const { userId, refreshToken } = useTokenStore();
  const { isAuth, isLoading, userInfo } = useAppSelector(
    (state) => state.userReducer
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoading && refreshToken && userId) {
      dispatch(fetchUserLogin({ id: userId, token: refreshToken }));
    }
  }, [userId]);

  console.log(userInfo, 1);

  return {
    isAuth,
    userId,
    userInfo,
    isLoading,
  };
};
