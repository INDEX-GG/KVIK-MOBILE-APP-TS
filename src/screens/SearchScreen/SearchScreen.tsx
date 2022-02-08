import React, { FC } from 'react';
import Search from '../../components/SearchScreen/Search/Search';
import SaveScrollContainer from '../../UI/SaveScrollContainer';
import CategorySwiper from '../../components/SearchScreen/CategorySwiper/CategorySwiper';
import CardOptions from '../../components/AnyScreen/Card/CardOptions';
import ScrollCardData from '../../components/ScrollCardData/ScrollCardData';

const SearchScreen: FC = () => {
  return (
    <SaveScrollContainer>
      <Search />
      <CategorySwiper />
      <CardOptions>
        <ScrollCardData />
      </CardOptions>
    </SaveScrollContainer>
  );
};

export default SearchScreen;
