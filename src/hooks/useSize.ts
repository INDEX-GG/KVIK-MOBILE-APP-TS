import { Dimensions } from 'react-native';

export const useSize = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const isTablet = width > 600;
  const heightHeader = 56;
  const heightTab = 56;
  const height100vh = height - (heightHeader + heightTab);

  const wordSlice = (str: string, itemWidthPercent: number) => {
    const itemOnePecent = width / 100;
    const itemPixelInPercent =
      Math.floor(itemOnePecent * itemWidthPercent) - 38;
    const itemMaxWord = Math.floor(itemPixelInPercent / 4) - 9;
    if (str.length > itemMaxWord) {
      return `${str.slice(0, itemMaxWord)}...`;
    }
    return str;
  };

  return {
    isTablet,
    heightTab,
    wordSlice,
    heightHeader,
    deviceWidth: width,
    deviceHeight: height,
    height100vh,
  };
};
