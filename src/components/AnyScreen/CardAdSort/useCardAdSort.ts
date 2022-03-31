import { useState } from 'react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { homeAdSlice } from '../../../store/reducers/homeAdSlice/homeAdSlice';
import { useUserStore } from '../../../hooks/useReducerHook/useUserStore';
import { DEFAULT_REGION } from '../../../constants/constants';
import { AdsSortTitle, AdsSortValue } from '../../../types/reducersTypes';
import { useAppSelector } from '../../../hooks/useAppSelector';

export const useCardAdSort = () => {
  const { userInfo } = useUserStore();
  const { sort } = useAppSelector((state) => state.homeAdReducer);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleChangeOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleChangeSort = (title: AdsSortTitle, value: AdsSortValue) => {
    if (title && value) {
      dispatch(
        homeAdSlice.actions.changeSort({
          sort: { title, value },
          regionIncludes: userInfo
            ? userInfo.location.searchName
            : DEFAULT_REGION,
        })
      );
    }
    setIsOpen(false);
  };

  const handlePressItem = (title: string, value: string) => {
    const unionTitle = title as AdsSortTitle;
    const unionValue = value as AdsSortValue;
    console.log(123);
    handleChangeSort(unionTitle, unionValue);
  };

  return {
    isOpen,
    activeItem: sort.title,
    handlePressItem,
    handleChangeOpen,
    handleChangeSort,
  };
};
