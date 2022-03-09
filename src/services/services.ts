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

export function ToRusDate(date: string) {
  const adDate = new Date(date),
    options = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
  return adDate.toLocaleString('ru', options as {});
}

export const stringSlice = (string: string, maxLength: number) => {
  const isMax = string.length > maxLength;
  if (isMax) {
    return `${string.slice(0, maxLength - 3).trim()}...`;
  }
  return string;
};

export function ToRubles(num: string) {
  const number = +num;
  return number.toLocaleString('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

export const parsePhotos = (photos: string | null) => {
  if (typeof photos === 'string') {
    return JSON.parse(photos)?.photos;
  }
  return [];
};
