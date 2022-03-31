import React from 'react';
import ScreenScroll from '../../AnyScreen/ScreenScroll';
import PlaceOfferCategory from '../PlaceOfferCategory/PlaceOfferCategory';
import { FormProvider, useForm } from 'react-hook-form';

const PlaceOfferNewAd = () => {
  const methods = useForm();

  return (
    <ScreenScroll>
      <FormProvider {...methods}>
        <PlaceOfferCategory />
      </FormProvider>
    </ScreenScroll>
  );
};

export default React.memo(PlaceOfferNewAd);
