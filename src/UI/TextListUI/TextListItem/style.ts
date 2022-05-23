import { StyleSheet } from 'react-native';

const TextListItemStyles = () => {
  return StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 25,
      paddingHorizontal: 20,
    },
    text: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: 'normal',
      color: '#FFFFFF',
    },
  });
};

export const useTextListItemStyles = () => TextListItemStyles();
