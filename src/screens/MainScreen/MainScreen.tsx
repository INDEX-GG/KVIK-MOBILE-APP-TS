import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MessageScreen from '../MessageScreen';
import PlaceOfferScreen from '../PlaceOfferScreen';
import FavoriteScreen from '../FavoriteScreen';
import AccountScreen from '../AccountScreen/AccountScreen';
import SearchScreen from '../SearchScreen/SearchScreen';
import Logo from '../../assets/LogoIcon.svg';
import Message from '../../assets/Message.svg';
import Like from '../../assets/FavoriteLike.svg';
import Profile from '../../assets/AccountProfile.svg';
import PlaceOffer from '../../assets/AddNewProductIcon.svg';
import { useCurrentTheme } from '../../hooks/useTheme';
import { MainScreenStyle } from './styles';
import HeaderProfile from '../../components/CustomHeaders/HeaderProfile/HeaderProfile';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

interface ButtonsNavigation {
  name: string;
  component: React.FC;
  options?: NativeStackNavigationOptions;
}

const buttonsNavigation: ButtonsNavigation[] = [
  {
    name: 'MainScreen',
    component: SearchScreen,
    options: { title: 'Поиск', headerShown: false },
  },
  {
    name: 'MessageScreen',
    component: MessageScreen,
    options: { title: 'Сообщения', headerTitleAlign: 'center' },
  },
  {
    name: 'PlaceOfferScreen',
    component: PlaceOfferScreen,
    options: { title: 'Разместить', headerTitleAlign: 'center' },
  },
  {
    name: 'FavoriteScreen',
    component: FavoriteScreen,
    options: { title: 'Избранное', headerTitleAlign: 'center' },
  },
  {
    name: 'AccountScreen',
    component: AccountScreen,
    options: {
      title: 'Мой профиль',
      headerTitleAlign: 'center',
      header: () => <HeaderProfile />,
    },
  },
];

const generateIcon = (
  routeName: string,
  focused: boolean,
  color: string,
  disabledColor: string
) => {
  const styleColor = { color: focused ? color : disabledColor };
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
  const { theme } = useCurrentTheme();
  const Tab = createBottomTabNavigator();
  const styles = MainScreenStyle();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          return generateIcon(
            route.name,
            focused,
            color,
            theme.colorBottomTabIcon.color
          );
        },
        tabBarActiveTintColor: '#00A0AB',
        headerTintColor: theme.colorHeaderTitle.color,
        ...styles,
      })}
    >
      {buttonsNavigation.map((buttonProps) => (
        <Tab.Screen key={buttonProps.name} {...buttonProps} />
      ))}
    </Tab.Navigator>
  );
};

export default MainScreen;
