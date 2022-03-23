import React from 'react';
import { View, Text } from 'react-native';
import NavigationSection from '../../../UI/NavigationSection/NavigationSection';
import ProfileTabEmail from './ProfileTabEmail/ProfileTabEmail';
import ProfileTabSocial from './ProfileTabSocial/ProfileTabSocial';

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
      <NavigationSection
        title={'ВЫЙТИ'}
        pushName={'ClearSearchResultScreen'}
      />
    </View>
  );
};

export default React.memo(ProfileTabs);
