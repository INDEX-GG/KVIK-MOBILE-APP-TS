import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategorySwiper from '../CategorySwiper/CategorySwiper';
import CardOptions from '../../AnyScreen/Card/CardOptions';

const SearchHeader = () => {
  return (
    <>
      <CategorySwiper />
      <View style={styles.container}>
        <CardOptions />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
  },
});

export default React.memo(SearchHeader);
