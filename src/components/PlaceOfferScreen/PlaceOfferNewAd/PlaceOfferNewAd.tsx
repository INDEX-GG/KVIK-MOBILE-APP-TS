import React from 'react';
import ScreenScroll from '../../AnyScreen/ScreenScroll';
import PlaceOfferCategory from '../PlaceOfferCategory/PlaceOfferCategory';
import { FormProvider, useForm } from 'react-hook-form';

const PlaceOfferNewAd = () => {
  const methods = useForm<IFormStatePlaceOfferCategory>({
    defaultValues: {
      category1: undefined,
      category2: undefined,
      category3: undefined,
      category1Length: undefined,
      category2Length: undefined,
      additionalFields: null,
    },
  });

  return (
    <ScreenScroll scroll={true}>
      <FormProvider {...methods}>
        <PlaceOfferCategory />
      </FormProvider>
    </ScreenScroll>
  );
};

export default React.memo(PlaceOfferNewAd);
