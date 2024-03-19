import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Range } from 'react-date-range';

export interface SerializableRange
  extends Omit<Range, 'startDate' | 'endDate'> {
  startDate: Date | string | undefined;
  endDate: Date | string | undefined;
}

interface BookingsState {
  bookedDates: SerializableRange[];
  selectedDates: SerializableRange[];
  selectedNights: number;
  isBookingDrawerOpen: boolean;
}

const initialState: BookingsState = {
  bookedDates: [],
  selectedDates: [
    {
      startDate: new Date().toISOString(),
      endDate: new Date(
        new Date().setDate(new Date().getDate() + 2)
      ).toISOString(),
    },
  ],
  selectedNights: 2,
  isBookingDrawerOpen: false,
};

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setSelectedDates: (state, action: PayloadAction<SerializableRange[]>) => {
      const { startDate, endDate } = action.payload[0];
      state.selectedDates = [{ startDate, endDate }];
    },
    setSelectedNights: (state, action: PayloadAction<number>) => {
      state.selectedNights = action.payload;
    },
    setBookedDates: (state, action: PayloadAction<SerializableRange[]>) => {
      state.bookedDates = action.payload;
    },
    setBookingDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isBookingDrawerOpen = action.payload;
    },
  },
});

export const {
  setBookedDates,
  setSelectedDates,
  setSelectedNights,
  setBookingDrawerOpen,
} = bookingsSlice.actions;

export default bookingsSlice.reducer;
