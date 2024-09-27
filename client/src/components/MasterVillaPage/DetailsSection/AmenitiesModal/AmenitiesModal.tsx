import React, { forwardRef, useEffect } from 'react';
import { Image, Heading, Link, VStack } from '@chakra-ui/react';
import AmenityCategory from '../AmenitiesSection/AmenityCategory'; // Adjust the import path
import { CategoryKey } from '../../../../utils/helperFunctions.utils';
import { useTranslation } from 'react-i18next';
import { AmenitiesByCategory } from '../../../../utils/types';

interface AmenitiesModalProps {
  showDetails: boolean;
  toggleDetails: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  modalRef: React.RefObject<HTMLDivElement>;
}

const AmenitiesModal = forwardRef<HTMLDivElement, AmenitiesModalProps>(
  ({ showDetails, toggleDetails, modalRef }) => {
    const {t} = useTranslation()
    const amenitiesByCategory = t('masterVilla.amenitiesByCategory', { returnObjects: true }) as AmenitiesByCategory;

    useEffect(() => {
      if (showDetails) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }, [showDetails]);

    if (!showDetails) return null;

    return (
      <VStack
        ref={modalRef}
        position="fixed"
        top="0"
        left="0"
        bottom="0"
        right="0"
        width="100%"
        height="100vh"
        bg="rgba(0, 0, 0, 0.4)"
        alignItems="center"
        justifyContent="center"
        zIndex="4"
      >
        <VStack
          overflowY="scroll"
          p="0 0 2vw"
          bg="white"
          borderRadius="1.5rem"
          maxH="50vh"
          maxW="40.6rem"
          minH="50vh"
          minW="40.6rem"
          width="100%"
          gap="2rem"
          alignItems="flex-start"
          position="relative"
        >
          <VStack
            zIndex="3"
            width="100%"
            bg="white"
            borderTopLeftRadius="1.5rem"
            borderTopRightRadius="1.5rem"
            alignItems="flex-start"
            mb="0"
            p="1vw 2vw 1vw 1.5vw"
            position="sticky"
            top="0"
          >
            <Link
              cursor="pointer"
              borderRadius="10rem"
              p="16px"
              onClick={toggleDetails}
              variant="unstyled"
            >
              <Image
                src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65d614b77ef113f8b090191d_cancel_10289710.png"
                alt="Close"
                width="1.5rem"
                opacity="0.8"
                objectFit="contain"
              />
            </Link>
          </VStack>
          <VStack gridGap="2rem" alignItems="flex-start" px="2rem">
            <Heading as="h2" size="h2" mb="0">
              {t('masterVilla.amenitiesHeader')}
            </Heading>
            {Object.keys(amenitiesByCategory).map(category => (
              <AmenityCategory
                key={category}
                categoryName={category}
                amenities={amenitiesByCategory[category as CategoryKey]}
              />
            ))}
          </VStack>
        </VStack>
      </VStack>
    );
  }
);

export default AmenitiesModal;
