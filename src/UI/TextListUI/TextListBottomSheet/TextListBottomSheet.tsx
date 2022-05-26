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
import UbuntuTextUI from '../../UbuntuTextUI/UbuntuTextUI';

interface ITextListBottomSheetProps {
  alias: string;
  title: string;
  isCheckList?: boolean;
  fieldValue: string | undefined | null;
  onChangeFieldValue: () => void;
  flatListData: any[],
  openBottomSheet: boolean;
  handleToggleBottomSheet: () => void;
}

const TextListBottomSheet: FC<ITextListBottomSheetProps> = ({
  alias,
  title,
  isCheckList,
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
  } = useTextListBottomSheet(flatListData, alias, isCheckList);

  const renderItem = useCallback(({ item, index }) => {
    const value = fieldValue ? fieldValue : '';
    return (
      <TextListItem
        key={item + index}
        title={item}
        value={value}
        isCheckList={isCheckList}
        onChange={handleSelectItem(onChangeFieldValue, item, fieldValue)}
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
          <UbuntuTextUI fontWeight={500} textProps={{style: styles.buttonTitle}}>
            Выбрать
          </UbuntuTextUI>
        </TouchableOpacity>
      ) : null}
    </BottomSheetModalLocal>
  );
};

export default React.memo(TextListBottomSheet);
