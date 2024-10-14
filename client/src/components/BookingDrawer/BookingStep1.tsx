import { Heading, Stack } from '@chakra-ui/react';
import masterVillaImg from '../../assets/MasterVillaThumbnail.webp';
import BookingStepButtons from './BookingStepButtons';
import BookingCabinCard from './BookingCabinCard';
import { CABIN_DESCRIPTION } from '../../utils/texts';

export const BookingStep1 = () => {
  return (
    <>
      <Heading
        fontSize={{ base: '1.75rem', md: '3rem', lg: '2.5rem' }}
        m={{
          base: '1rem 0 1.5rem 0',
          md: '1.75rem 0 2rem 0',
          lg: '1.5rem 0 2rem 0',
        }}
      >
        Select Cabin
      </Heading>
      <Stack
        flexDirection={{ base: 'column', md: 'row' }}
        spacing="1rem"
        mb={{ base: '1rem', lg: '0' }}
      >
        <BookingCabinCard
          cabinImg={masterVillaImg}
          cabinName="Master Villa"
          cabinDescription={CABIN_DESCRIPTION}
          cabinPrice={1500}
        />
        <BookingCabinCard
          cabinImg={masterVillaImg}
          cabinName="Second Villa"
          cabinDescription={CABIN_DESCRIPTION}
          cabinPrice={1500}
          isDisabled
        />
      </Stack>
      {/* isValid={isSelected || !!selectedCabin} */}
      <BookingStepButtons isValid />
    </>
  );
};
