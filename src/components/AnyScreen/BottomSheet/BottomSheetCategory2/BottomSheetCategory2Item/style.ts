import { StyleSheet } from 'react-native';
import { useCurrentTheme } from '../../../../../hooks/useTheme';

const BottomSheetCategory2ItemStyles = () => {
  const { isDark } = useCurrentTheme();

  return StyleSheet.create({
    item: {
      paddingLeft: 20,
      paddingVertical: 10,
    },
    itemText: {
      fontSize: 18,
      lineHeight: 21,
      fontWeight: '500',
      color: isDark ? '#FFFFFF' : '#151515',
    },
    itemActive: {
      color: '#00A0AB',
    },
  });
};

export const useBottomSheetCategory2ItemStyles = () =>
  BottomSheetCategory2ItemStyles();
