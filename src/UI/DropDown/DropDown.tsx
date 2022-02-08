import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { DropDownItem, SortStateFunction } from '../../components/AnyScreen/Card/types';
import PressableElement from '../PressableElement';
import RobotoText from '../RobotoText';
import DropDownStyles from './styles';

interface DropDownProps {
  children: React.ReactNode | React.ReactChildren;
  open: boolean;
  setOpen: (state: SortStateFunction) => () => void;
  data: DropDownItem[];
}

const DropDown: FC<DropDownProps> = ({ children, open, setOpen, data }) => {
  const styles = DropDownStyles();

  return (
    <View style={styles.container}>
      {children}
      {open && (
        <FlatList
          style={styles.list}
          data={data}
          renderItem={({ item }) => (
            <PressableElement
              activeStyles={styles.itemActive}
              style={styles.item}
              onPress={setOpen({ open: false, ...item })}
            >
              <RobotoText weight="r" style={styles.title}>
                {item.title}
              </RobotoText>
            </PressableElement>
          )}
        />
      )}
    </View>
  );
};
export default DropDown;
