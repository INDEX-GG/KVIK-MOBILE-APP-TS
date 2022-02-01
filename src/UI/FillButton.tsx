import React, {FC} from 'react';
import {Button} from 'react-native-elements';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const FillButton: FC<ButtonProps> = ({title, onPress}) => {
  return <Button type="solid" raised title={title} onPress={onPress} />;
};

export default FillButton;
