import { Platform } from 'react-native';
import { useMemo } from 'react';

export const useDevice = () => {
  const isAndroid = useMemo(() => Platform.OS === 'android', []);
  const isIos = useMemo(() => Platform.OS === 'ios', []);

  return {
    currentPlatform: Platform,
    isAndroid,
    isIos,
  };
};
