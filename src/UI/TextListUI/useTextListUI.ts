import { useMemo, useState } from 'react';

export const useTextListUI = (text_list_values: string[]) => {
  const [openBottomSheet, setOpenBottomSheet] = useState<boolean>(false);

  const handleToggleBottomSheet = () => {
    setOpenBottomSheet((prevState) => !prevState);
  };

  const isTextListArray = useMemo(
    () => Array.isArray(text_list_values) && text_list_values.length,
    [text_list_values]
  );

  return {
    isTextListArray,
    openBottomSheet,
    handleToggleBottomSheet,
  };
};
