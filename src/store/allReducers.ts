import themeReducer from './reducers/themeSlice/themeSlice';
import homeAdReducer from './reducers/homeAdSlice/homeAdSlice';
import bottomSheetReducer from './reducers/bottomSheetSlice/bottomSheetSlice';
import userReducer from './reducers/userSlice/userSlice';
import tokenReducer from './reducers/tokenSlice/tokenSlice';
import placeOfferReducer from './reducers/placeOfferSlice/placeOfferSlice';

export const allReducers = {
  themeReducer,
  homeAdReducer,
  bottomSheetReducer,
  placeOfferReducer,
  userReducer,
  tokenReducer,
};
