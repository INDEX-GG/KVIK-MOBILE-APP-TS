import React, { FC } from 'react';
import { View, Pressable } from 'react-native';
import RobotoText from '../RobotoText';
import ArrowBack from '../../assets/ArrowLeft.svg';
import { HeaderTabStyles } from './styles';
import { useRouter } from '../../hooks/useRouter';
import { HeaderTabProps } from './types';

const HeaderTab: FC<HeaderTabProps> = ({ title }) => {
  const styles = HeaderTabStyles();
  const { pushBack } = useRouter();


  return (
    <View style={styles.container}>
      <Pressable style={styles.back} onPress={pushBack}>
        <View style={styles.icon}>
          <ArrowBack />
        </View>
      </Pressable>
      <RobotoText weight="b" style={styles.title}>
        {title}
      </RobotoText>
    </View>
  );
};

export default HeaderTab;
