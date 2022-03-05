import { useAppSelector } from '../../../hooks/useAppSelector';
import { useEffect } from 'react';
import { fetchHomeAd } from '../../../store/reducers/homeAdSlice/asyncAction';
import { useAppDispatch } from '../../../hooks/useAppDispatch';

export const useSearchAds = () => {
  const {
    cards,
    page,
    page_limit,
    region_excludes,
    region_includes,
    sort,
    user_id,
    isLoading,
  } = useAppSelector((state) => state.homeAdReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      fetchHomeAd({
        page,
        page_limit,
        region_excludes,
        region_includes,
        sort,
        user_id: user_id,
      })
    );
  }, []);

  return {
    cards: cards,
    isLoading,
  };
};
