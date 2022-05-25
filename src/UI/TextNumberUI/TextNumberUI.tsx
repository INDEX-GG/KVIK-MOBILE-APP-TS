import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { IAdditionalFieldsItem, ITextNumberAdditionalFields } from '../../models/IAdditionalFieldsModel';
import { useTextNumberUIStyles } from './style';
import { useTextNumber } from './useTextNumberUI';
import { Controller } from 'react-hook-form';

const TextNumberUI: FC<IAdditionalFieldsItem & ITextNumberAdditionalFields> = (props) => {
  const styles = useTextNumberUIStyles();
  const {alias, title, number_version} = props;
  const { control, handleChangeText } = useTextNumber(number_version);

  return (
    <Controller
      name={alias}
      control={control}
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
