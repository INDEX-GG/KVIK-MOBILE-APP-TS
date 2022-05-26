import React, { FC } from 'react';
import { Text, TextProps } from 'react-native-elements';

export type RobotWeightTypes = 'b' | 'm' | 'r';

interface IRobotTextProps {
  weight: RobotWeightTypes;
}

const generateFontFamily = (weight: 'b' | 'm' | 'r') => {
  switch (weight) {
    case 'b':
      return 'Bold';
    case 'm':
      return 'Medium';
    case 'r':
      return 'Regular';
    default:
      return 'Medium';
  }
};

const RobotoText: FC<TextProps & IRobotTextProps> = (props) => {
  const { children, weight, style } = props;
  const textStyle = style as {};
  const fontFamily = `Ubuntu-${generateFontFamily(weight)}`;

  return (
    <Text style={{ fontFamily: fontFamily, ...textStyle }}>{children}</Text>
  );
};

export default React.memo(RobotoText);
