import { Box } from '@chakra-ui/react';
import Slider, { Settings } from 'react-slick';
import ActivitySlide from './ActivitySlide';
import { slidesData } from '../../utils/data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../utils/styles/slickSlider.css';

const ActivitiesSlider = () => {
  const settings: Settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 2.75,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
    touchThreshold: 25,
  };

  return (
    <Box cursor="grab" _active={{ cursor: 'grabbing' }}>
      <Slider {...settings}>
        {slidesData.map(slide => (
          <ActivitySlide
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
