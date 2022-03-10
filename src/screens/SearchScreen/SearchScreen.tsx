import React, { FC } from 'react';
import Search from '../../components/SearchScreen/Search/Search';
import SaveScrollContainer from '../../UI/SaveScrollContainer';
import CategorySwiper from '../../components/SearchScreen/CategorySwiper/CategorySwiper';
import CardOptions from '../../components/AnyScreen/Card/CardOptions';
import SearchAds from '../../components/SearchScreen/SearchAds/SearchAds';
import { useSearchScreenStyles } from './style';
import { ScrollView, View } from 'react-native';

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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <CategorySwiper />
        <View style={styles.container}>
          <CardOptions />
          <SearchAds />
        </View>
      </ScrollView>
    </SaveScrollContainer>
  );
};

export default React.memo(SearchScreen);
