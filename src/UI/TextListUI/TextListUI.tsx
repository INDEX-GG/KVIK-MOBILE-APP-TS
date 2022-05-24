import React, { FC, useCallback } from 'react';
import { ITextListUIProps } from '../../models/IAdditionalFieldsModel';
import { useTextListUIStyles } from './style';
import RobotoText from '../RobotoText';
import PressableElement from '../PressableElement';
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';
import CloseIcon from '../../assets/CloseIcon.svg';
import BottomSheetModalLocal from '../BottomSheetLocalUI/BottomSheetModalLocal';
import { useTextListUI } from './useTextListUI';
import TextListItem from './TextListItem/TextListItem';
import { Controller } from 'react-hook-form';
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity, View } from 'react-native';
import { getDynamicTittle } from '../../services/services';
import TextListSearch from './TextListSearch/TextListSearch';

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
    isSingleFlatListData,
    bottomSheetItemHeight,
    handleToggleBottomSheet,
  } =
    useTextListUI(text_list_values, dependencies, json, alias);

  const renderItem = useCallback(({ item, value, onChange, index }) => {
    return (
      <TextListItem
        key={item + index}
        title={item}
        value={value}
        onChange={handleSelectItem(onChange, item)}
      />
    );
  }, [flatListData]);

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
              {value ? (
                <RobotoText style={styles.label} weight="r">
                  {title}
                </RobotoText>
              ) : null}
              <View>
                <RobotoText style={styles.text} weight="r">
                  {getDynamicTittle(title, value)}
                </RobotoText>
              </View>
              {value && !isSingleFlatListData ? (
                <TouchableOpacity onPress={() => onChange('')}>
                  <CloseIcon />
                </TouchableOpacity>
              ) : !value ? (
                (
                  <View style={arrowStyle}>
                    <ArrowRightIcon />
                  </View>
                )
              ) : null}
            </PressableElement>
            <BottomSheetModalLocal
              open={openBottomSheet}
              height={bottomSheetItemHeight()}
              onClose={handleToggleBottomSheet}
            >
              <TextListSearch/>
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
