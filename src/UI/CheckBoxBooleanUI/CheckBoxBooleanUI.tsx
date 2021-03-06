import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import CheckBoxUI from '../CheckBoxUI/CheckBoxUI';
import { Controller, useFormContext } from 'react-hook-form';
import RobotoText from '../RobotoText';
import { useCheckBoxBooleanStyles } from './style';

interface ICheckBoxBooleanUI {
  alias: string;
  title: string;
}

const CheckBoxBooleanUI: FC<ICheckBoxBooleanUI> = ({ title, alias}) => {

  const {control} = useFormContext();
  const styles = useCheckBoxBooleanStyles();

  return (
    <Controller
      name={alias}
      control={control}
      render={({ field: {value, onChange}}) => (
        <TouchableOpacity style={styles.container} onPress={() => onChange(!value)}>
          <CheckBoxUI active={value}/>
          <RobotoText weight="m" style={styles.text}>
            {title}
          </RobotoText>
        </TouchableOpacity>
      )}
    />
  );
};

export default React.memo(CheckBoxBooleanUI);
