import React, { FC } from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import MessageScreen from '../MessageScreen/MessageScreen';
import PlaceOfferScreen from '../PlaceOfferScreen';
import FavoriteScreen from '../FavoriteScreen/FavoriteScreen';
import AccountScreen from '../AccountScreen/AccountScreen';
import SearchScreen from '../SearchScreen/SearchScreen';
import Logo from '../../assets/LogoIcon.svg';
import Message from '../../assets/Message.svg';
import Like from '../../assets/FavoriteLike.svg';
import Profile from '../../assets/AccountProfile.svg';
import PlaceOffer from '../../assets/AddNewProductIcon.svg';
import { useCurrentTheme } from '../../hooks/useTheme';
import { MainScreenStyle } from './styles';
import HeaderProfile from '../../components/AnyScreen/CustomHeaders/HeaderProfile/HeaderProfile';
import HeaderTab from '../../UI/HeaderTab/HeaderTab';

interface ButtonsNavigation {
  name: string;
  component: React.FC;
  options?: BottomTabNavigationOptions;
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
    options: {
      title: 'Сообщения',
      headerTitleAlign: 'center',
      header: () => <HeaderTab title={'Сообщения'} arrow={false} />,
    },
  },
  {
    name: 'PlaceOfferScreen',
    component: PlaceOfferScreen,
    options: {
      title: 'Разместить',
      headerTitleAlign: 'center',
      header: () => <HeaderTab title={'Разместить'} arrow={false} />,
    },
  },
  {
    name: 'FavoriteScreen',
    component: FavoriteScreen,
    options: {
      title: 'Избранное',
      headerTitleAlign: 'center',
      header: () => <HeaderTab title={'Избранное'} arrow={false} />,
    },
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

  // @ts-ignore
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
        <Tab.Screen
          key={buttonProps.name}
          name={buttonProps.name}
          component={buttonProps.component}
          options={buttonProps.options}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MainScreen;
