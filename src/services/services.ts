import { NumberType } from '../types/types';

export const checkArray = (arr: any[]) => {
  return Array.isArray(arr) && arr?.length;
};

export const getStringArrayInObjectArray = (arr: any[], key: string) => {
  if (Array.isArray(arr)) {
    return arr.map(item => item[key]);
  }
  return arr;
};

export const checkTypeOf = (data: any, type: any, similarity: boolean) => {
  if (similarity) {
    return typeof data === type;
  } else {
    return typeof data !== type;
  }
};

export const PhoneMask = (value: string) => {
  let inputOnlyNumber = value.replace(/\D/g, '');

  let formattedInputValue = '';

  if (!inputOnlyNumber) {
    return '';
  }

  if (inputOnlyNumber[0] === '9') {
    inputOnlyNumber = '7' + inputOnlyNumber;
  }
  formattedInputValue = '+7 ';
  if (inputOnlyNumber.length > 1) {
    formattedInputValue += '(' + inputOnlyNumber.substring(1, 4);
  }
  if (inputOnlyNumber.length >= 5) {
    formattedInputValue += ') ' + inputOnlyNumber.substring(4, 7);
  }
  if (inputOnlyNumber.length >= 8) {
    formattedInputValue += '-' + inputOnlyNumber.substring(7, 9);
  }
  if (inputOnlyNumber.length >= 10) {
    formattedInputValue += '-' + inputOnlyNumber.substring(9, 11);
  }

  if (value.length >= 0 && value.length <= 18) {
    return formattedInputValue;
  }

  return inputOnlyNumber;
};

// Если функция будет расширяться, то перенести в отдельный файл
export const dynamicPhotosArr = (
  photos: string[] | undefined,
  id: number,
  size: 'n' | 'm' | 's' | 'x' = 'n',
  maxLengthArray: 'none' | number = 'none',
  server: 1 = 1,
  path: 'po' | 'av' = 'po'
) => {
  try {
    if (Array.isArray(photos)) {
      if (photos.length > 1) {
        const newPhotos = photos.map((photo, index) => {
          if (typeof maxLengthArray === 'number') {
            if (index + 1 > maxLengthArray) {
              return '';
            }
          }
          return `/${server}/${path}/${id}/${size}/${photo}`;
        });
        return newPhotos.filter((photo) => photo);
      }
      return [`/${server}/${path}/${id}/${size}/${photos[0]}`];
    }
    return [];
  } catch (e) {
    return [];
  }
};

export const getOnlyNumberString = (str: string, type: NumberType ) => {
  const regExp = type === 'int' ? /[^0-9]/g : /[^0-9.]/g;
  return str.replace(regExp, '');
};

export const ToRusDate = (date: string) => {
  const adDate = new Date(date),
    options = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
  return adDate.toLocaleString('ru', options as {});
};

export const ToRusAccountDate = (date: string) => {
  const adDate = new Date(date),
    options = {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
    };
  return adDate.toLocaleString('ru', options as {});
};

export const stringSlice = (str: string, maxLength: number) => {
  const isMax = str.length > maxLength;
  if (isMax) {
    return `${str.slice(0, maxLength - 3).trim()}...`;
  }
  return str;
};

export const ToRubles = (num: string) => {
  const number = +num;
  return number.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

export const parsePhotos = (photos: string | null) => {
  if (typeof photos === 'string') {
    return JSON.parse(photos)?.photos;
  }
  return [];
};

export const getTypeResponse = (type: string) => {
  const stringArr = type.split('/');
  return stringArr[stringArr.length - 1];
};

export const stringToColor = (str: string) => {
  let hash = 0;
  let color = '#';
  let i;
  let value;
  let strLength;
  if (!str) {
    return color + '00A0AB';
  }
  strLength = str.length;
  for (i = 0; i < strLength; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  for (i = 0; i < 3; i++) {
    value = (hash >> (i * 8)) & 0xff;
    color += ('00' + value.toString(12)).substr(-2);
  }
  return color;
};

export const wordAutoEnding = (
  word: string,
  number: number,
  declination: string[],
  breakpoints: number[],
  onlyWord?: boolean
) => {
  const requiredIndexBreakPoints = breakpoints.findIndex(
    (bp, i, a) => number >= bp && number < (a[i + 1] || a[i])
  );
  const returnValue = onlyWord ? word : number + ' ' + word;

  if (requiredIndexBreakPoints === -1) {
    return returnValue + declination[declination.length - 1];
  }

  return returnValue + declination[requiredIndexBreakPoints];
};

export const regionExcludesAds = (
  adsLength: number,
  regionIncludes: string,
  regionExcludes: string,
  limit: number,
  page: number
) => {
  if (adsLength === limit) {
    return {
      regionIncludes: regionIncludes,
      regionExcludes: regionExcludes,
      page: page + 1,
      isUpdateAds: false,
    };
  }
  if (adsLength < limit) {
    const searchNameArray = regionIncludes.split('$');

    const data = {
      page: 1,
      regionIncludes: searchNameArray
        .splice(0, searchNameArray.length - 1)
        .join('$'),
      regionExcludes: regionIncludes,
      isUpdateAds: true,
    };

    return data;
  }
};

export const generateBottomSheetHeight = (
  allElement: number,
  sizeOneElement: number,
  deviceHeight: number,
  moreHeight = 0,
) => {
  const height = allElement * sizeOneElement;
  const maxHeight = deviceHeight - 150;
  const minHeight = 150;
  if (height > maxHeight) {
    return maxHeight;
  }
  if (height < minHeight) {
    return minHeight + 10 + moreHeight;
  }
  return height + moreHeight;
};

export const getDynamicTittle = (
  title: string,
  value: string | string[] | undefined | null,
  isArray: boolean | undefined
) => {
  if (isArray && Array.isArray(value)) {
    return value?.length ? value.join(', ') : title;
  }
  return value ? value : title;
};

export const findDependenciesInFormValues = (dependencies: string[], formValues: any) => {
  if (Array.isArray(dependencies)) {
    let isVisible = true;
    for (let i = 0; i < dependencies.length; i++) {
      const key = dependencies[i];
      const item = formValues[key];
      if (!item) {
        isVisible = false;
        break;
      }
    }
    return isVisible;
  }
  return false;
};

export const filterArrayString = (arr: any[], searchString: string) => {
  if (Array.isArray(arr)) {
    return arr.filter(item => item.toLowerCase().includes(searchString.toLowerCase()));
  }
};
