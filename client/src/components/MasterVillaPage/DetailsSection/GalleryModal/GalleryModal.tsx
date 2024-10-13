import { useState } from 'react';
import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { GalleryImage } from '../../../../utils/types';

type GalleryModalProps = {
  selectedRoom: GalleryImage;
  isGalleryOpen: boolean;
  toggleGalleryModal: () => void;
};

const GalleryModal = ({
  selectedRoom,
  isGalleryOpen,
  toggleGalleryModal,
}: GalleryModalProps) => {
  const [activePhotoId, setActivePhotoId] = useState(1);
  if (!isGalleryOpen) return null;

  return (
    <Box>
      <Modal isOpen={isGalleryOpen} onClose={toggleGalleryModal} size="full">
        <ModalOverlay background="rgba(0, 0, 0, 0.8)" />
        <ModalContent background="transparent">
          <ModalCloseButton
            color="white"
            zIndex="100"
            fontSize={{ base: '1.5rem', md: '2rem' }}
            mt={{ base: '0.5rem', md: '2rem', lg: '1.25rem' }}
            mr={{ base: '0.5rem', md: '1.25rem', lg: '2rem' }}
          />
          <ModalBody p={0}>
            <VStack
              position="relative"
              h={{ md: '85svh', lg: '85vh' }}
              pt={{ base: '9svh', md: '8svh', lg: '10svh' }}
              gap={{ base: '1.5rem', md: '2rem' }}
            >
              <Image
                src={selectedRoom.gallery[activePhotoId - 1]}
                alt={`Gallery image ${activePhotoId}`}
                objectFit="cover"
                objectPosition="center 60%"
                width={{ base: '90%', md: '95%' }}
                height="60svh"
                borderRadius={{ base: '1rem', md: '2rem' }}
                p="0.1rem"
                background="white"
              />
              <HStack
                justifyContent="center"
                align="center"
                width={{ base: '90%', lg: '95%' }}
                gap={{ base: '0.5rem', md: '1rem' }}
              >
                {selectedRoom.gallery.map((photo, index) => (
                  <Box
                    key={index}
                    onClick={() => setActivePhotoId(index + 1)}
                    onMouseEnter={() => setActivePhotoId(index + 1)}
                    cursor="pointer"
                    border="1px solid"
                    width="100%"
                    height={{ base: '22.5svh', md: '25svh' }}
                    borderColor={
                      activePhotoId === index + 1 ? 'blue.500' : 'transparent'
                    }
                    borderRadius={{ base: '1rem', md: '2rem' }}
                    p="0.1rem"
                    background="white"
                    _hover={{ background: '#547C39' }}
                  >
                    <Image
                      borderRadius={{ base: '1rem', md: '2rem' }}
                      src={photo}
                      alt={`Thumbnail ${index + 1}`}
                      height="100%"
                      width="100%"
                      objectFit="cover"
                    />
                  </Box>
                ))}
              </HStack>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GalleryModal;
