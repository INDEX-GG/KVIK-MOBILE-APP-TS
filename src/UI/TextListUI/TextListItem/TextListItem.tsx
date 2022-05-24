import React, { FC, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTextListItemStyles } from './style';
import RobotoText from '../../RobotoText';
import CheckBoxUI from '../../CheckBoxUI/CheckBoxUI';

interface ITextListUIItemProps {
  title: string;
  value: string;
  onChange: () => void;
}

const TextListItem: FC<ITextListUIItemProps> = ({ title, value, onChange }) => {

  const isActive = useMemo(() => (
    value === title
  ), [value, title]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onChange}
      activeOpacity={0.5}
    >
      <RobotoText weight="r" style={styles.text}>
        {title}
      </RobotoText>
      <CheckBoxUI
        active={isActive}
      />
    </TouchableOpacity>
  );
};

const styles = useTextListItemStyles();

export default React.memo(TextListItem);
