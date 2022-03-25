import React from 'react';
import NavigationSection from '../../../../UI/NavigationSection/NavigationSection';
import { useAppDispatch } from '../../../../hooks/useAppDispatch';
import { userSlice } from '../../../../store/reducers/userSlice/userSlice';
import * as Keychain from 'react-native-keychain';
import { tokenSlice } from '../../../../store/reducers/tokenSlice/tokenSlice';

const ProfileTabLogout = () => {
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    Keychain.resetGenericPassword().then(() => {
      dispatch(tokenSlice.actions.tokenResetData());
      dispatch(userSlice.actions.userLogout());
    });
  };

  return (
    <NavigationSection
      title={'ВЫЙТИ'}
      pushName={'ClearSearchResultScreen'}
      onCustomPress={handleLogout}
      customText={tabTextStyle}
      textWeight="r"
    />
  );
};

const tabTextStyle = {
  color: '#F44545',
  fontSize: 14,
  lineHeight: 16,
};

export default React.memo(ProfileTabLogout);
