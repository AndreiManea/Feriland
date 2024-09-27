import { Link, Text, VStack } from '@chakra-ui/react';
import AmenitiesGrid from './AmenitiesGrid';
import AmenitiesModal from '../AmenitiesModal/AmenitiesModal';
import { useState } from 'react';
import { totalAmenities } from '../../../../utils/helperFunctions.utils';
import { Amenity } from '../../../../utils/types';

interface AmenitiesSectionProps {
  amenities: Amenity[];
  modalRef: React.RefObject<HTMLDivElement>;
}

const AmenitiesSection = ({ amenities, modalRef }: AmenitiesSectionProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event?.preventDefault();
    setShowDetails(!showDetails);
  };

  return (
    <VStack
      gridGap="2rem"
      alignItems="flex-start"
      position="relative"
      width="100%"
      display={{ base: 'none', lg: 'block' }}
    >
      <Text mb="0" mt="0.8rem" fontWeight="800">
        What this place offers
      </Text>
      <AmenitiesGrid amenitiesData={amenities} />
      <Link
        href="#"
        onClick={toggleDetails}
        pr="0.2rem"
        pb="0.2rem"
        textDecoration="none"
      >
        <Text
          mb="0"
          fontSize="1.1rem"
          color="rgba(0, 0, 0, 0.8)"
          fontWeight="700"
        >
          View all {totalAmenities} amenities &gt;
        </Text>
      </Link>
      <AmenitiesModal
        showDetails={showDetails}
        toggleDetails={toggleDetails}
        modalRef={modalRef}
      />
    </VStack>
  );
};

export default AmenitiesSection;
