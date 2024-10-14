import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Range } from 'react-date-range';
import { BookingForm } from '../../types/form';

export interface SerializableRange
  extends Omit<Range, 'startDate' | 'endDate'> {
  startDate: Date | string | undefined;
  endDate: Date | string | undefined;
}

interface BookingsState {
  bookedDates: string[];
  selectedDates: SerializableRange;
  selectedNights: number;
  selectedPersons: { adults: number; children: number };
  selectedCabin: string;
  isBookingDrawerOpen: boolean;
  bookingStep: number;
  bookingFormData: BookingForm;
}

const initialState: BookingsState = {
  bookedDates: [],
  selectedDates: {
    startDate: new Date().toISOString(),
    endDate: new Date(
      new Date().setDate(new Date().getDate() + 2)
    ).toISOString(),
  },
  selectedNights: 2,
  selectedPersons: { adults: 1, children: 0 },
  selectedCabin: '',
  isBookingDrawerOpen: false,
  bookingStep: 1,
  bookingFormData: { ...({} as BookingForm), selectedLanguage: 'en' },
};

export const bookingsSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setSelectedDates: (state, action: PayloadAction<SerializableRange>) => {
      const { startDate, endDate } = action.payload;
      state.selectedDates = { startDate, endDate };
    },
    setSelectedNights: (state, action: PayloadAction<number>) => {
      state.selectedNights = action.payload;
    },
    setSelectedPersons: (
      state,
      action: PayloadAction<{ adults: number; children: number }>
    ) => {
      state.selectedPersons = action.payload;
    },
    setSelectedCabin: (state, action: PayloadAction<string>) => {
      state.selectedCabin = action.payload;
    },
    setBookedDates: (state, action: PayloadAction<string[]>) => {
      state.bookedDates = action.payload;
    },
    setBookingDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isBookingDrawerOpen = action.payload;
    },
    setBookingStep: (state, action: PayloadAction<number>) => {
      state.bookingStep = action.payload;
    },
    setBookingForm: (state, action: PayloadAction<BookingForm>) => {
      state.bookingFormData = action.payload;
    },
    setAdditionalNotes: (state, action: PayloadAction<string>) => {
      state.bookingFormData = {
        ...state.bookingFormData,
        additionalInfo: action.payload,
      };
    },
    setCurrentLanguage: (state, action: PayloadAction<string>) => {
      state.bookingFormData = {
        ...state.bookingFormData,
        selectedLanguage: action.payload,
      };
    },
    updateBookingFormField: (
      state,
      action: PayloadAction<{ field: keyof BookingForm; value: string }>
    ) => {
      state.bookingFormData[action.payload.field] = action.payload.value;
    },
  },
});

export const {
  setBookedDates,
  setSelectedDates,
  setSelectedNights,
  setSelectedPersons,
  setSelectedCabin,
  setBookingDrawerOpen,
  setBookingStep,
  setBookingForm,
  updateBookingFormField,
  setAdditionalNotes,
  setCurrentLanguage,
} = bookingsSlice.actions;

export default bookingsSlice.reducer;
