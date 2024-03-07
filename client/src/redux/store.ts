import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here
import bookingsReducer from './slices/bookingsSlice';

export const store = configureStore({
  reducer: {
    bookings: bookingsReducer,
  },
});

// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
