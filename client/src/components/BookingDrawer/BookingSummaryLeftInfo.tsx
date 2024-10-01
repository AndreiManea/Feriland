import { VStack } from '@chakra-ui/react';
import BookingSummaryField from './BookingSummaryField';
import { useAppSelector } from '../../redux/hooks';

const BookingSummaryLeftInfo = () => {
  const { bookingFormData } = useAppSelector(state => state.bookings);
  return (
    <VStack
      alignItems="center"
      justifyContent="center"
      gap="1rem"
      width="100%"
      p={{ base: '0.5rem 0 0 0', lg: '1.5rem 0 0.75rem 0' }}
    >
      <BookingSummaryField
        fieldTitle="Name"
        fieldValue={`${bookingFormData.firstName} ${bookingFormData.lastName}`}
      />
      <BookingSummaryField
        fieldTitle="Phone Number"
        fieldValue={bookingFormData.telephone}
      />
      <BookingSummaryField
        fieldTitle="Email"
        fieldValue={bookingFormData.email}
      />
      <BookingSummaryField
        fieldTitle="Address"
        fieldValue={bookingFormData.address}
      />
      <BookingSummaryField
        fieldTitle=" Personal Numeric Code"
        fieldValue={bookingFormData.personalNumericCode}
      />
    </VStack>
  );
};

export default BookingSummaryLeftInfo;
