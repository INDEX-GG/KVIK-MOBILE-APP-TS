import moment from 'moment';
import { useMemo } from 'react';

export const useTimeTextListUI = () => {

  const generateQuarterArr = (number: number, year: number) => {
    if (number >= 1 && number <= 3) {
      return [`1 квартал ${year}`, `2 квартал ${year}`, `3 квартал ${year}`, `4 квартал ${year}`];
    }
    if (number >= 4 && number <= 6) {
      return [`2 квартал ${year}`, `3 квартал ${year}`, `4 квартал ${year}`];
    }
    if (number >= 7 && number <= 9) {
      return [`3 квартал ${year}`, `4 квартал ${year}`];
    }
    if (number >= 10 && number <= 12) {
      return [`4 квартал ${year}`];
    }
    return 7;
  };


  const generateTextListDataArr = () => {
    const currentTimeArr = moment().format('YYYY MMMM').split(' ');
    const currentYear = +currentTimeArr[0];
    const currentMonth = currentTimeArr[1];
    const numberCurrentMonth = +moment().month(currentMonth).format('M');

    const newArr = [];

    for (let i = 0; i <= 5; i++) {
      if (i === 0) {
        newArr.push('Дом сдан');
      } else if (i === 5) {
        newArr.push(`${currentYear + 2} год и позднее`);
      } else {
        newArr.push(`${i} квартал ${currentYear + 1}`);
      }
    }

    console.log(newArr);
    // @ts-ignore
    newArr.splice(1, 0, ...generateQuarterArr(numberCurrentMonth, currentYear));
    return newArr;
  };

  const dateArr = useMemo(() => (
    generateTextListDataArr()
  ), []);

  return {
    dateArr,
    generateTextListDataArr,
  };
};
