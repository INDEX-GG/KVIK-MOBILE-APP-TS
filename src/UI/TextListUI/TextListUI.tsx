import React, { FC } from 'react';
import { ITextListUIProps } from '../../models/IAdditionalFieldsModel';
import { useTextListUIStyles } from './style';
import RobotoText from '../RobotoText';
import PressableElement from '../PressableElement';
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';
import CloseIcon from '../../assets/CloseIcon.svg';
import { useTextListUI } from './useTextListUI';
import { Controller } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import { getDynamicTittle } from '../../services/services';
import TextListBottomSheet from './TextListBottomSheet/TextListBottomSheet';

const TextListUI: FC<ITextListUIProps> = (props) => {
  const styles = useTextListUIStyles();
  const {
    title,
    alias,
    text_list_values,
    dependencies,
    default_value,
    json,
    isCheckList,
    isPeriod,
    isTime,
  } = props;

  const {
    control,
    arrowStyle,
    flatListData,
    openBottomSheet,
    isSingleFlatListData,
    handleToggleBottomSheet,
  } =
    useTextListUI(
      text_list_values,
      dependencies,
      json,
      alias,
      isCheckList,
      isPeriod,
      isTime
    );

  return (
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
                {getDynamicTittle(title, value, isCheckList)}
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
          <TextListBottomSheet
            alias={alias}
            title={title}
            isCheckList={isCheckList}
            fieldValue={value}
            onChangeFieldValue={onChange}
            flatListData={flatListData}
            openBottomSheet={openBottomSheet}
            handleToggleBottomSheet={handleToggleBottomSheet}
          />
        </>
      )}
    />
  );
};


export default React.memo(TextListUI);
