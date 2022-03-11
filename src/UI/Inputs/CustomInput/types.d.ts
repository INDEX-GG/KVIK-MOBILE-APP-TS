import React from 'react';
import { SvgProps } from 'react-native-svg';
import { KeyboardTypeOptions, StyleProp, ViewStyle } from 'react-native';
import { Control } from 'react-hook-form';

export interface CustomInputProps {
  control: Control;
  name: string;
  placeholder: string;
  defaultValue?: string;
  passwordInput?: boolean;
  autoFocus?: boolean;
  inputIcon?: React.FC<SvgProps>;
  onPressIcon?: () => void;
  styleIcon?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardTypeOptions;
  customChange?: ((value: string) => string) | undefined;
  maxLength?: number;
}
