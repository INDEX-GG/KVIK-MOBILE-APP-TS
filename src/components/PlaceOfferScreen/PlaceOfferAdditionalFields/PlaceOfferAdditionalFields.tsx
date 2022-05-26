import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import ScreenScroll from '../../AnyScreen/ScreenScroll';
import { usePlaceOfferAdditionalFieldsStyles } from './style';
import { usePlaceOfferAdditionalFields } from './usePlaceOfferAdditionalFields';
import AdditionFieldsItem from '../../AnyScreen/AdditionalFields/AdditionFieldsItem/AdditionFieldsItem';
import { FormProvider } from 'react-hook-form';

const PlaceOfferAdditionalFields = () => {
  const { additionFields, isAdditionFieldsArray, methods } =
    usePlaceOfferAdditionalFields();

  const keyExtractor = useCallback(
    (item, index) => `${item.title}${item.alias}${index}`,
    []
  );

  const renderItem = useCallback(
    ({ item }) => (
      <AdditionFieldsItem
        key={item.alias}
        {...item}
      />
    ),
    []
  );

  return (
    <ScreenScroll scroll={true}>
      <FormProvider {...methods}>
        {/*<ScrollView style={styles.container}>*/}
          {isAdditionFieldsArray ? (
            <FlatList
              data={additionFields}
              contentContainerStyle={styles.container}
              keyExtractor={keyExtractor}
              renderItem={renderItem}
              // ListFooterComponent={}
            />
          ) : null}
        {/*</ScrollView>*/}
      </FormProvider>
    </ScreenScroll>
  );
};

const styles = usePlaceOfferAdditionalFieldsStyles();

export default React.memo(PlaceOfferAdditionalFields);
