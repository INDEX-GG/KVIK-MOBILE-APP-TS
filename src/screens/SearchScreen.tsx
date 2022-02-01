import React, {FC} from 'react';
import {ScrollView} from 'react-native';
import UbuntuText from '../UI/UbuntuText';
import {StyleSheet} from 'react-native';

const SearchScreen: FC = () => {
  return (
    <ScrollView>
      <UbuntuText weight="b">123</UbuntuText>
    </ScrollView>
  );
};

export default SearchScreen;

const styless = StyleSheet.create({
  scrollView: {

  }
})
