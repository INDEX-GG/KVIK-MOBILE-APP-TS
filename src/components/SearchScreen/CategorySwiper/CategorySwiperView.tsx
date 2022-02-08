import React, { FC } from 'react';
import { FlatList, View } from 'react-native';
import { CategorySwiperPress, SearchScreenCategory } from './types';
import CategorySwiperItem from './CategorySwiperItem';
import { CategorySwiperStyles } from './styles';

interface CategorySwiperViewProps {
  categoryData: SearchScreenCategory[];
  handlePressIcon: CategorySwiperPress;
}

const CategorySwiperView: FC<CategorySwiperViewProps> = ({
  categoryData,
  handlePressIcon,
}) => {
  const styles = CategorySwiperStyles();

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
