import { Box, Heading, Stack, VStack } from '@chakra-ui/react';
import BookingStepButtons from './BookingStepButtons';
import BookingSummaryLeftInfo from './BookingSummaryLeftInfo';
import BookingSummaryRightInfo from './BookingSummaryRightInfo';
const BookingStep4 = () => {
  return (
    <VStack spacing="1rem" alignItems="flex-start">
      <Heading
        m="1.2rem 0 0 0"
        fontSize={{ base: '1.5rem', lg: '1.875rem' }}
        width="100%"
      >
        Booking Summary
      </Heading>
      <Stack
        justifyContent="space-between"
        width="100%"
        alignItems="flex-start"
        gap={{ base: '0.5rem', md: '1.5rem' }}
        flexDirection={{ base: 'column', md: 'row' }}
      >
        {/* PERSONAL INFO */}
        <BookingSummaryLeftInfo />
        {/* DIVIDER */}
        <Box
          backgroundColor="rgba(234, 229, 223,.75)"
          width={{ base: '100%', md: '1px' }}
          height={{ base: '1px', md: '100%' }}
          m="0"
        />
        {/* BOOKING & PAYMENTS INFO */}
        <BookingSummaryRightInfo />
      </Stack>

      <BookingStepButtons />
    </VStack>
  );
};

export default BookingStep4;
