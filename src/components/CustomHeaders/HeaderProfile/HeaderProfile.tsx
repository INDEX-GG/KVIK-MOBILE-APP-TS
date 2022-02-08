import React from 'react';
import { View } from 'react-native';
import RobotoText from '../../../UI/RobotoText';
import { HeaderProfileStyles } from './styles';

const HeaderProfile = () => {
  const styles = HeaderProfileStyles();
  return (
    <View style={styles.container}>
      <RobotoText weight="b" style={styles.title}>
        Мой профиль
      </RobotoText>
      <RobotoText weight="b" style={styles.title}>
        Мой профиль
      </RobotoText>
    </View>
  );
};

export default React.memo(HeaderProfile);
