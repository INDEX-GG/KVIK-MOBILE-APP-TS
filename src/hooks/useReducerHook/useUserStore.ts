import { useTypeSelector } from '../useTypedSelector';
import { useEffect } from 'react';
import { useAsyncStorage } from '../useAsyncStorage';
import { useTypedDispatch } from '../useTypedDispatch';
import { UserInfoType } from '../../store/reducers/userInfoReducer';

export const useUserStore = () => {
  const { getItemStorage } = useAsyncStorage();
  const dispatch = useTypedDispatch();
  const { isAuth, userId, userInfo, isLoading } = useTypeSelector(
    (state) => state.userInfoReducer
  );

  useEffect(() => {
    getItemStorage('UserId').then((userIdStorage) => {
      if (!userIdStorage) {
        setTimeout(() => {
          dispatch({ type: UserInfoType.IS_LOGOUT });
        }, 4000);
      }
      if (userIdStorage) {
        console.log(userId);
      }
    });
  }, []);

  return {
    isAuth,
    userId,
    userInfo,
    isLoading,
  };
};
