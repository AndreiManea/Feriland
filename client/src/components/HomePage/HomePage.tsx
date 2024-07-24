import { Box } from '@chakra-ui/react';
import Activities from '../ActivitiesSection/ActivitiesSection';
import ExploreSection from './ExploreSection/ExploreSection';
import GallerySection from './GallerySection/GallerySection';
import HeroSection from './HeroSection/HeroSection';

const HomePage = () => {
  return (
    <Box backgroundColor="rgb(234, 229, 223)">
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <Activities />
    </Box>
  );
};

export default HomePage;
