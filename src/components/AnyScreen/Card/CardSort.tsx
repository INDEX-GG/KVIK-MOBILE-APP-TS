import React, { FC } from 'react';
import RobotoText from '../../../UI/RobotoText';
import { CardStyle } from './style';
import SortIcon from '../../../assets/CardSort.svg';
import PressableElement from '../../../UI/PressableElement';
import DropDown from '../../../UI/DropDown/DropDown';
import { SortListState } from './types';

const CardSort: FC<SortListState> = ({ sortItems, sortData }) => {
  const styles = CardStyle().stylesSort;
  const {
    sort: { open, title },
    setSort,
  } = sortData;

  return (
    <DropDown open={open} setOpen={setSort} data={sortItems}>
      <PressableElement
        activeStyles={styles.activeTitle}
        onPress={setSort({ open: true })}
        style={styles.container}
      >
        <SortIcon style={styles.sortIcon as {}} />
        <RobotoText style={styles.title} weight="m">
          {title}
        </RobotoText>
      </PressableElement>
    </DropDown>
  );
};

export default React.memo(CardSort);
