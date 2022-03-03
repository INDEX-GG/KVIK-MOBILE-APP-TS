import React from 'react';
import { Pressable, View } from 'react-native';
import { Text } from 'react-native-elements';
import { useSize } from '../../hooks/useSize';
import { useRouter } from '../../hooks/useRouter';

const ScrollCardData = () => {
  const { deviceHeight } = useSize();
  const { pushTo } = useRouter();
  return (
    <View style={{ position: 'relative', zIndex: -1, height: deviceHeight }}>
      <Pressable onPress={pushTo('ProductScreen')}>
        <Text style={{ color: 'red' }}>CARD</Text>
      </Pressable>
    </View>
  );
};

export default React.memo(ScrollCardData);
