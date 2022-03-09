// import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import { allReducers } from './allReducers';

// const rootReducer = combineReducers(allReducers);
//
// export const store = createStore(rootReducer, applyMiddleware(thunk));
//
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;

import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers(allReducers);

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
