import { Grid } from '@chakra-ui/react';
import RoomCard from './RoomCard';
import { useState } from 'react';
import GalleryModal from '../GalleryModal/GalleryModal';
import { Card } from '../../../../utils/types';

type RoomCardGridProps = {
  cardItems: Card[];
};

const RoomCardsSection = ({ cardItems }: RoomCardGridProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const toggleGalleryModal = (
    event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (event) {
      event.preventDefault();
    }
    setIsGalleryOpen(prevState => !prevState);
  };

  return (
    <>
      <Grid
        gridGap="1rem"
        gridTemplateRows="auto"
        gridTemplateColumns="1fr 1fr"
        minW="100%"
        gridAutoColumns="1fr"
      >
        {cardItems.map(card => (
          <RoomCard
            imgSrc={card.src}
            imgSet={card.srcSet}
            altText={card.altText}
            title={card.title}
            toggleGalleryModal={toggleGalleryModal}
          />
        ))}
      </Grid>
      <GalleryModal isGalleryOpen={isGalleryOpen} toggleGalleryModal={toggleGalleryModal}/>
    </>
  );
};

export default RoomCardsSection;
