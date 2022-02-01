import React, {FC} from 'react';
import {Text, TextProps} from 'react-native-elements';

const generateFontFamily = (weight: 'b' | 'm' | 'r') => {
  switch (weight) {
    case 'b':
      return 'Bold';
    case 'm':
      return 'Medium';
    case 'r':
      return 'Regular';
  }
};

const UbuntuText: FC<TextProps & {weight: 'b' | 'm' | 'r'}> = props => {
  const {children, weight} = props;
  const fontFamily = `Ubuntu-${generateFontFamily(weight)}`;
  return <Text style={{fontFamily: fontFamily}}>{children}</Text>;
};

export default UbuntuText;
