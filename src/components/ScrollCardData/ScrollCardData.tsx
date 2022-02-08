import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { useSize } from '../../hooks/useSize';

const ScrollCardData = () => {
  const { deviceHeight } = useSize();
  return (
    <View style={{ position: 'relative', zIndex: -1, height: deviceHeight }}>
      <Text style={{ color: 'red' }}>CARD</Text>
    </View>
  );
};

export default React.memo(ScrollCardData);
