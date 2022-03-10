import React, { FC } from 'react';
import { View, Pressable } from 'react-native';
import RobotoText from '../RobotoText';
import ArrowBack from '../../assets/ArrowLeft.svg';
import { HeaderTabStyles } from './styles';
import { useRouter } from '../../hooks/useRouter';
import { HeaderTabProps } from './types';
import SaveAreaTheme from '../SaveAreaTheme/SaveAreaTheme';

const HeaderTab: FC<HeaderTabProps> = ({ title, arrow = true }) => {
  const styles = HeaderTabStyles();
  const { pushBack } = useRouter();

  return (
    <SaveAreaTheme>
      <View style={styles.container}>
        {arrow && (
          <Pressable style={styles.back} onPress={pushBack}>
            <View style={styles.icon}>
              <ArrowBack />
            </View>
          </Pressable>
        )}
        <RobotoText weight="b" style={styles.title}>
          {title}
        </RobotoText>
      </View>
    </SaveAreaTheme>
  );
};

export default HeaderTab;
