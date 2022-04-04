import { useCallback } from 'react';

export const useBottomSheetCategory2 = () => {
  const keyExtractor = useCallback(
    (item, index) => `${item.alisa}${index}`,
    []
  );

  const getItemLayout = useCallback(
    (data, index) => ({
      length: 50,
      offset: 50 * index,
      index,
    }),
    []
  );

  return {
    keyExtractor,
    getItemLayout,
  };
};
