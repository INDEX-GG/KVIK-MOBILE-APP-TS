import React from 'react';
import AuthScreen from '../../components/AnyScreen/AuthScreen/AuthScreen';
import { useUserStore } from '../../hooks/useReducerHook/useUserStore';
import ProfileScreen from '../../components/ProfileScreen/ProfileScreen';

const AccountScreen = () => {
  const { isAuth, userInfo } = useUserStore();
  console.log(userInfo);
  return isAuth ? <ProfileScreen /> : <AuthScreen />;
};

export default React.memo(AccountScreen);
