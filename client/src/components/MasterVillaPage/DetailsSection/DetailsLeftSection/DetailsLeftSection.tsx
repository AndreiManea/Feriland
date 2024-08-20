import { Box, VStack } from '@chakra-ui/react';
import HeaderSection from '../HeaderSection/HeaderSection';
import RoomCardsSection, { Card } from '../RoomCardsSection/RoomCardsSection';
import FeatureDetailsSection, {
  Feature,
} from '../FeatureDetailsSection/FeatureDetailsSection';
import DetailsTabsSection from '../DetailsTabsSection/DetailsTabsSection';
import AmenitiesSection from '../AmenitiesSection/AmenitiesSection';
import { Amenity } from '../AmenitiesSection/AmenitiesGrid';

type DetailsLeftSectionProps = {
  cardItems: Card[];
  featuresArray: Feature[];
  amenities: Amenity[];
  modalRef: React.RefObject<HTMLDivElement>;
};

const DetailsLeftSection = ({
  cardItems,
  featuresArray,
  amenities,
  modalRef
}: DetailsLeftSectionProps) => {
  return (
    <VStack
      alignItems="flex-start"
      gridGap="4rem"
      position="static"
      pb="100rem"
    >
      <HeaderSection />
      <RoomCardsSection
        cardItems={cardItems}
      />
      <Box width="100%" height="0.1rem" backgroundColor="rgba(0, 0, 0, 0.2)" />
      <FeatureDetailsSection featuresArray={featuresArray} />
      <Box width="100%" height="0.1rem" backgroundColor="rgba(0, 0, 0, 0.2)" />
      <DetailsTabsSection />
      <Box width="100%" height="0.1rem" backgroundColor="rgba(0, 0, 0, 0.2)" />
      <AmenitiesSection amenities={amenities} modalRef={modalRef} />
      <Box width="100%" height="0.1rem" backgroundColor="rgba(0, 0, 0, 0.2)" />
    </VStack>
  );
};

export default DetailsLeftSection;