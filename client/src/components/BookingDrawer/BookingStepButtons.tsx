import { HStack, Button } from '@chakra-ui/react';
import HoverButtonWrapper from '../HoverButtonWrapper/HoverButtonWrapper';
import { useAppSelector } from '../../redux/hooks';
import { useDispatch } from 'react-redux';
import { setBookingStep } from '../../redux/slices/bookingsSlice';
import { BaseSyntheticEvent } from 'react';

const BookingStepButtons = ({
  onNext,
  isValid,
}: {
  onNext?: (e?: BaseSyntheticEvent<object> | undefined) => Promise<void>;
  isValid?: boolean;
}) => {
  const { bookingStep } = useAppSelector(state => state.bookings);
  const dispatch = useDispatch();

  const nextHandler = (e?: BaseSyntheticEvent) => {
    if (isValid) {
      dispatch(setBookingStep(bookingStep + 1));
    }
    if (onNext) onNext(e);
  };

  return (
    <HStack justifyContent="space-between" mt="1rem" width="100%">
      {bookingStep > 1 && (
        <HoverButtonWrapper isRectangular>
          <Button
            onClick={() => dispatch(setBookingStep(bookingStep - 1))}
            backgroundColor={'rgba(255, 255, 255, .2)'}
            color={'white'}
            p="1.5rem 2rem"
            borderRadius="0.2rem"
            _hover={{ backgroundColor: 'rgba(255, 255, 255, .2)' }}
            transition="0.3s ease-in-out"
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
            p="1.5rem 2rem"
            borderRadius="0.2rem"
            _hover={{ backgroundColor: 'rgba(255, 255, 255, .2)' }}
            transition="0.3s ease-in-out"
          >
            Next
          </Button>
        </HoverButtonWrapper>
      )}
      {bookingStep === 4 && (
        <HoverButtonWrapper isRectangular alignSelf="flex-end">
          <Button
            onClick={() => console.log('TO PAY!')}
            backgroundColor={'rgb(84, 124, 57)'}
            color={'white'}
            p="1.5rem 2rem"
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
