import Footer from '../Footer/Footer';
import SliderSection from '../SliderSection/SliderSection';
import ExploreSection from './ExploreSection/ExploreSection';
import GallerySection from './GallerySection/GallerySection';
import HeroSection from './HeroSection/HeroSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ExploreSection />
      <GallerySection />
      <SliderSection />
      <Footer />
    </>
  );
};

export default HomePage;
