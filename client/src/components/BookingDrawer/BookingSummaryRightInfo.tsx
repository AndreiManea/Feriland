import { VStack } from '@chakra-ui/react';
import { useAppSelector } from '../../redux/hooks';
import BookingSummaryField from './BookingSummaryField';
import BookingSummaryTotal from './BookingSummaryTotal';
import { formatDate } from '../../utils/helperFunctions.utils';
import { useDispatch } from 'react-redux';
import InputTextAreaField from '../InputTextAreaField/InputTextAreaField';
import { setAdditionalNotes } from '../../redux/slices/bookingsFormSlice';

const BookingSummaryRightInfo = () => {
  const {
    selectedDates,
    selectedNights,
    selectedPersons,
    selectedCabin,
    bookingFormData,
  } = useAppSelector(state => state.bookingsForm);
  const startDate = new Date(selectedDates.startDate as string);
  const endDate = new Date(selectedDates.endDate as string);

  const dispatch = useDispatch();

  return (
    <VStack
      gap="1rem"
      width="100%"
      alignItems="flex-start"
      p={{ base: '1rem 0 0 0', md: '1.5rem 0 0.75rem 0' }}
      justifyContent="space-between"
      height="100%"
      order={{ base: 1, md: 2 }}
    >
      <VStack gap="1rem">
        <BookingSummaryField
          fieldTitle={`Selected Dates ( ${selectedNights} 
            ${selectedNights === 1 ? 'night' : 'nights'} )`}
          fieldValue={`${formatDate(startDate)} - ${formatDate(endDate)}`}
          isHeader
        />
        <BookingSummaryField
          fieldTitle="Cabin & persons"
          fieldValue={`${selectedCabin} for ${selectedPersons.adults} 
            ${selectedPersons.adults === 1 ? 'adult' : 'adults'}
            ${
              selectedPersons.children > 0
                ? ` and ${selectedPersons.children} ${selectedPersons.children === 1 ? 'child' : 'children'}`
                : ''
            }`}
          isHeader
        />
      </VStack>
      <InputTextAreaField
        handleChange={value => dispatch(setAdditionalNotes(value))}
        value={bookingFormData.additionalInfo || ''}
      />
      <BookingSummaryTotal />
    </VStack>
  );
};

export default BookingSummaryRightInfo;
