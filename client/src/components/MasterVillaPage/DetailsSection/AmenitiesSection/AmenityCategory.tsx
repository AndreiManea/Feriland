import { Grid, Heading } from '@chakra-ui/react';
import AmenityItem from '../AmenitiesSection/AmenityItem';

const categoryNames: Record<string, string> = {
  scenicViews: 'Scenic Views',
  bathroom: 'Bathroom',
  bedroomLaundry: 'Bedroom & Laundry',
  entertainment: 'Entertainment',
  kitchenDining: 'Kitchen & Dining',
  outdoor: 'Outdoor',
};

type Amenity = {
  src: string;
  text: string;
};

interface AmenityCategoryProps {
  categoryName: string;
  amenities: Amenity[];
}

const AmenityCategory = ({ categoryName, amenities }: AmenityCategoryProps) => {
  const displayCategoryName = categoryNames[categoryName] || categoryName;

  return (
    <>
      <Heading as="h4" size="h4" mb="0px" mt="0.8rem">
        {displayCategoryName}
      </Heading>
      <Grid
        width="100%"
        gridRowGap="1rem"
        gridColumnGap="1.4rem"
        gridTemplateRows="auto auto"
        gridTemplateColumns="1fr 1fr"
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
