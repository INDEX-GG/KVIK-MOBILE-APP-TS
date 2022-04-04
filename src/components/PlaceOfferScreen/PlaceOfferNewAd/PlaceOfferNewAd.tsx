import React from 'react';
import ScreenScroll from '../../AnyScreen/ScreenScroll';
import PlaceOfferCategory from '../PlaceOfferCategory/PlaceOfferCategory';
import { FormProvider, useForm } from 'react-hook-form';

const PlaceOfferNewAd = () => {
  const methods = useForm({
    defaultValues: {
      category1: undefined,
      category2: undefined,
      category3: undefined,
    },
  });

  return (
    <ScreenScroll scroll={false}>
      <FormProvider {...methods}>
        <PlaceOfferCategory />
      </FormProvider>
    </ScreenScroll>
  );
};

export default React.memo(PlaceOfferNewAd);
