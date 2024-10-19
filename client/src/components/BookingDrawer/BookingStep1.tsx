import { Heading } from '@chakra-ui/react';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../utils/styles/slickSlider.css';
import BookingCabinSlider from './BookingCabinSlider';

export const BookingStep1 = () => {
  return (
    <>
      <Heading
        fontSize={{ base: '1.75rem', md: '3rem', lg: '2.5rem' }}
        m={{
          base: '1rem 0 0.5rem 0',
          md: '1.75rem 0 2rem 0',
          lg: '1.5rem 0 2rem 0',
        }}
      >
        Select Cabin
      </Heading>
      <BookingCabinSlider />
    </>
  );
};
