import React, { FC } from 'react';
import Search from '../../components/SearchScreen/Search/Search';
import SaveScrollContainer from '../../UI/SaveScrollContainer';
import { useSearchScreenStyles } from './style';
import { View } from 'react-native';
import SearchAdsList from '../../components/SearchScreen/SearchAdsList/SearchAdsList';

const SearchScreen: FC = () => {
  const styles = useSearchScreenStyles();

  return (
    <SaveScrollContainer
      paddingDisabled={true}
      saveContent={true}
      scrollContent={false}
    >
      <View style={styles.container}>
        <Search />
      </View>
      <SearchAdsList />
    </SaveScrollContainer>
  );
};

export default React.memo(SearchScreen);
