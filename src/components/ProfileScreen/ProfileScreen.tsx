import React from 'react';
import { View } from 'react-native';
import SaveScrollContainer from '../../UI/SaveScrollContainer';
import ProfileTabs from './ProfileTabs/ProfileTabs';
import ProfileUser from './ProfileUser/ProfileUser';
import { useUserStore } from '../../hooks/useReducerHook/useUserStore';

const ProfileScreen = () => {
  const { userInfo } = useUserStore();
  return userInfo ? (
    <SaveScrollContainer lightColor="#f4f4f4" paddingDisabled={true}>
      <ProfileUser
        name={userInfo.name}
        photo={userInfo.userPhoto}
        rating={userInfo.raiting}
        subscribers={userInfo.subscribers_count}
        subscription={userInfo.subscriptions_count}
        createdAt={userInfo.createdAt}
      />
      <ProfileTabs />
    </SaveScrollContainer>
  ) : null;
};

export default React.memo(ProfileScreen);
