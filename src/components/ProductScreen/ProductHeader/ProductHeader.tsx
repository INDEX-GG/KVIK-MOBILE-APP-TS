import React from 'react';
import { View, Text } from 'react-native';
import Like from '../../../assets/FavoriteLike.svg';
import Note from '../../../assets/Note.svg';
import PressableElement from '../../../UI/PressableElement';
// import { useProductHeaderStyles } from './style';

const ProductHeader = () => {
  // const styles = useProductHeaderStyles();

  return (
    <View>
      <View>
        <PressableElement onPress={() => console.log(1)}>
          <Like />
        </PressableElement>
        <PressableElement onPress={() => console.log(2)}>
          <Note />
        </PressableElement>
      </View>
    </View>
  );
};

export default ProductHeader;
