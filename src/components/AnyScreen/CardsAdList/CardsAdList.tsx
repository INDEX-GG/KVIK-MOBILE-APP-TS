import React, { FC, useCallback } from 'react';
import { FlatListProps } from 'react-native';
import SearchHeader from '../../SearchScreen/SearchHeader/SearchHeader';
import { FlatList } from 'react-native-gesture-handler';
import CardAdItem from '../CardAdItem/CardAdItem';
import { useCardAdListStyles } from './style';
import { IAdCardModel } from '../../../models/IAdCardModel';
import LoaderSpinner from '../LoaderSpinner/LoaderSpinner';

const CardsAdList: FC<Omit<FlatListProps<IAdCardModel>, 'renderItem'>> = (
  props
) => {
  const styles = useCardAdListStyles();

  const keyExtractor = useCallback(
    (item, index) => `${item.title}${item.id}${index}`,
    []
  );

  const renderItem = useCallback(
    ({ item, index }) => (
      <CardAdItem key={`${item.id}${index}`} adItem={item} />
    ),
    []
  );

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 264,
      offset: 264 * index,
      index,
    }),
    []
  );

  return (
    <FlatList
      ListHeaderComponent={SearchHeader}
      ListFooterComponent={LoaderSpinner}
      windowSize={21}
      initialNumToRender={10}
      maxToRenderPerBatch={100}
      updateCellsBatchingPeriod={40}
      numColumns={2}
      columnWrapperStyle={styles.wrapper}
      contentContainerStyle={styles.container}
      ListHeaderComponentStyle={styles.headerComponentStyle}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      onEndReachedThreshold={5}
      removeClippedSubviews={false}
      {...props}
      renderItem={renderItem}
    />
  );
};

export default React.memo(CardsAdList);
