import { useEffect } from 'react';
import DetailsSection from './DetailsSection/DetailsSection';
import HeroSection from './HeroSection/HeroSection';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setBookedDates } from '../../redux/slices/bookingsDatesSlice';
import {
  setSelectedCabin,
  setSelectedDates,
} from '../../redux/slices/bookingsFormSlice';
import {
  findFirstAvailableTwoNights,
  parseDateStrings,
} from '../../utils/calendar';

const MasterVillaPage = ({ pageName }: { pageName: string }) => {
  const dispatch = useAppDispatch();
  const bookedDates = useAppSelector(
    state =>
      state.bookingsDates.bookedDates[
        pageName as keyof typeof state.bookingsDates.bookedDates
      ]
  );
  const firstAvailableDates = findFirstAvailableTwoNights(
    parseDateStrings(bookedDates)
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDates = async () => {
      const request = await fetch('https://feriland.onrender.com/reservations');
      const response = await request.json();
      dispatch(setBookedDates(response.dates));
      dispatch(setSelectedCabin(pageName));
    };
    fetchDates();
  }, []);

  useEffect(() => {
    dispatch(setSelectedDates(firstAvailableDates));
  }, [bookedDates]);

  return (
    <>
      <HeroSection />
      <DetailsSection pageName={pageName} />
    </>
  );
};

export default MasterVillaPage;
