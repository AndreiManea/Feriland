import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

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

// Combine reducers
const appReducer = combineReducers({
  bookingsForm: bookingsFormReducer,
  bookingsDates: bookingsDatesReducer,
  bookingsDrawer: bookingsDrawerReducer,
  styles: stylesReducer,
  loading: loadingReducer,
});

// Higher-order root reducer to handle store reset
const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: { type: string }
) => {
  if (action.type === 'RESET_STORE') {
    state = undefined;
  }
  return appReducer(state, action);
};

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Persistor for redux-persist
export const persistor = persistStore(store);

// Action to reset the store
export const resetStore = () => ({ type: 'RESET_STORE' });

// Helper function to reset store and purge persisted data
export const resetApplication = () => {
  store.dispatch(resetStore()); // Reset Redux state
  persistor.purge(); // Clear persisted state
};

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
