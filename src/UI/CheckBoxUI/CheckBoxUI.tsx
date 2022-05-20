import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { useCheckBoxUIStyles } from './style';

interface ICheckBoxUIProps {
  active: boolean;
}

const CheckBoxUI: FC<ICheckBoxUIProps> = ({active}) => {
  const checkboxActiveStyles = useMemo(() => (
    active ? styles.checkboxActive : {}
  ), [active]);


  return (
    <View style={{...styles.checkbox, ...checkboxActiveStyles}}>
      <View/>
    </View>
  );
};

const styles = useCheckBoxUIStyles();


export default React.memo(CheckBoxUI);
