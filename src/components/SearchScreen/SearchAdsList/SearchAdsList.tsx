import React from 'react';
import CardsAdList from '../../AnyScreen/CardsAdList/CardsAdList';
import { useSearchAdsList } from './useSearcAdsList';

const SearchAdsList = () => {
  const { fetchMoreAds, cards } = useSearchAdsList();
  return <CardsAdList onEndReached={() => fetchMoreAds(false)} data={cards} />;
};

export default React.memo(SearchAdsList);
