import React, { FC, useMemo } from 'react';
import { usePlaceOfferCategoryItemStyles } from './style';
import PressableElement from '../../../../UI/PressableElement';
import RobotoText from '../../../../UI/RobotoText';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { IPlaceOfferCategoryItem } from '../../../../models/IPlaceOfferCategoryModel';
import { Controller } from 'react-hook-form';

interface IPlaceOfferCategoryItemProps {
  name: string;
  alias: string;
  children: IPlaceOfferCategoryItem[];
  icon?: FC<SvgProps>;
  handleChangeCurrentCategory: (
    state: IPlaceOfferCategoryItem[] | false
  ) => () => void;
}

const PlaceOfferCategoryItem: FC<IPlaceOfferCategoryItemProps> = ({
  name,
  alias,
  children,
  icon,
  handleChangeCurrentCategory,
}) => {
  const styles = usePlaceOfferCategoryItemStyles();
  const Icon = useMemo(() => (icon ? icon : null), [icon]);

  const handlePressCategory = (
    value: string,
    onChange: (state: string) => void
  ) => {
    return () => {
      onChange(value);
      handleChangeCurrentCategory(children)();
    };
  };

  return (
    <Controller
      name="category1"
      render={({ field: { onChange } }) => (
        <PressableElement
          style={styles.item}
          activeStyles={styles.activeItem}
          onPress={handlePressCategory(alias, onChange)}
        >
          {Icon ? (
            <View style={styles.iconBox}>
              <Icon />
            </View>
          ) : null}
          <RobotoText weight="m" style={styles.text}>
            {name}
          </RobotoText>
        </PressableElement>
      )}
    />
  );
};

export default React.memo(PlaceOfferCategoryItem);
