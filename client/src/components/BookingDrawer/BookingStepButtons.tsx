import { HStack, Button } from '@chakra-ui/react';
import HoverButtonWrapper from '../HoverButtonWrapper/HoverButtonWrapper';
import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { setBookingStep } from '../../redux/slices/bookingsFormSlice';
import { BaseSyntheticEvent } from 'react';

const BookingStepButtons = ({
  onNext,
  isValid,
  onPayment,
}: {
  onNext?: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
  onPayment?: () => void;
  isValid?: boolean;
}) => {
  const {
    bookingStep,
    bookingFormData,
    selectedCabin,
    selectedPersons,
    selectedDates,
  } = useAppSelector(state => state.bookingsForm);
  const dispatch = useDispatch();

  const nextHandler = (e?: BaseSyntheticEvent) => {
    if (isValid) {
      dispatch(setBookingStep(bookingStep + 1));
    }
    if (onNext) onNext(e);
  };

  const paymentHandler = () => {
    onPayment?.();
    fetch('http://localhost:3000/reservations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        reservation: {
          ...{ bookingFormData },
          selectedCabin,
          selectedPersons,
          selectedDates,
        },
      }),
    });
  };

  return (
    <HStack justifyContent="space-between" mt="2rem" width="100%">
      {bookingStep > 1 && (
        <HoverButtonWrapper isRectangular>
          <Button
            onClick={() => dispatch(setBookingStep(bookingStep - 1))}
            backgroundColor={'rgba(255, 255, 255, .2)'}
            color={'white'}
            p={{ base: '1.5rem', md: '2rem', lg: '1.75rem 2rem' }}
            borderRadius="0.2rem"
            _hover={{ backgroundColor: 'rgba(255, 255, 255, .2)' }}
            transition="0.3s ease-in-out"
            fontSize={{ base: '1rem', md: '1.25rem', lg: '1.1rem' }}
          >
            Previous
          </Button>
        </HoverButtonWrapper>
      )}
      {bookingStep < 4 && (
        <HoverButtonWrapper isRectangular>
          <Button
            onClick={nextHandler}
            backgroundColor={'rgba(255, 255, 255, .2)'}
            color={'white'}
            p={{ base: '1.5rem', md: '2rem', lg: '1.75rem 2rem' }}
            borderRadius="0.2rem"
            _hover={{ backgroundColor: 'rgba(255, 255, 255, .2)' }}
            transition="0.3s ease-in-out"
            fontSize={{ base: '1rem', md: '1.25rem', lg: '1.1rem' }}
          >
            Next
          </Button>
        </HoverButtonWrapper>
      )}
      {bookingStep === 4 && (
        <HoverButtonWrapper isRectangular alignSelf="flex-end">
          <Button
            onClick={paymentHandler}
            backgroundColor={'rgb(84, 124, 57)'}
            color={'white'}
            p={{ base: '1.5rem', md: '2rem', lg: '1.75rem 2rem' }}
            fontSize={{ base: '1rem', md: '1.25rem', lg: '1.1rem' }}
            borderRadius="0.2rem"
            _hover={{ backgroundColor: 'rgb(84, 124, 57)' }}
            transition="0.3s ease-in-out"
          >
            Pay Now
          </Button>
        </HoverButtonWrapper>
      )}
    </HStack>
  );
};

export default BookingStepButtons;
