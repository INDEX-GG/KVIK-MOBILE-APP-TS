import React, { FC, useCallback } from 'react';
import { View, FlatList } from 'react-native';
import DropDownItem from './DropDownItem/DropDownItem';
import { useDropDownUIStyles } from './style';

interface IDropDownData {
  title: string;
  value: string;
}

interface IDropDownUIProps {
  open: boolean;
  activeItem: string;
  onPressItem: (title: string, value: string) => void;
  children: React.ReactChildren | React.ReactNode;
  data: IDropDownData[];
}

const DropDownUI: FC<IDropDownUIProps> = ({
  open,
  data,
  children,
  onPressItem,
  activeItem,
}) => {
  const styles = useDropDownUIStyles();

  const keyExtractor = useCallback(
    (item, index) => `${item.title}${item.value}${index}`,
    []
  );

  const renderItem = useCallback(
    ({ item, index }) => (
      <DropDownItem
        key={`${item.value}${index}`}
        title={item.title}
        value={item.value}
        onPressItem={onPressItem}
        activeItem={activeItem}
      />
    ),
    []
  );

  return (
    <View>
      {children}
      {open ? (
        <View style={styles.wrapper}>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
      ) : null}
    </View>
  );
};

export default React.memo(DropDownUI);
