import { Box } from '@chakra-ui/react';
import { ActivitiesSection } from '../ActivitiesSection/ActivitiesSection';
import ExploreSection from './ExploreSection/ExploreSection';
import GallerySection from './GallerySection/GallerySection';
import HeroSection from './HeroSection/HeroSection';

const HomePage = () => {
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
