import { Dimensions } from 'react-native';

export const useSize = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isTablet = width > 600;

  return {
    deviceWidth: width,
    deviceHeight: height,
    isTablet
  };
};
