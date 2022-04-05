import React, { FC } from 'react';
import { Pressable } from 'react-native';
import { IPlaceOfferCategoryItem } from '../../../../../models/IPlaceOfferCategoryModel';
import RobotoText from '../../../../../UI/RobotoText';
import { useBottomSheetCategory2ItemStyles } from './style';
import { Controller, useFormContext } from 'react-hook-form';

const BottomSheetCategory2Item: FC<
  Omit<IPlaceOfferCategoryItem, 'children' | 'search_name'>
> = ({ name, alias }) => {
  const styles = useBottomSheetCategory2ItemStyles();
  const { control } = useFormContext();

  const textStyle = (value: string, innerAlias: string) => {
    if (value === innerAlias) {
      return { ...styles.itemText, ...styles.itemActive };
    }
    return styles.itemText;
  };

  return (
    <Controller
      name="category3"
      control={control}
      render={({ field: { onChange, value } }) => (
        <Pressable style={styles.item} onPress={() => onChange(alias)}>
          <RobotoText weight="b" style={textStyle(value, alias)}>
            {name}
          </RobotoText>
        </Pressable>
      )}
    />
  );
};

export default React.memo(BottomSheetCategory2Item);
