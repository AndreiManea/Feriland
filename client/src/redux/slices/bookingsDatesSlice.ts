import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingsDatesState {
  bookedDates: string[];
}

const initialState: BookingsDatesState = {
  bookedDates: [],
};

export const bookingsDatesSlice = createSlice({
  name: 'bookingsDates',
  initialState,
  reducers: {
    setBookedDates: (state, action: PayloadAction<string[]>) => {
      state.bookedDates = action.payload;
    },
  },
});

export const { setBookedDates } = bookingsDatesSlice.actions;

export default bookingsDatesSlice.reducer;
