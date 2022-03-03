import React, { FC } from 'react';
import {
  View,
  TextInput,
  Pressable,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from 'react-native';
import RobotoText from '../../RobotoText';
import { CustomInputStyles } from './styles';
import { Controller } from 'react-hook-form';
import { CustomInputProps } from './types';

const CustomInput: FC<CustomInputProps> = ({
  keyboardType = 'default',
  placeholder,
  defaultValue = '',
  control,
  name,
  passwordInput,
  inputIcon,
  onPressIcon,
  styleIcon,
  customChange,
  maxLength = undefined,
}) => {
  const styles = CustomInputStyles();
  const Icon = inputIcon ? inputIcon : null;

  const handleChangeInput = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
    onChange: (state: string) => void
  ) => {
    const value = e.nativeEvent.text;

    if (maxLength && value.length < maxLength) {
      if (typeof customChange !== 'undefined') {
        onChange(customChange(value));
      } else {
        onChange(value);
      }
    }

    if (!maxLength) {
      onChange(value);
    }
  };

  return (
    <View>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
            <View>
              <View style={styles.inputContainer}>
                <TextInput
                  keyboardType={keyboardType}
                  secureTextEntry={passwordInput}
                  value={value}
                  onChange={(e) => handleChangeInput(e, onChange)}
                  placeholder={placeholder}
                  placeholderTextColor="#C7C7C7"
                  style={styles.input}
                />
                {Icon && (
                  <Pressable onPress={onPressIcon} style={[styles.inputIcon]}>
                    <Icon style={styleIcon} />
                  </Pressable>
                )}
              </View>
              {!!error && (
                <RobotoText weight="r" style={styles.errorMessage}>
                  {error.message}
                </RobotoText>
              )}
            </View>
          );
        }}
      />
    </View>
  );
};

export default React.memo(CustomInput);
