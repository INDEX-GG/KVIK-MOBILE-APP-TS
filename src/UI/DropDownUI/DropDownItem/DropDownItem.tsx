import React, { FC, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { useDropDownItemStyles } from './style';
import RobotoText from '../../RobotoText';

interface IDropDownItemProps {
  title: string;
  value: string;
  activeItem: string;
  onPressItem: (title: string, value: string) => void;
}

const DropDownItem: FC<IDropDownItemProps> = ({
  title,
  value,
  onPressItem,
  activeItem,
}) => {
  const styles = useDropDownItemStyles();

  const handleClickItem = () => {
    onPressItem(title, value);
  };

  return (
    <TouchableOpacity style={[styles.container]} onPress={handleClickItem}>
      <RobotoText weight="b" style={styles.text}>
        {title}
      </RobotoText>
    </TouchableOpacity>
  );
};

export default React.memo(DropDownItem);
