import { useRef } from 'react';
import StickyCalendar from './CalendarSection/StickyCalendar/StickyCalendar';
import useDarkNavbar from '../../../utils/hooks/useDarkNavbar';
import { Box, Grid } from '@chakra-ui/react';
import DetailsLeftSection from './DetailsLeftSection/DetailsLeftSection';
import { getAmenitiesFromEachCategory } from '../../../utils/helperFunctions.utils';
import { useTranslation } from 'react-i18next';
import { AmenitiesByCategory, Card, Feature } from '../../../utils/types';

const DetailsSection: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  useDarkNavbar(sectionRef);
  const { t } = useTranslation();
  const cardItems = t('masterVilla.cardItems', {
    returnObjects: true,
  }) as Card[];
  const featuresArray = t('masterVilla.featuresArray', {
    returnObjects: true,
  }) as Feature[];
  const amenitiesByCategory = t('masterVilla.amenitiesByCategory', {
    returnObjects: true,
  }) as AmenitiesByCategory;

  const amenitiesList = getAmenitiesFromEachCategory(amenitiesByCategory);

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
            amenities={amenitiesList}
            modalRef={modalRef}
          />
          <StickyCalendar />
        </Grid>
      </Box>
    </>
  );
};

export default DetailsSection;
