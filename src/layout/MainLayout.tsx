import React, {FC} from 'react';
import {ThemeProvider} from 'react-native-elements';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import TestComp from '../components/TestComp';
import {useCurrentTheme} from '../hooks/useTheme';

const MainLayout: FC = () => {
  const Stack = createNativeStackNavigator();
  const {theme} = useCurrentTheme();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={MainScreen}
            options={{title: '', headerShown: false}}
          />
          <Stack.Screen
            name="Details"
            component={TestComp}
            options={{title: 'Объявление'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default MainLayout;
