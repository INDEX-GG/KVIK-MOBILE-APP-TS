import React, {FC} from 'react';
import {Provider} from 'react-redux';
import {store} from '../store/store';
import {ThemeProvider} from 'react-native-elements';
import {lightTheme} from '../theme/theme';
import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';

const MainLayout: FC = () => {
  // const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <NavigationContainer>
          {/*<Stack.Navigator>*/}
          {/*  <Stack.Screen*/}
          {/*    name="Main"*/}
          {/*    component={MainScreen}*/}
          {/*    options={{title: ''}}*/}
          {/*  />*/}
          {/*  <Stack.Screen*/}
          {/*    name="Details"*/}
          {/*    component={TestComp}*/}
          {/*    options={{title: ''}}*/}
          {/*  />*/}
          {/*</Stack.Navigator>*/}
          <MainScreen />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
};

export default MainLayout;
