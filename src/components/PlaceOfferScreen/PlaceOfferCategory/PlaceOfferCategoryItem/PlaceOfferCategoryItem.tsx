import React, { FC, useMemo } from 'react';
import { usePlaceOfferCategoryItemStyles } from './style';
import PressableElement from '../../../../UI/PressableElement';
import RobotoText from '../../../../UI/RobotoText';
import { View } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useBottomSheetStore } from '../../../../hooks/useReducerHook/useBottomSheetStore';

interface IPlaceOfferCategoryItemProps {
  name: string;
  alias: string;
  icon?: FC<SvgProps>;
}

const PlaceOfferCategoryItem: FC<IPlaceOfferCategoryItemProps> = ({
  name,
  alias,
  icon,
}) => {
  const styles = usePlaceOfferCategoryItemStyles();
  const Icon = useMemo(() => (icon ? icon : null), [icon]);
  const {handleOpenBottomSheet} = useBottomSheetStore();

  return (
    <PressableElement
      style={styles.item}
      activeStyles={styles.activeItem}
      onPress={handleOpenBottomSheet(0)}
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
