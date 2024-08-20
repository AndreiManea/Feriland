import { useRef } from 'react';
import StickyCalendar from './CalendarSection/StickyCalendar/StickyCalendar';
import useDarkNavbar from '../../../utils/hooks/useDarkNavbar';
import { cardItems, featuresArray, amenitiesData } from '../../../utils/data';
import { Box, Grid } from '@chakra-ui/react';
import DetailsLeftSection from './DetailsLeftSection/DetailsLeftSection';

const DetailsSection: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useDarkNavbar(sectionRef);

  return (
    <>
      <Box
        position="static"
        pt="4rem"
        px="2rem"
        pb="0.8rem"
        mb="6.25rem"
        mx="auto"
        maxW="90rem"
        width="100%"
        ref={sectionRef}
      >
        <Grid
          gridGap="6rem"
          gridTemplateRows="auto"
          gridTemplateColumns="1.75fr 1fr"
          gridAutoColumns="1fr"
        >
          <DetailsLeftSection
            cardItems={cardItems}
            featuresArray={featuresArray}
            amenities={amenitiesData}
            modalRef={modalRef}
          />
          <StickyCalendar />
        </Grid>
      </Box>
    </>
  );
};

export default DetailsSection;
