import React, { FC, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import TextListSearch from '../TextListSearch/TextListSearch';
import { FlatList } from 'react-native-gesture-handler';
import { filterArrayString } from '../../../services/services';
import RobotoText from '../../RobotoText';
import BottomSheetModalLocal from '../../BottomSheetLocalUI/BottomSheetModalLocal';
import { useTextListBottomSheetStyles } from './style';
import { useTextListBottomSheet } from './useTextListBottomSheet';
import TextListItem from '../TextListItem/TextListItem';

interface ITextListBottomSheetProps {
  alias: string;
  title: string;
  fieldValue: string | undefined | null;
  onChangeFieldValue: () => void;
  flatListData: any[],
  openBottomSheet: boolean;
  handleToggleBottomSheet: () => void;
}

const TextListBottomSheet: FC<ITextListBottomSheetProps> = ({
  alias,
  title,
  fieldValue,
  flatListData,
  onChangeFieldValue,
  openBottomSheet,
  handleToggleBottomSheet,
}) => {
  const styles = useTextListBottomSheetStyles();
  const {
    search,
    keyExtractor,
    getItemLayout,
    isVisibleSearch,
    isTextListArray,
    handleSelectItem,
    handleChangeSearch,
    bottomSheetItemHeight,
  } = useTextListBottomSheet(flatListData, alias);

  const renderItem = useCallback(({ item, index }) => {
    const value = fieldValue ? fieldValue : '';
    return (
      <TextListItem
        key={item + index}
        title={item}
        value={value}
        onChange={handleSelectItem(onChangeFieldValue, item)}
      />
    );
  }, [flatListData, fieldValue]);

  return (
    <BottomSheetModalLocal
      open={openBottomSheet}
      height={bottomSheetItemHeight()}
      onClose={handleToggleBottomSheet}
    >
      <RobotoText weight="r" style={styles.bottomSheetTitle}>
        {title}
      </RobotoText>
      {isVisibleSearch && (
        <TextListSearch
          value={search}
          handleChangeText={handleChangeSearch}
        />
      )}
      {isTextListArray ? (
        <FlatList
          style={styles.containerList}
          data={filterArrayString(flatListData, search)}
          removeClippedSubviews={true}
          keyExtractor={keyExtractor}
          getItemLayout={getItemLayout}
          renderItem={
            ({item, index}) => (
              renderItem({item, index})
            )
          }
        />
      ) : null}
      {fieldValue ? (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleToggleBottomSheet}
        >
          <RobotoText weight="m" style={styles.buttonTitle}>
            Выбрать
          </RobotoText>
        </TouchableOpacity>
      ) : null}
    </BottomSheetModalLocal>
  );
};

export default React.memo(TextListBottomSheet);
