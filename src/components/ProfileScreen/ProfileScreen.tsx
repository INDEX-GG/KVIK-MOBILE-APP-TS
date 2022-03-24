import React from 'react';
import ProfileTabs from './ProfileTabs/ProfileTabs';
import ProfileUser from './ProfileUser/ProfileUser';
import { useUserStore } from '../../hooks/useReducerHook/useUserStore';
import ScreenScroll from '../AnyScreen/ScreenScroll';

const ProfileScreen = () => {
  const { userInfo } = useUserStore();
  return userInfo ? (
    <ScreenScroll>
      <ProfileUser
        name={userInfo.name}
        photo={userInfo.userPhoto}
        rating={userInfo.raiting}
        subscribers={userInfo.subscribers_count}
        subscription={userInfo.subscriptions_count}
        createdAt={userInfo.createdAt}
      />
      <ProfileTabs />
    </ScreenScroll>
  ) : null;
};

export default React.memo(ProfileScreen);
