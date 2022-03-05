import { StyleSheet } from 'react-native';

const SearchScreenStyles = () => {
  return StyleSheet.create({
    container: {
      paddingHorizontal: 15,
    },
  });
};

export const useSearchScreenStyles = () => SearchScreenStyles();
