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
    if (!isAuth && refreshToken && userId) {
      console.log('update');
      dispatch(fetchUserLogin({ id: userId, token: refreshToken }));
    }
  }, [userId]);

  return {
    isAuth,
    userId,
    userInfo,
    isLoading,
  };
};
