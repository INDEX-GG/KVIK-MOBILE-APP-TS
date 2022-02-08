import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../hooks/useTheme';

export const CardStyle = () => {
  const { theme } = useCurrentTheme();

  const stylesSort = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      paddingLeft: 0,
    },
    title: {
      fontSize: 14,
      lineHeight: 16,
      color: theme.colorGrayToDark2.color,
      marginLeft: 5,
      width: 105,
    },
    sortIcon: {
      color: theme.colorGrayToDark2.color,
    },
    activeTitle: {
      backgroundColor: theme.colorGrayToDark.color,
      borderRadius: 10,
    },
  });

  const styleCard = StyleSheet.create({
    container: {
      marginTop: 11,
    },
    wrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

  const styleView = StyleSheet.create({
    item: {
      width: 20,
      height: 20,
      opacity: 0.7,
      marginRight: 20,
      padding: 10,
    },
    activeItem: {
      opacity: 1,
    },
    lastItem: {
      marginRight: 10,
    },
    icon: {
      color: theme.colorBlackToWhite.color
    },
  });

  return {
    stylesSort,
    styleCard,
    styleView,
  };
};
