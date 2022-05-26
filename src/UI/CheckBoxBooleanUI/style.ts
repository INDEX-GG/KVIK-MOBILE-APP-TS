import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

const CheckBoxBooleanStyles = () => {
  const { isDark } = useCurrentTheme();
  return StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
      paddingVertical: 20,
      borderBottomWidth: 2,
      borderStyle: 'solid',
      borderBottomColor: isDark ? '#A5A5A5' : '#E4E4E4',
    },
    text: {
      color: isDark ? '#FFFFFF' : '#151515',
      fontSize: 18,
      lineHeight: 21,
      marginLeft: 9,
    },
  });
};

export const useCheckBoxBooleanStyles = () => CheckBoxBooleanStyles();
