import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../hooks/useTheme';

const DropDownStyles = () => {
  const { theme } = useCurrentTheme();
  return StyleSheet.create({
    container: {
      position: 'relative',
      width: 'auto',
      marginBottom: 10,
    },
    list: {
      position: 'absolute',
      left: 0,
      top: 0,
      borderRadius: 10,
    },
    item: {
      width: 300,
      backgroundColor: theme.colorGrayToDark.color,
      padding: 12,
    },
    itemActive: {
      backgroundColor: theme.colorGrayToDark3.color,
    },
    title: {
      color: theme.colorBlackToWhite.color,
      fontSize: 14,
    },
  });
};

export default DropDownStyles;
