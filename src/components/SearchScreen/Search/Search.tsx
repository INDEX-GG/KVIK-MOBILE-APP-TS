import React, { FC, useState } from 'react';
import SearchView from './SearchView';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';

const Search: FC = () => {
  const [search, setSearch] = useState('');

  const handleChangeSearch = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => {
    setSearch(e.nativeEvent.text);
  };

  return <SearchView search={search} handleChangeSearch={handleChangeSearch} />;
};

export default Search;
