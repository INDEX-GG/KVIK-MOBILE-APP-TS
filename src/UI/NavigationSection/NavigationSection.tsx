import React, { FC } from 'react';
import PressableElement from '../PressableElement';
import { NavigationSectionStyles } from './style';
import RobotoText, { RobotWeightTypes } from '../RobotoText';
import { useRouter } from '../../hooks/useRouter';
import { TextStyle, ViewStyle } from 'react-native';

interface NavigationSectionProps {
  title: string;
  pushName: string;
  customContainer?: ViewStyle;
  customText?: TextStyle;
  onCustomPress?: () => void;
  textWeight?: RobotWeightTypes;
}

const NavigationSection: FC<NavigationSectionProps> = ({
  title,
  pushName,
  customContainer = {},
  customText = {},
  onCustomPress,
  textWeight = 'm',
}) => {
  const styles = NavigationSectionStyles();
  const { pushTo } = useRouter();

  return (
    <PressableElement
      style={[styles.container, customContainer as {}]}
      activeStyles={styles.activeContainer}
      onPress={onCustomPress ? onCustomPress : pushTo(pushName)}
    >
      <RobotoText
        weight={textWeight}
        style={{ ...styles.title, ...customText }}
      >
        {title}
      </RobotoText>
    </PressableElement>
  );
};

export default NavigationSection;
