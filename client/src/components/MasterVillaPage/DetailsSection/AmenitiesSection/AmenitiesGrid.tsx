import { Grid } from '@chakra-ui/react';

import AmenityItem from './AmenityItem';

export type Amenity = {
  iconSrc: string;
  label: string;
};

type AmenitiesGridProps = {
  amenitiesData: Amenity[];
};

const AmenitiesGrid = ({ amenitiesData }: AmenitiesGridProps) => {
  return (
    <Grid
      width="100%"
      gridRowGap="1rem"
      gridColumnGap="1.4rem"
      gridTemplateRows="auto auto"
      gridTemplateColumns="1fr 1fr"
      gridAutoColumns="1fr"
    >
      {amenitiesData.map((amenity, index) => (
        <AmenityItem
          key={index}
          iconSrc={amenity.iconSrc}
          label={amenity.label}
        />
      ))}
    </Grid>
  );
};

export default AmenitiesGrid;
