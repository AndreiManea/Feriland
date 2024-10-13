import { Grid } from '@chakra-ui/react';
import RoomCard from './RoomCard';
import { useState } from 'react';
import GalleryModal from '../GalleryModal/GalleryModal';
import { Card, GalleryImage, GalleryKey } from '../../../../utils/types';
import { useTranslation } from 'react-i18next';
import { galleryImages } from '../../../../utils/data/galleryData';

const RoomCardsSection = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const { t } = useTranslation();
  const translationsForCardItems: Card[] = t('masterVilla.cardItems', {
    returnObjects: true,
  }) as Card[];
  const [selectedRoom, setSelectedRoom] = useState('bathRoom');
  const combinedGalleryImages = translationsForCardItems.reduce<
    Record<string, GalleryImage>
  >((acc, item) => {
    const key = item.name as GalleryKey;
    acc[key] = { ...galleryImages[key], ...item };
    return acc;
  }, {});
  const toggleGalleryModal = (
    event?: React.MouseEvent<HTMLDivElement, MouseEvent>,
    name?: string
  ) => {
    if (event) {
      event.preventDefault();
    }
    setSelectedRoom(name as string);
    setIsGalleryOpen(prevState => !prevState);
  };

  return (
    <>
      <Grid
        gridGap="1rem"
        gridTemplateRows="auto"
        gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
        minW="100%"
        gridAutoColumns="1fr"
      >
        {Object.entries(combinedGalleryImages).map(([key, item]) => {
          const imgSrc = item.mainImage; // Use mainImage as imgSrc
          const imgSet = item.mainImage; // Use gallery images as a comma-separated srcSet
          const altText = item.altText;
          const title = item.title;
          const name = item.name;

          return (
            <RoomCard
              key={key} // Use the object key as a unique key for each RoomCard
              imgSrc={imgSrc}
              imgSet={imgSet}
              altText={altText}
              title={title}
              name={name}
              toggleGalleryModal={toggleGalleryModal}
            />
          );
        })}
      </Grid>
      <GalleryModal
        selectedRoom={combinedGalleryImages[selectedRoom]}
        isGalleryOpen={isGalleryOpen}
        toggleGalleryModal={toggleGalleryModal}
      />
    </>
  );
};

export default RoomCardsSection;
