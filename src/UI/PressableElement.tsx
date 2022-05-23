import React, { FC, useState } from 'react';
import { Pressable, PressableProps, StyleProp } from 'react-native';

interface ActivePressable {
  activeStyles: StyleProp<any>;
}

const PressableElement: FC<PressableProps & ActivePressable> = ({
  activeStyles,
  children,
  onPress,
  style,
}) => {
  const [pressIn, setPressIn] = useState(false);

  const handleChangePress = (state: boolean) => () => setPressIn(state);

  return (
    <Pressable
      onPress={onPress}
      style={[style, pressIn ? activeStyles : {}]}
      onPressIn={handleChangePress(true)}
      onPressOut={handleChangePress(false)}
    >
      {children}
    </Pressable>
  );
};

export default React.memo(PressableElement);
