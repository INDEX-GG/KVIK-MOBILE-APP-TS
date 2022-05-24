import React, { FC } from 'react';
import { View } from 'react-native';
import { useTextUIStyles } from './style';
import { IAdditionalFieldsItem, ITextAdditionalFields } from '../../models/IAdditionalFieldsModel';
import { TextInput } from 'react-native';
import { Controller } from 'react-hook-form';
import { useTextUI } from './useTextUI';

const TextUI: FC<IAdditionalFieldsItem & ITextAdditionalFields> = (props) => {
  const styles = useTextUIStyles();
  const {title, alias} = props;
  const {
    control,
    handleChangeText,
  } = useTextUI();

  return (
    <Controller
      name={alias}
      control={control}
      render={({field: {value, onChange}}) => (
        <TextInput
          value={value}
          onChangeText={(text) => handleChangeText(text, onChange)}
          placeholder={title}
          style={styles.inputContainer}
          placeholderTextColor={styles.inputColor.color}
        />
      )}
    />
  );
};


export default React.memo(TextUI);
