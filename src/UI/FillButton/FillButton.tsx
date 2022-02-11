import React, { FC } from 'react';
import { Button } from 'react-native-elements';
import { FillButtonStyles } from './styles';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

interface ButtonProps {
  title: string;
  onPress: () => void;
  customButton?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}

const FillButton: FC<ButtonProps> = ({
  title,
  onPress,
  customButton = {},
  titleStyle = {},
}) => {
  const styles = FillButtonStyles();

  return (
    <Button
      type="solid"
      title={title}
      onPress={onPress}
      buttonStyle={[styles.buttonStyle, customButton]}
      titleStyle={[styles.titleStyle, titleStyle]}
    />
  );
};

export default FillButton;
