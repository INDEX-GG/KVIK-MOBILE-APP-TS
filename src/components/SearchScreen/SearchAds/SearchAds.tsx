import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { useSearchAdsStyles } from './style';
import { useSearchAds } from './useSearchAds';
import CardAdItem from '../../AnyScreen/CardAdItem/CardAdItem';
import { useSecret } from '../../../hooks/useSecret';

const SearchAds = () => {
  const styles = useSearchAdsStyles();

  const { cards, isLoading } = useSearchAds();
  const { uniqueKeyMap } = useSecret();
  const isCards = useMemo(() => cards.length && !isLoading, [cards]);

  return (
    <View style={styles.container}>
      {isCards ? (
        <FlatList
          maxToRenderPerBatch={8}
          windowSize={15}
          columnWrapperStyle={styles.wrapper}
          contentContainerStyle={styles.container}
          numColumns={2}
          data={cards}
          renderItem={({ item, index }) => (
            <CardAdItem key={uniqueKeyMap(item.id + '', index)} adItem={item} />
          )}
        />
      ) : null}
    </View>
  );
};

export default React.memo(SearchAds);
