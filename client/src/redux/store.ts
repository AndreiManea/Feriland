import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Import your reducers here
import bookingsDrawerReducer from './slices/bookingsDrawerSlice';
import bookingsDatesReducer from './slices/bookingsDatesSlice';
import bookingsFormReducer from './slices/bookingsFormSlice';

import stylesReducer from './slices/stylesSlice';
import loadingReducer from './slices/loadingSlice';

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['bookingsForm'], // Specify which reducers you want to persist
};

// Combine your reducers
const rootReducer = combineReducers({
  bookingsForm: bookingsFormReducer,
  bookingsDates: bookingsDatesReducer,
  bookingsDrawer: bookingsDrawerReducer,
  styles: stylesReducer,
  loading: loadingReducer,
});

// Apply persistence to the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // disable check because redux-persist may add non-serializable values
    }),
});

// Persistor to be used in the app root component
export const persistor = persistStore(store);

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
