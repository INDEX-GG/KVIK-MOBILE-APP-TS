import React, { FC } from 'react';
import { View, Pressable } from 'react-native';
import RobotoText from '../RobotoText';
import ArrowBack from '../../assets/ArrowLeft.svg';
import { useHeaderTabStyles } from './styles';
import { useRouter } from '../../hooks/useRouter';
import { HeaderTabProps } from './types';
import SaveAreaTheme from '../SaveAreaTheme/SaveAreaTheme';

const HeaderTab: FC<HeaderTabProps> = ({ title, rightContent = null }) => {
  const styles = useHeaderTabStyles();
  const { pushBack } = useRouter();
  const RightComponent = rightContent;

  return (
    <SaveAreaTheme>
      <View style={styles.container}>
        <Pressable style={styles.back} onPress={pushBack}>
          <View style={styles.icon}>
            <ArrowBack />
          </View>
        </Pressable>
        <View style={styles.content}>
          <RobotoText weight="b" style={styles.title}>
            {title}
          </RobotoText>
          {RightComponent && (
            <View style={styles.rightContent}>
              <RightComponent />
            </View>
          )}
        </View>
      </View>
    </SaveAreaTheme>
  );
};

export default HeaderTab;
