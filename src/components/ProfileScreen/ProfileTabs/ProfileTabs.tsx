import React from 'react';
import NavigationSection from '../../../UI/NavigationSection/NavigationSection';
import ProfileTabEmail from './ProfileTabEmail/ProfileTabEmail';
import ProfileTabSocial from './ProfileTabSocial/ProfileTabSocial';
import { View } from 'react-native';
import ProfileTabLogout from './ProfileTabLogout/ProfileTabLogout';

const ProfileTabs = () => {
  return (
    <View>
      <NavigationSection
        title={'Объявления'}
        pushName={'ClearSearchResultScreen'}
      />
      <NavigationSection
        title={'Телефон'}
        pushName={'ClearSearchResultScreen'}
      />
      <ProfileTabEmail />
      <ProfileTabSocial />
      <NavigationSection
        title={'Кошелек'}
        pushName={'ClearSearchResultScreen'}
      />
      <NavigationSection
        title={'Сменить пароль'}
        pushName={'ClearSearchResultScreen'}
      />
      <NavigationSection
        title={'Черный список'}
        pushName={'ClearSearchResultScreen'}
      />
      <NavigationSection
        title={'Устройства'}
        pushName={'ClearSearchResultScreen'}
      />
      <NavigationSection
        title={'Удалить аккаунт'}
        pushName={'ClearSearchResultScreen'}
      />
      <ProfileTabLogout />
    </View>
  );
};

export default React.memo(ProfileTabs);
