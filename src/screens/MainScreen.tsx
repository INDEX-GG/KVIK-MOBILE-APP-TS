import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MessageScreen from './MessageScreen';
import PlaceOfferScreen from './PlaceOfferScreen';
import FavoriteScreen from './FavoriteScreen';
import AccountScreen from './AccountScreen';
import SearchScreen from './SearchScreen';
import Logo from '../assets/LogoIcon.svg';
import Message from '../assets/Message.svg';
import Like from '../assets/FavoriteLike.svg';
import Profile from '../assets/AccountProfile.svg';
import PlaceOffer from '../assets/AddNewProductIcon.svg';

const buttonsNavigation = [
  {name: 'MainScreen', component: SearchScreen, options: {title: 'Поиск'}},
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

const generateIcon = (routeName: string, focused: boolean, color: string) => {
  const styleColor = {color: focused ? color : '#8F8F8F'};
  switch (routeName) {
    case 'MainScreen':
      return <Logo style={styleColor as {}} />;
    case 'PlaceOfferScreen':
      return <PlaceOffer style={styleColor as {}} />;
    case 'FavoriteScreen':
      return <Like style={styleColor as {}} />;
    case 'AccountScreen':
      return <Profile style={styleColor as {}} />;
    case 'MessageScreen':
      return <Message style={styleColor as {}} />;
  }
};

const MainScreen: FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          return generateIcon(route.name, focused, color);
        },
        tabBarActiveTintColor: '#00A0AB',
      })}>
      {buttonsNavigation.map(buttonProps => (
        <Tab.Screen key={buttonProps.name} {...buttonProps} />
      ))}
    </Tab.Navigator>
  );
};

export default MainScreen;
