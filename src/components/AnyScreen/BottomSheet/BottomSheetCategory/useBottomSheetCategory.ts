import { useCallback } from 'react';

export const useBottomSheetCategory = () => {
  const keyExtractor = useCallback(
    (item, index) => `${item.alias}${item.name}${index}`,
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
