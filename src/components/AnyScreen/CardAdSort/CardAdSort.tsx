import React, { FC } from 'react';
import DropDown from '../../../UI/DropDownUI/DropDownUI';
import { TouchableOpacity, View } from 'react-native';
import RobotoText from '../../../UI/RobotoText';
import CardSort from '../../../assets/CardSort.svg';
import { useCardAdSortStyles } from './style';
import { useCardAdSort } from './useCardAdSort';
import { IAdsSort } from '../../../types/reducersTypes';

const sortData: IAdsSort[] = [
  { title: 'По умолчанию', value: 'default' },
  { title: 'Сначала новые', value: 'new' },
  { title: 'Дешевле', value: 'price_by_ascending' },
  { title: 'Дороже', value: 'price_by_descending' },
];

interface ICardAdSortProps {
  sortTitle: string;
}

const CardAdSort: FC<ICardAdSortProps> = ({ sortTitle }) => {
  const styles = useCardAdSortStyles();
  const { isOpen, handleChangeOpen, handlePressItem, activeItem } =
    useCardAdSort();

  return (
    <DropDown
      data={sortData}
      activeItem={activeItem}
      open={isOpen}
      onPressItem={handlePressItem}
    >
      <TouchableOpacity style={styles.container} onPress={handleChangeOpen}>
        <View style={styles.iconBox}>
          <CardSort style={styles.icon as {}} />
        </View>
        <RobotoText weight="r" style={styles.text}>
          {sortTitle}
        </RobotoText>
      </TouchableOpacity>
    </DropDown>
  );
};

export default React.memo(CardAdSort);
