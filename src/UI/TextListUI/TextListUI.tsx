import React, { FC } from 'react';
import { ITextListUIProps } from '../../models/IAdditionalFieldsModel';
import { useTextListUIStyles } from './style';
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';
import CloseIcon from '../../assets/CloseIcon.svg';
import { useTextListUI } from './useTextListUI';
import { Controller } from 'react-hook-form';
import { TouchableOpacity, View } from 'react-native';
import { getDynamicTittle } from '../../services/services';
import TextListBottomSheet from './TextListBottomSheet/TextListBottomSheet';
import UbuntuTextUI from '../UbuntuTextUI/UbuntuTextUI';

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
    getDynamicColor,
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
          <TouchableOpacity
            onPress={handleToggleBottomSheet}
            style={styles.container}
            // activeStyles={styles.containerActive}
          >
            <View
              style={{
                ...styles.innerContainer,
                borderBottomColor: getDynamicColor(styles.innerContainer.borderBottomColor),
            }}>
              {value ? (
                <UbuntuTextUI
                  textProps={{style: styles.label}}
                  fontWeight={400}
                >
                  {title}
                </UbuntuTextUI>
              ) : null}
              <View>
                <UbuntuTextUI
                  fontWeight={400}
                  textProps={{style: {...styles.text, color: getDynamicColor(styles.text.color)}}}
                >
                  {getDynamicTittle(title, value, isCheckList)}
                </UbuntuTextUI>
              </View>
              <View style={styles.iconContainer}>
                {value && !isSingleFlatListData ? (
                  <TouchableOpacity onPress={() => onChange('')}>
                    <CloseIcon />
                  </TouchableOpacity>
                ) : !value ? (
                  (
                    <View style={arrowStyle.transform}>
                      <ArrowRightIcon style={arrowStyle.color as {}} />
                    </View>
                  )
                ) : null}
              </View>
            </View>
          </TouchableOpacity>
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
