import React, { FC } from 'react';
import { View, Text } from 'react-native';
import {
  IBottomSheet,
  BottomSheetComponentName,
} from '../../store/reducers/bottomSheetSlice/bottomSheetSlice';
import BottomSheetAuth from './BottomSheetAuth/BottomSheetAuth';
import BottomSheetCategory from '../../components/AnyScreen/BottomSheet/BottomSheetCategory/BottomSheetCategory';
import { IPlaceOfferCategoryItem } from '../../models/IPlaceOfferCategoryModel';

type BottomSheetContentProps = Pick<
  IBottomSheet,
  'componentData' | 'componentName'
>;

const generateBottomSheet = (
  componentName: BottomSheetComponentName,
  componentData: object
) => {
  switch (componentName) {
    case 'CategoryBottomSheet':
      return (
        <BottomSheetCategory
          category={componentData as IPlaceOfferCategoryItem[]}
        />
      );
    case 'LoginBottomSheet':
      return <BottomSheetAuth />;
    default:
      return (
        <View>
          <Text>{componentName}</Text>
        </View>
      );
  }
};

const BottomSheetContent: FC<BottomSheetContentProps> = ({
  componentData,
  componentName,
}) => {
  return generateBottomSheet(componentName, componentData);
};

export default React.memo(BottomSheetContent);
