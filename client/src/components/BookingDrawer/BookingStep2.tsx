import { Heading, HStack } from '@chakra-ui/react';
import bookingImg from '../../assets/BookingFormBg.jpg';
import BookingStepButtons from './BookingStepButtons';
import BookingCabinCard from './BookingCabinCard';
import { CABIN_DESCRIPTION } from '../../utils/texts';

const BookingStep2 = () => {
  return (
    <>
      <Heading m="1.2rem 0">Selected Cabin</Heading>
      <HStack spacing={2}>
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
      </HStack>
      {/* isValid={isSelected || !!selectedCabin} */}
      <BookingStepButtons isValid />
    </>
  );
};

export default BookingStep2;
