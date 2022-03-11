import { Dimensions } from 'react-native';

export const useSize = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isTablet = width > 600;
  const heightHeader = 56;
  const heightTab = 56;
  const height100vh = height - (heightHeader + heightTab);

  return {
    heightHeader,
    heightTab,
    deviceWidth: width,
    deviceHeight: height,
    height100vh: height100vh,
    isTablet,
  };
};
