import { Box, useBreakpointValue } from '@chakra-ui/react';
import Slider, { Settings } from 'react-slick';
import { CABIN_DESCRIPTION, COZY_DESCRIPTION } from '../../utils/texts';
import BookingCabinCard from './BookingCabinCard';
import masterVillaImg from '../../assets/MasterVillaThumbnail.webp';
import mobileHomeImg from '../../assets/mobileHome.webp';

const BookingCabinSlider = () => {
  const slideToShowResponsive = useBreakpointValue({
    base: 1.1,
    md: 1.5,
    lg: 1.75,
  });

  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: slideToShowResponsive,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 25,
  };
  return (
    <Box cursor="grab" _active={{ cursor: 'grabbing' }}>
      <Slider className="bookingSlider" {...settings}>
        <BookingCabinCard
          cabinImg={masterVillaImg}
          cabinName="Master Villa"
          cabinDescription={CABIN_DESCRIPTION}
          cabinPrice={1500}
          persons={6}
        />
        <BookingCabinCard
          cabinImg={mobileHomeImg}
          cabinName="Cozy Villa"
          cabinDescription={COZY_DESCRIPTION}
          cabinPrice={1000}
          persons={4}
        />
        <BookingCabinCard
          cabinImg={masterVillaImg}
          cabinName="Second Villa"
          cabinDescription={CABIN_DESCRIPTION}
          cabinPrice={1500}
          isDisabled
          persons={6}
        />
      </Slider>
    </Box>
  );
};

export default BookingCabinSlider;
