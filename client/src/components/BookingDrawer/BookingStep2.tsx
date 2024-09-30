import { Heading, Stack } from '@chakra-ui/react';
import bookingImg from '../../assets/BookingFormBg.jpg';
import BookingStepButtons from './BookingStepButtons';
import BookingCabinCard from './BookingCabinCard';
import { CABIN_DESCRIPTION } from '../../utils/texts';

const BookingStep2 = () => {
  return (
    <>
      <Heading fontSize={{ base: '1.5rem', lg: '1.875rem' }} m="1.2rem 0">
        Selected Cabin
      </Heading>
      <Stack
        flexDirection={{ base: 'column', md: 'row' }}
        spacing="1rem"
        mb={{ base: '1rem', lg: '0' }}
      >
        <BookingCabinCard
          cabinImg={bookingImg}
          cabinName="Master Villa"
          cabinDescription={CABIN_DESCRIPTION}
          cabinPrice={1500}
        />
        <BookingCabinCard
          cabinImg={bookingImg}
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

export default BookingStep2;
