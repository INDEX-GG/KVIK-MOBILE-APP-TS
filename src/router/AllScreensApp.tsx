import React from 'react';
import MainScreen from '../screens/MainScreen/MainScreen';
import TestComp from '../components/TestComp';
import SettingsScreen from '../components/SettingsScreen/SettingsScreen/SettingsScreen';
import HeaderTab from '../UI/HeaderTab/HeaderTab';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import LocationSearchScreen from '../components/SettingsScreen/LocationSearchScreen/LocationSearchScreen';
import NotificationSearchScreen from '../components/SettingsScreen/NotificationSearchScreen/NotificationSearchScreen';
import ClearSearchResultScreens from '../components/SettingsScreen/ClearSearchResultScreens/ClearSearchResultScreens';
import LicenseScreen from '../components/SettingsScreen/LicenseScreen/LicenseScreen';
import PrivacyPolicyScreen from '../components/SettingsScreen/PrivacyPolicyScreen/PrivacyPolicyScreen';
import KvikUseScreen from '../components/SettingsScreen/KvikuseScreen/KvikUseScreen';
import OfferUseScreen from "../components/OfferUseScreen/OfferUseScreen";

interface Screens {
  name: string;
  component: React.FC;
  options?: NativeStackNavigationOptions;
}

export const allScreensApp: Screens[] = [
  {
    name: 'Main',
    component: MainScreen,
    options: { title: '', headerShown: false },
  },
  {
    name: 'Details',
    component: TestComp,
    options: { title: 'Объявление' },
  },
  {
    name: 'Settings',
    component: SettingsScreen,
    options: {
      title: 'Настройки',
      header: () => <HeaderTab title={'Настройки'} />,
    },
  },
  {
    name: 'LocationSearch',
    component: LocationSearchScreen,
    options: {
      title: 'Город',
      header: () => <HeaderTab title={'Город'} />,
    },
  },
  {
    name: 'NotificationScreen',
    component: NotificationSearchScreen,
    options: {
      title: 'Push-уведомления',
      header: () => <HeaderTab title={'Push-уведомления'} />,
    },
  },
  {
    name: 'ClearSearchResultScreen',
    component: ClearSearchResultScreens,
    options: {
      title: 'Очистить историю поисков',
      header: () => <HeaderTab title={'Очистить историю поисков'} />,
    },
  },
  {
    name: 'LicenseScreen',
    component: LicenseScreen,
    options: {
      title: 'Лицензионное соглашение',
      header: () => <HeaderTab title="Лицензионное соглашение" />,
    },
  },
  {
    name: 'PrivacyPolicyScreen',
    component: PrivacyPolicyScreen,
    options: {
      title: 'Политика конфиденциальности',
      header: () => <HeaderTab title="Политика конфиденциальности" />,
    },
  },
  {
    name: 'KvikUseScreen',
    component: KvikUseScreen,
    options: {
      title: 'Условия использования Kvik',
      header: () => <HeaderTab title="Условия использования Kvik" />,
    },
  },
  {
    name: 'OfferUseScreen',
    component: OfferUseScreen,
    options: {
      title: 'Оферта на использование услуг',
      header: () => <HeaderTab title="Оферта на использование услуг" />,
    },
  },
];
