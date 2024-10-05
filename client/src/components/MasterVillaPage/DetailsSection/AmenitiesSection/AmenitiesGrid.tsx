import { Grid } from '@chakra-ui/react';

import AmenityItem from './AmenityItem';
import { Amenity } from '../../../../utils/types';

interface AmenitiesGridProps {
  amenitiesData: Amenity[];
}

const AmenitiesGrid = ({ amenitiesData }: AmenitiesGridProps) => {
  return (
    <Grid
      width="100%"
      gridRowGap={{ base: '1.5rem', md: '1rem' }}
      gridColumnGap="1.4rem"
      gridTemplateRows="auto auto"
      gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gridAutoColumns="1fr"
    >
      {amenitiesData.map((amenity, index) => (
        <AmenityItem key={index} iconSrc={amenity.src} label={amenity.text} />
      ))}
    </Grid>
  );
};

export default AmenitiesGrid;
