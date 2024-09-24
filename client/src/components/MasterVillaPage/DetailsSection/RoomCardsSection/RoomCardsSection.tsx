import { Grid } from '@chakra-ui/react';
import RoomCard from './RoomCard';
import { useState } from 'react';
import GalleryModal from '../GalleryModal/GalleryModal';
import { Card } from '../../../../utils/types';
import { useTranslation } from 'react-i18next';

type RoomCardGridProps = {
  cardItems: Card[];
};

const RoomCardsSection = ({ cardItems }: RoomCardGridProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { t } = useTranslation();

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
        {cardItems.map((_card, index) => {
          const imgSrc = t(`masterVilla.cardItems.${index}.src`, { lng: 'en' });
          const imgSet = t(`masterVilla.cardItems.${index}.srcSet`, {
            lng: 'en',
          });

          const altText = t(`masterVilla.cardItems.${index}.altText`);
          const title = t(`masterVilla.cardItems.${index}.title`);

          return (
            <RoomCard
              key={index}
              imgSrc={imgSrc}
              imgSet={imgSet}
              altText={altText}
              title={title}
              toggleGalleryModal={toggleGalleryModal}
            />
          );
        })}
      </Grid>
      <GalleryModal
        isGalleryOpen={isGalleryOpen}
        toggleGalleryModal={toggleGalleryModal}
      />
    </>
  );
};

export default RoomCardsSection;
