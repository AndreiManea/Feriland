import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BookingsDatesState {
  bookedDates: { masterVilla: string[]; cozyCabin: string[] };
}

const initialState: BookingsDatesState = {
  bookedDates: { masterVilla: [], cozyCabin: [] },
};

export const bookingsDatesSlice = createSlice({
  name: 'bookingsDates',
  initialState,
  reducers: {
    setBookedDates: (
      state,
      action: PayloadAction<{ masterVilla: string[]; cozyCabin: string[] }>
    ) => {
      state.bookedDates = action.payload;
    },
  },
});

export const { setBookedDates } = bookingsDatesSlice.actions;

export default bookingsDatesSlice.reducer;
