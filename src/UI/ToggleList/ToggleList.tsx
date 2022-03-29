import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { ToggleListProps } from './types';
import ToggleListItem from './ToggleListItem';

const ToggleList: FC<ToggleListProps> = ({
  listData,
  activeElement,
  style,
  activeStyle,
  onPress,
  lastItemStyle,
  iconStyle,
}) => {
  return (
    <View>
      <FlatList
        horizontal
        scrollEnabled={false}
        data={listData}
        renderItem={({ item, index }) => (
          <ToggleListItem
            key={item.id}
            item={item}
            onPress={onPress}
            styleArr={[
              style as {},
              index + 1 === activeElement.id ? activeStyle : {},
              index + 1 === listData.length ? lastItemStyle : {},
            ]}
            iconStyle={iconStyle}
          />
        )}
      />
    </View>
  );
};

export default React.memo(ToggleList);
