import { useAppSelector } from '../../../hooks/useAppSelector';
import { useCallback, useEffect } from 'react';
import { fetchHomeAd } from '../../../store/reducers/homeAdSlice/asyncAction';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { homeAdSlice } from '../../../store/reducers/homeAdSlice/homeAdSlice';
import { ADS_LIMIT } from '../../../constants/constants';

export const useSearchAdsList = () => {
  const {
    cards,
    page,
    page_limit,
    region_excludes,
    region_includes,
    sort,
    user_id,
    isLoadingAds
  } = useAppSelector((state) => state.homeAdReducer);
  const dispatch = useAppDispatch();
  const { userId, userInfo, isLoading, isAuth } = useAppSelector(
    (state) => state.userReducer
  );

  const fetchMoreAds = (loading: boolean = false) => {
    if (cards.length || loading) {
      if (!isLoadingAds) {
        dispatch(
          fetchHomeAd({
            page,
            page_limit,
            region_excludes,
            region_includes,
            sort,
            user_id,
          })
        );
      }
    }
  };

  const fetchStartAds = useCallback(
    (data) =>
      dispatch(
        fetchHomeAd({
          sort: 'default',
          page: 1,
          page_limit: ADS_LIMIT,
          region_excludes: '',
          region_includes: data.regionIncludes,
          user_id: data.userId,
        })
      ),
    [isLoading]
  );

  const changeUserStore = useCallback(
    (data) =>
      dispatch(
        homeAdSlice.actions.changeUser({
          user_id: data.user_id,
          region_includes: data.searchName,
        })
      ),
    [userInfo, userId, isAuth]
  );

  useEffect(() => {
    if (region_includes && region_excludes && page === 1) {
      fetchMoreAds(true);
    }
  }, [region_excludes, region_includes]);

  useEffect(() => {
    // Загрузка
    if (isLoading) {
      return;
    }
    // Авторизованный пользователь
    if (!isLoading && isAuth && userInfo && userId) {
      console.log('user-auth');
      const response = changeUserStore({
        user_id: userId,
        searchName: userInfo.location.searchName,
      });
      fetchStartAds({
        userId: response.payload.user_id,
        regionIncludes: response.payload.region_includes,
      });
    }
    // Неавторизованный пользователь
    if (!isLoading && !isAuth) {
      const searchName = 'RU$RU-MOW$Москва';
      const response = changeUserStore({
        user_id: 0,
        searchName: searchName,
      });
      fetchStartAds({
        userId: response.payload.user_id,
        regionIncludes: response.payload.region_includes,
      });
    }
  }, [isAuth, isLoading, userInfo]);

  return {
    cards,
    fetchMoreAds,
    isLoading,
  };
};
