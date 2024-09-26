import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import bookingsReducer from './slices/bookingsSlice';
import stylesReducer from './slices/stylesSlice';
import loadingReducer from './slices/loadingSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    styles: stylesReducer,
    loading: loadingReducer,
  },
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
