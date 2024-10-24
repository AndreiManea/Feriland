import { Box } from '@chakra-ui/react';
import { ActivitiesSection } from '../ActivitiesSection/ActivitiesSection';
import ExploreSection from './ExploreSection/ExploreSection';
import GallerySection from './GallerySection/GallerySection';
import HeroSection from './HeroSection/HeroSection';
import { useAppDispatch } from '../../redux/hooks';
import { useEffect } from 'react';
import { setBookedDates } from '../../redux/slices/bookingsDatesSlice';

const HomePage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const fetchDates = async () => {
      const request = await fetch('https://feriland.onrender.com/reservations');
      const response = await request.json();
      dispatch(setBookedDates(response.dates));
    };
    fetchDates();
  }, []);
  return (
    <Box background="rgb(234, 229, 223)">
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <ActivitiesSection />
    </Box>
  );
};

export default HomePage;
