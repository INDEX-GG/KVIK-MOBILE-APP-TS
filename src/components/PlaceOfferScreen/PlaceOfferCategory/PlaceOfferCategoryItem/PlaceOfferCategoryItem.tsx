import React, { FC, useMemo } from 'react';
import { usePlaceOfferCategoryItemStyles } from './style';
import PressableElement from '../../../../UI/PressableElement';
import RobotoText from '../../../../UI/RobotoText';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useBottomSheetStore } from '../../../../hooks/useReducerHook/useBottomSheetStore';
import { IPlaceOfferCategoryItem } from '../../../../models/IPlaceOfferCategoryModel';

interface IPlaceOfferCategoryItemProps {
  name: string;
  alias: string;
  children: IPlaceOfferCategoryItem;
  icon?: FC<SvgProps>;
}

const PlaceOfferCategoryItem: FC<IPlaceOfferCategoryItemProps> = ({
  name,
  alias,
  children,
  icon,
}) => {
  const styles = usePlaceOfferCategoryItemStyles();
  const Icon = useMemo(() => (icon ? icon : null), [icon]);
  const { handleOpenBottomSheet } = useBottomSheetStore();

  const handlePressCategory = () => {
    console.log(alias, children);
    handleOpenBottomSheet(100, 'CategoryBottomSheet', children)();
  };

  return (
    <PressableElement
      style={styles.item}
      activeStyles={styles.activeItem}
      onPress={handlePressCategory}
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
  );
};

export default React.memo(PlaceOfferCategoryItem);
