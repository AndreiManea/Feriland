import { Grid, Heading } from '@chakra-ui/react';
import AmenityItem from '../AmenitiesSection/AmenityItem';
import { categoryNames } from '../../../../utils/data';
import { Amenity } from '../../../../utils/types';

interface AmenityCategoryProps {
  categoryName: string;
  amenities: Amenity[];
}

const AmenityCategory = ({ categoryName, amenities }: AmenityCategoryProps) => {
  const displayCategoryName = categoryNames[categoryName];

  return (
    <>
      <Heading as="h4" size={{ base: 'h5', md: 'h4' }} mb="0" mt="0.8rem">
        {displayCategoryName}
      </Heading>
      <Grid
        width="100%"
        gridRowGap="1rem"
        gridColumnGap="1.4rem"
        gridTemplateRows={{ base: '1fr', md: 'auto auto' }}
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        gridAutoColumns="1fr"
      >
        {amenities.map((item, index) => (
          <AmenityItem key={index} iconSrc={item.src} label={item.text} />
        ))}
      </Grid>
    </>
  );
};

export default AmenityCategory;
