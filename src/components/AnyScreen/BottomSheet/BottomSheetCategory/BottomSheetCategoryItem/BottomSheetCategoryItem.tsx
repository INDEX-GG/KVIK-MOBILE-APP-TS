import React, { FC, useCallback } from 'react';
import { View, Pressable } from 'react-native';
import { IPlaceOfferCategoryItem } from '../../../../../models/IPlaceOfferCategoryModel';
import { useBottomSheetCategoryItemStyles } from './style';
import RobotoText from '../../../../../UI/RobotoText';
import ArrowIcon from '../../../../../assets/ArrowIcon.svg';
import { useBottomSheetCategoryItem } from './useBottomSheetCategoryItem';
import { Controller, useFormContext } from 'react-hook-form';
import BottomSheetCategory2 from '../../BottomSheetCategory2/BottomSheetCategory2';

const BottomSheetCategoryItem: FC<IPlaceOfferCategoryItem> = (props) => {
  const styles = useBottomSheetCategoryItemStyles();
  const { name, alias, children } = props;
  const { control, watch } = useFormContext();

  const { selectCategory, handleChangeCategory, isVisibleCategory2 } =
    useBottomSheetCategoryItem(name, alias, watch);

  const elementStyles = useCallback(
    ({ item }) => {
      if (item === alias) {
        return {
          text: { ...styles.text, ...styles.textActive },
          arrow: { ...styles.arrow, ...styles.arrowActive },
        };
      }
      return {
        text: styles.text,
        arrow: styles.arrow,
      };
    },
    [selectCategory]
  );

  return (
    <View style={styles.container}>
      <Controller
        name="category2"
        control={control}
        render={({ field: { value, onChange } }) => (
          <Pressable
            style={styles.item}
            onPress={handleChangeCategory(children, onChange, value)}
          >
            <View style={styles.innerWrapper}>
              <RobotoText
                weight="m"
                style={elementStyles({ item: value }).text}
              >
                {name}
              </RobotoText>
              {children.length ? (
                <View>
                  <ArrowIcon
                    style={elementStyles({ item: value }).arrow as {}}
                  />
                </View>
              ) : null}
            </View>
          </Pressable>
        )}
      />
      {isVisibleCategory2 ? (
        <BottomSheetCategory2
          category={selectCategory.data as IPlaceOfferCategoryItem[]}
        />
      ) : null}
    </View>
  );
};

export default React.memo(BottomSheetCategoryItem);
