import React from 'react';
import { View } from 'react-native';
import RobotoText from '../../../UI/RobotoText';

const LicenseScreen = () => {
  return (
    <View>
      <RobotoText weight="b">Лицензионное соглашение</RobotoText>
    </View>
  );
};

export default React.memo(LicenseScreen);
