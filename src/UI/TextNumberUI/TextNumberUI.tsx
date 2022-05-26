import React, { FC } from 'react';
import { TextInput } from 'react-native';
import {
  ITextNumberUIProps,
} from '../../models/IAdditionalFieldsModel';
import { useTextNumberUIStyles } from './style';
import { useTextNumber } from './useTextNumberUI';
import { Controller } from 'react-hook-form';

const TextNumberUI: FC<ITextNumberUIProps> = (props) => {
  const styles = useTextNumberUIStyles();
  const {alias, title, number_version, default_value} = props;
  const { control, handleChangeText } = useTextNumber(number_version);

  return (
    <Controller
      name={alias}
      control={control}
      defaultValue={default_value}
      render={({field: {value, onChange}} ) => (
        <TextInput
          value={value}
          keyboardType="numeric"
          onChangeText={(text) => handleChangeText(text, onChange)}
          placeholder={title}
          placeholderTextColor={styles.inputColor.color}
          style={styles.inputContainer}
        />
      )}
    />
  );
};

export default React.memo(TextNumberUI);
