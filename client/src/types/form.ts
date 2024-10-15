import { SerializableRange } from '../redux/slices/bookingsFormSlice';

export interface BookingForm {
  firstName: string;
  lastName: string;
  telephone: string;
  email: string;
  address: string;
  personalNumericCode: string;
  selectedLanguage: string;
  additionalInfo?: string;
}

export interface BookingSummary extends BookingForm {
  selectedPersons: { adults: number; children: number };
  selectedCabin: string;
  selectedDates: SerializableRange[];
}
