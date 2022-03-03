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

