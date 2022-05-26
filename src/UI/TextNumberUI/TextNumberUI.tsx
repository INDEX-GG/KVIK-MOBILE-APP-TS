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

  const {
    control,
    handleChangeText,
    // generateAfterString
  } = useTextNumber(number_version);

  return (
    <View style={styles.container}>
      <Controller
        name={alias}
        control={control}
        defaultValue={default_value}
        render={({field: {value, onChange}} ) => (
          <>
            <TextInput
              value={value}
              maxLength={number_max_value}
              keyboardType="numeric"
              onChangeText={(text) => handleChangeText(text, onChange)}
              placeholder={title}
              placeholderTextColor={styles.inputColor.color}
              style={styles.inputContainer}
            />
            {/*{value ? (*/}
            {/*  <View style={{...styles.placeholderContainer, left: generateAfterString(value?.length)}}>*/}
            {/*    <RobotoText weight="m" style={styles.inputPlaceholder}>*/}
            {/*      {number_unit_of_measure}*/}
            {/*    </RobotoText>*/}
            {/*  </View>*/}
            {/*) : null}*/}
          </>
        )}
      />
    </View>
  );
};

export default React.memo(TextNumberUI);
