import { VStack, Heading, Box, HStack } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hooks';

const BookingSummaryTotal = () => {
  const { selectedNights } = useAppSelector(state => state.bookingsForm);
  return (
    <VStack alignItems="flex-start" gap="1rem" width="100%">
      <Heading
        fontSize={{ base: '1.4rem', md: '1.8rem' }}
        color="rgba(234, 229, 223)"
        letterSpacing="1px"
        m="0"
        textAlign="right"
      >
        Total
      </Heading>
      <Box
        width="100%"
        height="1px"
        backgroundColor="rgba(234, 229, 223,.75)"
      />

      <HStack>
        <Heading
          fontSize={{ base: '1.2rem', md: '1.5rem' }}
          letterSpacing="1px"
          color="rgb(234, 229, 223)"
          whiteSpace="nowrap"
        >
          {1500 * selectedNights} RON
        </Heading>
        <Heading
          fontSize={{ base: '0.9rem', md: '1rem' }}
          letterSpacing="1px"
          color="rgb(234, 229, 223)"
          whiteSpace="nowrap"
        >
          ( 1500 RON x {selectedNights}{' '}
          {selectedNights === 1 ? 'night' : 'nights'} )
        </Heading>
      </HStack>
    </VStack>
  );
};

export default BookingSummaryTotal;
