import Activities from '../ActivitiesSection/ActivitiesSection';
import ExploreSection from './ExploreSection/ExploreSection';
import GallerySection from './GallerySection/GallerySection';
import HeroSection from './HeroSection/HeroSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <Activities />
    </>
  );
};

export default HomePage;
