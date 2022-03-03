import React, { FC } from 'react';
import { Text, TextProps } from 'react-native-elements';

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

const RobotoText: FC<TextProps & { weight: 'b' | 'm' | 'r' }> = (props) => {
  const { children, weight, style } = props;
  const textStyle = style as {};
  const fontFamily = `Roboto-${generateFontFamily(weight)}`;

  return (
    <Text style={{ fontFamily: fontFamily, ...textStyle }}>{children}</Text>
  );
};

export default React.memo(RobotoText);
