import React, { FC, useMemo } from 'react';
import { Text, TextProps } from 'react-native';

interface IUbuntuTextUIProps {
  children: React.ReactChildren | React.ReactNode;
  textProps?: TextProps,
  fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900
  fontStyle?: 'italic' | 'normal'
}

const UbuntuTextUI: FC<IUbuntuTextUIProps> = ({
  children,
  textProps,
  fontWeight = 400,
  fontStyle = 'normal',
}) => {

  const fontFamily = useMemo(() => {
    let fontName = 'Ubuntu-';
    switch (fontWeight) {
      case 300:
        fontName += 'Light';
        break;
      case 400:
        fontName += 'Regular';
        break;
      case 500:
        fontName += 'Medium';
        break;
      case 700:
        fontName += 'Bold';
        break;
    }
    if (fontStyle === 'italic') {
      fontName +=  'Italic';
    }
    return fontName;
  }, [fontWeight, fontStyle]);

  const textPropsStyle = useMemo(() => {
    if (typeof textProps?.style === 'object') {
      return {...textProps.style, fontFamily: fontFamily};
    }
    return {};
  }, [textProps]);

  return (
    <Text {...textProps} style={textPropsStyle}>
      {children}
    </Text>
  );
};

export default React.memo(UbuntuTextUI);
