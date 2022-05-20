import React, { FC } from 'react';
import { ITextListUIProps } from '../../models/IAdditionalFieldsModel';
import { useTextListUIStyles } from './style';
import RobotoText from '../RobotoText';
import PressableElement from '../PressableElement';
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';
import BottomSheetModalLocal from '../BottomSheetLocalUI/BottomSheetModalLocal';
import { useTextListUI } from './useTextListUI';
import TextListItem from './TextListItem/TextListItem';
import { Controller } from 'react-hook-form';
import { ScrollView } from 'react-native-gesture-handler';

const TextListUI: FC<ITextListUIProps> = (props) => {
  const { title, alias, text_list_values } = props;
  const { openBottomSheet, handleToggleBottomSheet, isTextListArray } =
    useTextListUI(text_list_values);
  return (
    <Controller
      name={alias}
      render={({ field: { value, onChange } }) => (
        <>
          <PressableElement
            onPress={handleToggleBottomSheet}
            style={styles.container}
            activeStyles={styles.containerActive}
          >
            <RobotoText style={styles.text} weight="r">
              {title}
            </RobotoText>
            <ArrowRightIcon />
          </PressableElement>
          <BottomSheetModalLocal
            open={openBottomSheet}
            height={300}
            onClose={handleToggleBottomSheet}
          >
            {isTextListArray ? (
              <ScrollView style={styles.containerList}>
                {text_list_values.map((item, index) => (
                  <TextListItem
                    key={item + index}
                    title={item}
                    value={value}
                    onChange={onChange}
                  />
                ))}
              </ScrollView>
            ) : null}
          </BottomSheetModalLocal>
        </>
      )}
    />
  );
};

const styles = useTextListUIStyles();

export default React.memo(TextListUI);
