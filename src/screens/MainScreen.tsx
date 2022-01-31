import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TestComp from '../components/TestComp';
import MessageScreen from './MessageScreen';
import PlaceOfferScreen from './PlaceOfferScreen';
import FavoriteScreen from './FavoriteScreen';
import AccountScreen from './AccountScreen';
// @ts-ignore
import {ReactComponent as Logo} from '../assets/LogoIcon.svg';
import { Text } from 'react-native-elements';

const buttonsNavigation = [
  {name: 'MainScreen', component: TestComp, options: {title: 'Поиск'}},
  {
    name: 'MessageScreen',
    component: MessageScreen,
    options: {title: 'Сообщения'},
  },
  {
    name: 'PlaceOfferScreen',
    component: PlaceOfferScreen,
    options: {title: 'Разместить'},
  },
  {
    name: 'FavoriteScreen',
    component: FavoriteScreen,
    options: {title: 'Избранное'},
  },
  {
    name: 'AccountScreen',
    component: AccountScreen,
    options: {title: 'Профиль'},
  },
];

const MainScreen = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      {buttonsNavigation.map(buttonProps => (
        <Tab.Screen
          key={buttonProps.name}
          {...buttonProps}
          options={{
            title: buttonProps.options.title,
            tabBarIcon: ({color, size}) => {
              return <Text>23</Text>;
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainScreen;
