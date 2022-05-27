import React, { FC } from 'react';
import { TextInput, View } from 'react-native';
import {
  ITextNumberUIProps,
} from '../../models/IAdditionalFieldsModel';
import { useTextNumberUIStyles } from './style';
import { useTextNumber } from './useTextNumberUI';
import { Controller } from 'react-hook-form';
import RobotoText from '../RobotoText';

const TextNumberUI: FC<ITextNumberUIProps> = (props) => {
  const styles = useTextNumberUIStyles();
  const {
    alias,
    title,
    number_version,
    default_value,
    number_max_value,
    // number_unit_of_measure,
  } = props;

  const { control, handleChangeText, placeholderTitle } = useTextNumber(props);

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
