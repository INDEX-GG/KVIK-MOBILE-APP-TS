import React, { FC, useCallback } from 'react';
import { FlatListProps } from 'react-native';
import SearchHeader from '../../SearchScreen/SearchHeader/SearchHeader';
import { FlatList } from 'react-native-gesture-handler';
import CardAdItem from '../CardAdItem/CardAdItem';
import { useCardAdListStyles } from './style';
import { IAdCardModel } from '../../../models/IAdCardModel';

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
      windowSize={15}
      initialNumToRender={40}
      maxToRenderPerBatch={50}
      updateCellsBatchingPeriod={50}
      numColumns={2}
      columnWrapperStyle={styles.wrapper}
      contentContainerStyle={styles.container}
      keyExtractor={keyExtractor}
      getItemLayout={getItemLayout}
      onEndReachedThreshold={0.5}
      {...props}
      renderItem={renderItem}
    />
  );
};

export default React.memo(CardsAdList);
