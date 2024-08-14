import { Box, Heading, HStack, VStack } from '@chakra-ui/react';
import BookingStepButtons from './BookingStepButtons';
import BookingSummaryLeftInfo from './BookingSummaryLeftInfo';
import BookingSummaryRightInfo from './BookingSummaryRightInfo';
const BookingStep4 = () => {
  return (
    <VStack spacing="1rem" alignItems="flex-start">
      <Heading m="1.2rem 0 0 0" width="100%">
        Booking Summary
      </Heading>
      <HStack
        justifyContent="space-between"
        width="100%"
        alignItems="flex-start"
        gap="1.5rem"
      >
        {/* PERSONAL INFO */}
        <BookingSummaryLeftInfo />
        {/* DIVIDER */}
        <Box
          backgroundColor="rgba(234, 229, 223,.75)"
          width="1px"
          height="100%"
          m="0"
        />
        {/* BOOKING & PAYMENTS INFO */}
        <BookingSummaryRightInfo />
      </HStack>

      <BookingStepButtons />
    </VStack>
  );
};

export default BookingStep4;
