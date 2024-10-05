import { useBreakpointValue, VStack } from '@chakra-ui/react';
import HeaderSection from '../HeaderSection/HeaderSection';
import RoomCardsSection from '../RoomCardsSection/RoomCardsSection';
import FeatureDetailsSection from '../FeatureDetailsSection/FeatureDetailsSection';
import DetailsTabsSection from '../DetailsTabsSection/DetailsTabsSection';
import AmenitiesSection from '../AmenitiesSection/AmenitiesSection';
import { Amenity, Card, Feature } from '../../../../utils/types';
import CalendarSection from '../CalendarSection/CalendarSection';
import DetailsDivider from './DetailsDivider';

interface DetailsLeftSectionProps {
  cardItems: Card[];
  featuresArray: Feature[];
  amenities: Amenity[];
  modalRef: React.RefObject<HTMLDivElement>;
}

const DetailsLeftSection = ({
  cardItems,
  featuresArray,
  amenities,
  modalRef,
}: DetailsLeftSectionProps) => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <VStack
      alignItems="flex-start"
      gridGap="4rem"
      position="static"
      pb={{ base: '1rem', md: '2rem', lg: '0' }}
    >
      <HeaderSection />
      <RoomCardsSection cardItems={cardItems} />
      <DetailsDivider />
      <FeatureDetailsSection featuresArray={featuresArray} />
      <DetailsDivider />
      <DetailsTabsSection />
      <DetailsDivider />
      <AmenitiesSection amenities={amenities} modalRef={modalRef} />
      {!isMobile && <DetailsDivider />}
      {!isMobile && <CalendarSection customClass="sectionCalendar" />}
    </VStack>
  );
};

export default DetailsLeftSection;
