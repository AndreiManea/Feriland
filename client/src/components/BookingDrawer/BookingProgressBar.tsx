import { HStack, Box } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hooks';

const BookingProgressBar = () => {
  const { bookingStep } = useAppSelector(state => state.bookings);

  return (
    <HStack
      w="100%"
      justifyContent="space-evenly"
      border="2px solid white"
      p="1rem"
      borderRadius={20}
      gap="1rem"
    >
      <Box borderRadius={10} background="white" w="27.5%" h={2} />
      <Box
        borderRadius={10}
        background="white"
        w="27.5%"
        h={2}
        visibility={bookingStep >= 2 ? 'visible' : 'hidden'}
      />
      <Box
        borderRadius={10}
        background="white"
        w="27.5%"
        h={2}
        visibility={bookingStep >= 3 ? 'visible' : 'hidden'}
      />
      <Box
        borderRadius={10}
        background="white"
        w="27.5%"
        h={2}
        visibility={bookingStep === 4 ? 'visible' : 'hidden'}
      />
    </HStack>
  );
};

export default BookingProgressBar;
