import { Box, useBreakpointValue } from '@chakra-ui/react';
import Slider, { Settings } from 'react-slick';
import ActivitySlide from './ActivitySlide';
// import { slidesData } from '../../utils/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../utils/styles/slickSlider.css';
import { useTranslation } from 'react-i18next';
import { Slide, SlideDescription, SlideKey } from '../../utils/types';
import { activitiesImages } from '../../utils/data/activitiesData';

const ActivitiesSlider = () => {
  const { t } = useTranslation();
  const translationsForSlides = t('homePage.activitiesSlider', {
    returnObjects: true,
  }) as SlideDescription[];
  const combinedSlidesImages = translationsForSlides.reduce<
    Record<string, Slide>
  >((acc, item) => {
    const key = item.name as SlideKey;
    if (key && activitiesImages[key]) {
      acc[key] = { ...activitiesImages[key], ...item };
    }
    return acc;
  }, {});
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
        {Object.entries(combinedSlidesImages).map(([key, item]) => (
          <ActivitySlide
            key={key}
            title={item.title}
            description={item.description}
            imgSrc={item.imgSrc}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ActivitiesSlider;
