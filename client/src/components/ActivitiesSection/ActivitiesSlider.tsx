import { Box, useBreakpointValue } from '@chakra-ui/react';
import Slider, { Settings } from 'react-slick';
import ActivitySlide from './ActivitySlide';
// import { slidesData } from '../../utils/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../utils/styles/slickSlider.css';
import { useTranslation } from 'react-i18next';
import { Slide } from '../../utils/types';

const ActivitiesSlider = () => {
  const { t } = useTranslation();
  const slides = t('homePage.activitiesSlider', {
    returnObjects: true,
  }) as Slide[];
  const slideToShowResponsive = useBreakpointValue({
    base: 1.3,
    md: 1.5,
    lg: 2.75,
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
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <ActivitySlide
            key={index}
            title={slide.title}
            description={slide.description}
            imgSrc={slide.imgSrc}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ActivitiesSlider;
