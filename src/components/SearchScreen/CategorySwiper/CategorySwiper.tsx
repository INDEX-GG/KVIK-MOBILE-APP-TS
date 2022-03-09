import React from 'react';
import { View } from 'react-native';
import CategorySwiperView from './CategorySwiperView';

import Smartphone from '../../../assets/CategorySmartphone.svg';
import Notebook from '../../../assets/CategoryNotebook.svg';
import RealEstate from '../../../assets/CategoryRealEstate.svg';
import Work from '../../../assets/CategoryWork.svg';
import Auto from '../../../assets/CategoryCar.svg';
import Services from '../../../assets/CategoryServices.svg';
import Motorycles from '../../../assets/CategoryMotorcycle.svg';
import Cottage from '../../../assets/CategoryCottages.svg';
import AutoSpare from '../../../assets/CategorySpare.svg';
import Hobby from '../../../assets/CategoryHobby.svg';
import Animals from '../../../assets/CategoryAnimals.svg';
import AnimalsDark from '../../../assets/CategoryAnimalsWhite.svg';
import HomeGarden from '../../../assets/CategoryHomeGarden.svg';
import Personal from '../../../assets/CategoryPersonal.svg';
import ConsumerElectronic from '../../../assets/CategoryElectronic.svg';
import { useCurrentTheme } from '../../../hooks/useTheme';
import { SearchScreenCategory } from './types';
import { useRouter } from '../../../hooks/useRouter';

const category = (isDark: boolean) => {
  return [
    { title: 'Смартфоны', icon: Smartphone },
    { title: 'Ноутбуки', icon: Notebook },
    { title: 'Квартиры', icon: RealEstate },
    { title: 'Работа', icon: Work },
    { title: 'Автомобили', icon: Auto },
    { title: 'Услуги', icon: Services },
    { title: 'Мотоциклы', icon: Motorycles },
    { title: 'Дома, дачи \nи коттеджи', icon: Cottage },
    { title: 'Запчасти для \nавтомобилей', icon: AutoSpare },
    { title: 'Хобби спорт \nи отдых', icon: Hobby },
    { title: 'Животные', icon: isDark ? AnimalsDark : Animals },
    { title: 'Для дома \nи дачи', icon: HomeGarden },
    { title: 'Личные вещи', icon: Personal },
    { title: 'Бытовая \nэлектроника', icon: ConsumerElectronic },
  ];
};

const CategorySwiper = () => {
  const { isDark } = useCurrentTheme();
  const { pushTo } = useRouter();

  const handlePressIcon = (item: SearchScreenCategory) => {
    return () => {
      console.log(item);
      pushTo('Details')();
    };
  };

  return (
    <CategorySwiperView
      categoryData={category(isDark)}
      handlePressIcon={handlePressIcon}
    />
  );
};

export default CategorySwiper;
