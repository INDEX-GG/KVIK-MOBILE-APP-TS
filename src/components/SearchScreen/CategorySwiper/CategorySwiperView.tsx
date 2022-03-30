import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { CategorySwiperPress, SearchScreenCategory } from './types';
import CategorySwiperItem from './CategorySwiperItem';
import { useCategorySwiperStyles } from './styles';

interface CategorySwiperViewProps {
  categoryData: SearchScreenCategory[];
  handlePressIcon: CategorySwiperPress;
}

const CategorySwiperView: FC<CategorySwiperViewProps> = ({
  categoryData,
  handlePressIcon,
}) => {
  const styles = useCategorySwiperStyles();

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={categoryData}
        keyExtractor={(item) => item.title}
        renderItem={({ item, index }) => {
          return (
            <CategorySwiperItem
              key={item.title}
              item={item}
              index={index}
              dataLength={categoryData.length}
              handlePressIcon={handlePressIcon}
            />
          );
        }}
      />
    </View>
  );
};

export default CategorySwiperView;
