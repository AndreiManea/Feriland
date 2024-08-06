import { Heading, HStack } from '@chakra-ui/react';
import bookingImg from '../../assets/BookingFormBg.jpg';
import BookingStepButtons from './BookingStepButtons';
import BookingCabinCard from './BookingCabinCard';

const BookingStep2 = () => {
  return (
    <>
      <Heading m="1.2rem 0">Selected Cabin</Heading>
      <HStack spacing={2}>
        <BookingCabinCard
          cabinImg={bookingImg}
          cabinName="Master Villa"
          cabinDescription=" The villa has a spacious bedroom with an adjacent seating area and a
            desk for writing and reading, as well as a veranda just big enough
            for the two of you. The bathrooms are equipped with open-air
            showers, some with bath tubs."
          cabinPrice={1500}
        />
        <BookingCabinCard
          cabinImg={bookingImg}
          cabinName="Second Villa"
          cabinDescription=" The villa has a spacious bedroom with an adjacent seating area and a
            desk for writing and reading, as well as a veranda just big enough
            for the two of you. The bathrooms are equipped with open-air
            showers, some with bath tubs."
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
