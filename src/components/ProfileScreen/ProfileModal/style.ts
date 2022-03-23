import { StyleSheet } from 'react-native';
import { useAdaptiveFont } from '../../../hooks/useAdaptiveFont';

const ProfileModalStyles = () => {
  const fontSize = useAdaptiveFont();
  return StyleSheet.create({
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      marginTop: 16,
    },
    item: {},
    centerItem: {
      marginHorizontal: 15,
    },
    text: {
      fontSize: fontSize.sm,
      fontWeight: '500',
      lineHeight: 14,
      color: '#00A0AB',
    },
  });
};

export const useProfileModalStyles = () => ProfileModalStyles();
