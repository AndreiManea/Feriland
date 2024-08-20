import { Link, Text, VStack } from '@chakra-ui/react';
import AmenitiesGrid, { Amenity } from './AmenitiesGrid';
import AmenitiesModal from '../AmenitiesModal/AmenitiesModal';
import { useState } from 'react';

type AmenitiesSectionProps = {
  amenities: Amenity[];
  modalRef: React.RefObject<HTMLDivElement>;
};

const AmenitiesSection = ({ amenities, modalRef }: AmenitiesSectionProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event?.preventDefault();
    setShowDetails(!showDetails);
  };

  return (
    <VStack
      gridGap="2rem"
      alignItems="flex-start"
      position="relative"
      width="100%"
    >
      <Text mb="0px" mt="0.8rem" fontWeight="800">
        What this place offers
      </Text>
      <AmenitiesGrid amenitiesData={amenities} />
      <Link
        href="#"
        data-lenis-stop=""
        data-w-id="a6438947-7b1b-9754-0d0b-3ecc7d6e76c8"
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
          View all 42 amenities &gt;
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
