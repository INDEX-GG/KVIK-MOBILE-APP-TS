import { usePlaceOfferStore } from '../../hooks/useReducerHook/usePlaceOfferStore';
import { useEffect, useState } from 'react';

export const usePeriodUI = () => {
  const [yearArray, setYearArray] = useState<string[]>([]);
  const { lastJsonInfo } = usePlaceOfferStore();

  useEffect(() => {
    if (Array.isArray(lastJsonInfo)) {
      const newYearArray: string[] = [];
      const yearFrom = lastJsonInfo.find(item => item.alias === 'yearfrom')?.value;
      const yearTo = lastJsonInfo.find(item => item.alias === 'yearto')?.value;
      if (yearFrom && yearTo) {
        const yearsFromNumber = +yearFrom;
        const yearsToNumber = +yearTo;
        for (let i = yearsFromNumber; i <= yearsToNumber; i++) {
          newYearArray.push(i + '');
        }
      }
      setYearArray(newYearArray);
    }
  }, [lastJsonInfo]);

  return {
    lastJsonInfo,
    yearArray,
  };
};
