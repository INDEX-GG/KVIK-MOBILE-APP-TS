import React, { FC } from 'react';
import { Button } from 'react-native-elements';
import { FillButtonStyles } from './styles';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  customButton?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

const FillButton: FC<ButtonProps> = ({
  title,
  onPress,
  customButton = {},
  titleStyle = {},
  disabled,
}) => {
  const styles = FillButtonStyles();

  return (
    <Button
      disabled={disabled}
      type="solid"
      title={title}
      onPress={onPress}
      buttonStyle={[styles.buttonStyle, customButton]}
      titleStyle={[styles.titleStyle, titleStyle]}
      disabledStyle={styles.disabledButton as {}}
      disabledTitleStyle={styles.disabledTitleStyle}
    />
  );
};

export default FillButton;
