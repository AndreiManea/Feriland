import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingsDrawerState {
  isBookingDrawerOpen: boolean;
}

const initialState: BookingsDrawerState = {
  isBookingDrawerOpen: false,
};

export const bookingsDrawerSlice = createSlice({
  name: 'bookingsDrawer',
  initialState,
  reducers: {
    setBookingDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isBookingDrawerOpen = action.payload;
    },
  },
});

export const { setBookingDrawerOpen } = bookingsDrawerSlice.actions;

export default bookingsDrawerSlice.reducer;
