import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import {
  ITextNumberUIProps,
} from '../../models/IAdditionalFieldsModel';
import { useTextUIStyles } from './../TextUI/style';
import { useTextNumber } from './useTextNumberUI';
import { Controller } from 'react-hook-form';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';

const TextNumberUI: FC<ITextNumberUIProps> = (props) => {
  const styles = useTextUIStyles();
  const {alias, default_value} = props;

  const { control, handleChangeText, placeholderTitle } = useTextNumber(props);
  console.log(123);

  return (
    <Controller
      name={alias}
      control={control}
      defaultValue={default_value}
      render={({field: {value, onChange}} ) => (
        <View style={styles.container}>
          {value ? (
            <UbuntuTextUI fontWeight={400} textProps={{style: styles.label}} >
              {placeholderTitle}
            </UbuntuTextUI>
          ) : null}
          <TextInput
            value={value}
            keyboardType="numeric"
            onChangeText={(text) => handleChangeText(text, onChange)}
            placeholder={placeholderTitle}
            placeholderTextColor={styles.inputColor.color}
            style={styles.inputContainer}
          />
        </View>
      )}
    />
  );
};

export default React.memo(TextNumberUI);
