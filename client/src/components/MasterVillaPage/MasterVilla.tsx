import React, { useEffect } from 'react';
import DetailsSection from './DetailsSection/DetailsSection';
import HeroSection from './HeroSection/HeroSection';

const MasterVillaPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroSection />
      <DetailsSection />
    </>
  );
};

export default MasterVillaPage;
