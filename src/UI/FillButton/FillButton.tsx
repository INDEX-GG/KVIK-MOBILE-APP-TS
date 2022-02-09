import React, { FC } from 'react';
import { Button } from 'react-native-elements';
import {FillButtonStyles} from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const FillButton: FC<ButtonProps> = ({ title, onPress }) => {
  const styles = FillButtonStyles();

  return (
    <Button
      type="solid"
      title={title}
      onPress={onPress}
      buttonStyle={styles.buttonStyle}
      titleStyle={styles.titleStyle}
    />
  );
};

export default FillButton;
