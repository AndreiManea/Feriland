import React, { useEffect } from 'react';
import DetailsSection from './DetailsSection/DetailsSection';
import HeroSection from './HeroSection/HeroSection';
import { useAppDispatch } from '../../redux/hooks';
import { setBookedDates } from '../../redux/slices/bookingsDatesSlice';

const MasterVillaPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchDates = async () => {
      const request = await fetch('https://feriland.onrender.com/reservations');
      const response = await request.json();
      dispatch(setBookedDates(response.dates));
    };
    fetchDates();
  }, []);

  return (
    <>
      <HeroSection />
      <DetailsSection />
    </>
  );
};

export default MasterVillaPage;
