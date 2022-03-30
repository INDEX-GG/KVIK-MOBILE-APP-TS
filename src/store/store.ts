import { allReducers } from './allReducers';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers(allReducers);

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
    // enhancers: [devToolsEnhancer({ realtime: true })],
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
