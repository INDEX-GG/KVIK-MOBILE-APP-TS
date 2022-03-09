/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import MainLayout from './src/layout/MainLayout/MainLayout';
import { Provider } from 'react-redux';
// import { store } from './src/store/store';
import { setupStore } from './src/store/store';
const store = setupStore();

const App = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
};

export default App;
