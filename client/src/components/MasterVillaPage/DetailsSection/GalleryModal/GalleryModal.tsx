import { useState } from 'react';
import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  IconButton,
  Box,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { photos } from '../../../../utils/data';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

type GalleryModalProps = {
  isGalleryOpen: boolean;
  toggleGalleryModal: () => void;
};

const GalleryModal = ({
  isGalleryOpen,
  toggleGalleryModal,
}: GalleryModalProps) => {
  const [activePhotoId, setActivePhotoId] = useState(1);

  if (!isGalleryOpen) return null;

  const goToPrevious = () => {
    setActivePhotoId(prevId => (prevId > 1 ? prevId - 1 : photos.length));
  };

  const goToNext = () => {
    setActivePhotoId(prevId => (prevId < photos.length ? prevId + 1 : 1));
  };

  return (
    <Box height="50vh" overflow="hidden">
      <Modal isOpen={isGalleryOpen} onClose={toggleGalleryModal} size="full">
        <ModalOverlay background="rgba(0, 0, 0, 0.8)" />
        <ModalContent background="transparent">
          <ModalCloseButton
            color="white"
            zIndex="100"
            fontSize="1.5rem"
            mt="1rem"
            mr="1rem"
          />
          <ModalBody p={0}>
            <VStack align="center" position="relative" h="85vh" pt="5%">
              <Image
                src={photos[activePhotoId - 1]}
                alt={`Gallery image ${activePhotoId}`}
                objectFit="cover"
                width="85%"
                height="100%"
              />
              <IconButton
                aria-label="Previous image"
                icon={<ChevronLeftIcon />}
                position="absolute"
                left="1rem"
                top="50%"
                transform="translateY(-50%)"
                onClick={goToPrevious}
                colorScheme="whiteAlpha"
                variant="outline"
                _hover={{background: "transparent"}}
                fontSize="5rem"
                border="0"
              />
              <IconButton
                aria-label="Next image"
                icon={<ChevronRightIcon />}
                position="absolute"
                right="1rem"
                top="50%"
                transform="translateY(-50%)"
                onClick={goToNext}
                colorScheme="whiteAlpha"
                variant="outline"
                _hover={{background: "transparent"}}
                fontSize="5rem"
                border="0"
              />
            </VStack>
          </ModalBody>
          <Box p="1rem">
            <HStack justifyContent="center">
              {photos.map((photo, index) => (
                <Box
                  key={index}
                  onClick={() => setActivePhotoId(index + 1)}
                  cursor="pointer"
                  border="1px solid"
                  height="5.65rem"
                  width="5.65rem"
                  borderColor={
                    activePhotoId === index + 1 ? 'blue.500' : 'transparent'
                  }
                  borderRadius="md"
                >
                  <Image
                    src={photo}
                    alt={`Thumbnail ${index + 1}`}
                    height="100%"
                    width="100%"
                    objectFit="cover"
                  />
                </Box>
              ))}
            </HStack>
          </Box>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GalleryModal;
