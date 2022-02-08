import React, { FC, useState } from 'react';
import { View } from 'react-native';
import CardSort from './CardSort';
import CardView from './CardView';
import { CardStyle } from './style';
import { SortState, SortStateFunction } from './types';
import { ToggleListItem } from '../../../UI/ToggleList/types';
import ColumnCard from '../../../assets/ColumnCardsView.svg';
import RowCards from '../../../assets/RowCardsView.svg';

interface CardOptionsProps {
  children: React.ReactChildren | React.ReactNode;
}

const sortItems = [
  { title: 'По умолчанию', value: 'sortDefault' },
  { title: 'Сначала новые', value: 'sortNew' },
  { title: 'Дешевле', value: 'sortCheap' },
  { title: 'Дороже', value: 'sortExpensive' },
];

const viewData = [
  { id: 1, Icon: ColumnCard, value: 'cardsColumn' },
  { id: 2, Icon: RowCards, value: 'cardsRow' },
];

const CardOptions: FC<CardOptionsProps> = ({ children }) => {
  const styles = CardStyle().styleCard;
  const [sortList, setSortList] = useState<SortState>({
    title: 'По умолчанию',
    value: 'sortDefault',
    open: false,
  });
  const [view, setView] = useState<ToggleListItem>({
    id: 1,
    Icon: ColumnCard,
    value: 'cardsColumn',
  });

  const handleChangeSortData = (sort: SortStateFunction) => {
    return () => {
      setSortList((prevState) => ({ ...prevState, ...sort }));
    };
  };

  const handleChangeView = (item: ToggleListItem) => {
    return () => {
      setView(item);
    };
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <CardSort
          sortItems={sortItems}
          sortData={{ sort: sortList, setSort: handleChangeSortData }}
        />
        <CardView
          activeElement={view}
          setView={handleChangeView}
          listData={viewData}
        />
      </View>
      {children}
    </View>
  );
};

export default React.memo(CardOptions);
