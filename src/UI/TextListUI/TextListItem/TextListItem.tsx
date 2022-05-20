import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTextListItemStyles } from './style';
import RobotoText from '../../RobotoText';
import CheckBoxUI from '../../CheckBoxUI/CheckBoxUI';

interface ITextListUIItemProps {
  title: string;
  value: string;
  onChange: (state: string) => void;
}

const TextListItem: FC<ITextListUIItemProps> = ({ title, value, onChange }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChange(title)}
      activeOpacity={0.5}
    >
      <RobotoText weight="r" style={styles.text}>
        {title}
      </RobotoText>
      <CheckBoxUI
        active={value === title}
      />
    </TouchableOpacity>
  );
};

const styles = useTextListItemStyles();

export default React.memo(TextListItem);
