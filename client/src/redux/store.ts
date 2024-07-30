import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import bookingsReducer from './slices/bookingsSlice';
import stylesReducer from './slices/stylesSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
    styles: stylesReducer,
  },
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
