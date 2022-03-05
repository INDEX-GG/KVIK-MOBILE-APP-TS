import React, { FC } from 'react';
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from 'react-native';
import { Input } from 'react-native-elements';
import { useSearchStyle } from './SearchStyle';

import Glass from '../../../assets/Glass.svg';
import Filter from '../../../assets/Filters.svg';

interface SearchViewProps {
  search: string;
  handleChangeSearch: (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ) => void;
}

const SearchView: FC<SearchViewProps> = ({ search, handleChangeSearch }) => {
  const styles = useSearchStyle();

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Input
          value={search}
          onChange={handleChangeSearch}
          autoCompleteType={undefined}
          containerStyle={styles.searchInputContainer}
          inputContainerStyle={styles.searchInput}
          placeholder="Поиск в Челябинске"
        />
        <View style={styles.glass}>
          <Glass style={styles.glassIcon as {}} />
        </View>
      </View>
      <View style={styles.filter}>
        <Filter style={styles.filterIcon as {}} />
      </View>
    </View>
  );
};

export default SearchView;
