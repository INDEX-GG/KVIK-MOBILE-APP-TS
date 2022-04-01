import React from 'react';
import { StyleSheet, View } from 'react-native';
import CategorySwiper from '../CategorySwiper/CategorySwiper';
import CardAdSort from '../../AnyScreen/CardAdSort/CardAdSort';
import { useAppSelector } from '../../../hooks/useAppSelector';

const SearchHeader = () => {
  const { sort } = useAppSelector((state) => state.homeAdReducer);

  return (
    <>
      <CategorySwiper />
      <View style={styles.container}>
        {/*<CardOptions />*/}
        <CardAdSort sortTitle={sort.title} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 15,
    paddingHorizontal: 15,
    position: 'relative',
    zIndex: 100,
  },
});

export default React.memo(SearchHeader);
