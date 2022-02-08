import React, { FC } from 'react';
import ToggleList from '../../../UI/ToggleList/ToggleList';
import { CardStyle } from './style';
import { ToggleListItem } from '../../../UI/ToggleList/types';

interface CardViewProps {
  activeElement: ToggleListItem;
  setView: (item: ToggleListItem) => () => void;
  listData: ToggleListItem[];
}

const CardView: FC<CardViewProps> = ({ listData, activeElement, setView }) => {
  const styles = CardStyle().styleView;

  return (
    <ToggleList
      onPress={setView}
      activeElement={activeElement}
      listData={listData}
      style={styles.item}
      activeStyle={styles.activeItem}
      lastItemStyle={styles.lastItem as {}}
      iconStyle={styles.icon}
    />
  );
};

export default React.memo(CardView);
