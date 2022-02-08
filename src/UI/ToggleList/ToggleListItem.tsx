import React, { FC } from 'react';
import { Pressable } from 'react-native';
import { ToggleListIemComponentProps } from './types';

const ToggleListItem: FC<ToggleListIemComponentProps> = ({
  styleArr,
  onPress,
  item,
  iconStyle,
}) => {
  return (
    <Pressable onPress={onPress(item)} style={styleArr as []}>
      {<item.Icon style={iconStyle as {}} />}
    </Pressable>
  );
};

export default React.memo(ToggleListItem);
