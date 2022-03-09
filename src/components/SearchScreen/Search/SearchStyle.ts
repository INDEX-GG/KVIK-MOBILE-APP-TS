import { useCurrentTheme } from '../../../hooks/useTheme';
import { StyleSheet } from 'react-native';

export const SearchStyle = () => {
  const { theme } = useCurrentTheme();

  const styles = StyleSheet.create({
    container: {
      marginTop: 9,
      marginBottom: 9,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    },
    search: {
      flexGrow: 1,
    },
    searchInput: {
      borderBottomWidth: 0,
      paddingHorizontal: 0,
    },
    searchInputContainer: {
      paddingVertical: 0,
      paddingHorizontal: 0,
      height: 40,
    },
    filter: {
      marginLeft: 15,
    },
    filterIcon: {
      color: theme.colorMainToWhite.color,
    },
    glass: {
      position: 'absolute',
      right: 10,
      top: 12,
    },
    glassIcon: {
      color: theme.colorDark.color,
    },
  });

  return styles;
};

export const useSearchStyle = () => SearchStyle();
