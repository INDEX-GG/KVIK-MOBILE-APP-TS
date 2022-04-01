import React from 'react';
import { useUserStore } from '../hooks/useReducerHook/useUserStore';
import AuthScreen from '../components/AnyScreen/AuthScreen/AuthScreen';
import PlaceOffer from '../components/PlaceOfferScreen/PlaceOfferScreen';

const PlaceOfferScreen = () => {
  const { isAuth } = useUserStore();
  return isAuth ? <PlaceOffer /> : <AuthScreen />;
};

export default React.memo(PlaceOfferScreen);
