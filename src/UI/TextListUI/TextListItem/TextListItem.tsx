import React, { FC, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTextListItemStyles } from './style';
import CheckBoxUI from '../../CheckBoxUI/CheckBoxUI';
import UbuntuTextUI from '../../UbuntuTextUI/UbuntuTextUI';

interface ITextListUIItemProps {
  title: string;
  value: string;
  isCheckList?: boolean,
  onChange: () => void;
}

const TextListItem: FC<ITextListUIItemProps> = ({ title, value, onChange, isCheckList }) => {
  const styles = useTextListItemStyles();

  const isActive = useMemo(() => {
    if (!isCheckList) {
      return  value === title;
    }
    if (isCheckList && Array.isArray(value)) {
      return !!value.find(item => item === title);
    }
    return false;
  }, [value, title, isCheckList]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onChange}
      activeOpacity={0.5}
    >
      <UbuntuTextUI fontWeight={500} textProps={{style: styles.text}}>
        {title}
      </UbuntuTextUI>
      <CheckBoxUI
        active={isActive}
      />
    </TouchableOpacity>
  );
};


export default React.memo(TextListItem);
