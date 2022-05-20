import React, { FC, useCallback } from 'react';
import { ITextListUIProps } from '../../models/IAdditionalFieldsModel';
import { useTextListUIStyles } from './style';
import RobotoText from '../RobotoText';
import PressableElement from '../PressableElement';
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';
import BottomSheetModalLocal from '../BottomSheetLocalUI/BottomSheetModalLocal';
import { useTextListUI } from './useTextListUI';
import TextListItem from './TextListItem/TextListItem';
import { Controller } from 'react-hook-form';
import { FlatList } from 'react-native-gesture-handler';
import { View } from 'react-native';
import { getDynamicTittle } from '../../services/services';

const TextListUI: FC<ITextListUIProps> = (props) => {
  const styles = useTextListUIStyles();


  const { title, alias, text_list_values, dependencies, default_value, json } = props;
  const {
    control,
    isVisible,
    arrowStyle,
    keyExtractor,
    flatListData,
    getItemLayout,
    openBottomSheet,
    isTextListArray,
    handleSelectItem,
    bottomSheetItemHeight,
    handleToggleBottomSheet,
  } =
    useTextListUI(text_list_values, dependencies, json);

  console.log(flatListData);

  const renderItem = useCallback(({ item, value, onChange, index }) => (
    <TextListItem
      key={item + index}
      title={item}
      value={value}
      onChange={handleSelectItem(onChange, item)}
    />
  ), []);


  return (
    isVisible ? (
      <Controller
        name={alias}
        control={control}
        defaultValue={default_value}
        render={({ field: { value, onChange } }) => (
          <>
            <PressableElement
              onPress={handleToggleBottomSheet}
              style={styles.container}
              activeStyles={styles.containerActive}
            >
              <RobotoText style={styles.text} weight="r">
                {getDynamicTittle(title, value)}
              </RobotoText>
              <View style={arrowStyle}>
                <ArrowRightIcon />
              </View>
            </PressableElement>
            <BottomSheetModalLocal
              open={openBottomSheet}
              height={bottomSheetItemHeight()}
              onClose={handleToggleBottomSheet}
            >
              {isTextListArray ? (
                <FlatList
                  style={styles.containerList}
                  data={flatListData}
                  removeClippedSubviews={true}
                  keyExtractor={keyExtractor}
                  getItemLayout={getItemLayout}
                  renderItem={
                    ({item, index}) => (
                      renderItem({item, value, onChange, index})
                    )
                  }
                />
              ) : null}
            </BottomSheetModalLocal>
          </>
        )}
      />
    ) : null
  );
};


export default React.memo(TextListUI);
