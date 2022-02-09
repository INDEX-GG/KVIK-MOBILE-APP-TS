import React, { FC } from 'react';
import PressableElement from '../PressableElement';
import { NavigationSectionStyles } from './style';
import RobotoText from '../RobotoText';
import { useRouter } from '../../hooks/useRouter';
import { ViewStyle } from 'react-native';

interface NavigationSectionProps {
  title: string;
  pushName: string;
  customContainer?: ViewStyle;
}

const NavigationSection: FC<NavigationSectionProps> = ({
  title,
  pushName,
  customContainer = {},
}) => {
  const styles = NavigationSectionStyles();
  const { pushTo } = useRouter();

  return (
    <PressableElement
      style={[styles.container, customContainer as {}]}
      activeStyles={styles.activeContainer}
      onPress={pushTo(pushName)}
    >
      <RobotoText weight="m" style={styles.title}>
        {title}
      </RobotoText>
    </PressableElement>
  );
};

export default NavigationSection;
