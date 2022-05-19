import { StyleSheet } from 'react-native';

const TextListItemStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
  });
};

export const useTextListItemStyles = () => TextListItemStyles();
