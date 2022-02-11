import React, { FC } from 'react';
import { ThemeProvider } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useCurrentTheme } from '../hooks/useTheme';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { allScreensApp } from '../router/AllScreensApp';
import BottomSheetModal from '../UI/BottomSheetCustom/BottomSheetCustom';

const MainLayout: FC = () => {
  const Stack = createNativeStackNavigator();
  const { theme } = useCurrentTheme();


  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {allScreensApp.map((screen) => (
              <Stack.Screen
                key={screen.name}
                name={screen.name}
                component={screen.component}
                options={screen.options}
              />
            ))}
          </Stack.Navigator>
          <BottomSheetModal />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
