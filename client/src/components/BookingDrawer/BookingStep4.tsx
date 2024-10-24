import { Box, Heading, Stack, useToast, VStack } from '@chakra-ui/react';
import BookingStepButtons from './BookingStepButtons';
import BookingSummaryLeftInfo from './BookingSummaryLeftInfo';
import BookingSummaryRightInfo from './BookingSummaryRightInfo';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { resetApplication } from '../../redux/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { setBookedDates } from '../../redux/slices/bookingsDatesSlice';
const BookingStep4 = () => {
  const [showError, setShowError] = useState(false); // State for showing the error
  const [isChecked, setIsChecked] = useState(false);
  const {
    selectedCabin,
    selectedNights,
    bookingFormData,
    selectedPersons,
    selectedDates,
  } = useAppSelector(state => state.bookingsForm);
  const totalPrice =
    (selectedCabin !== 'masterVilla' ? 1000 : 1500) * selectedNights; //
  const toast = useToast();
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location from react-router-dom
  const isHomePage = location.pathname === '/';
  const dispatch = useAppDispatch();
  const handleProceed = () => {
    if (!isChecked) {
      setShowError(true); // Show error if checkbox is not checked
    } else {
      // Handle the "Proceed to Payment" action here
      toast({
        title: `Payment can happen now for ${totalPrice} RON`,
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
      fetch('https://feriland.onrender.com/reservations', {
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
      setTimeout(() => {
        resetApplication();
        if (isHomePage) {
          const fetchDates = async () => {
            const request = await fetch(
              'https://feriland.onrender.com/reservations'
            );
            const response = await request.json();
            dispatch(setBookedDates(response.dates));
          };
          fetchDates();
        } else {
          navigate('/');
        }
      }, 2000);
    }
  };
  return (
    <VStack spacing="1rem" alignItems="flex-start">
      <Heading
        m="1.2rem 0 0 0"
        fontSize={{ base: '1.75rem', md: '3rem', lg: '2.5rem' }}
        letterSpacing="2px"
        width="100%"
      >
        Summary
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
        <BookingSummaryRightInfo
          showError={showError}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          setShowError={setShowError}
        />
      </Stack>

      <BookingStepButtons onPayment={handleProceed} />
    </VStack>
  );
};

export default BookingStep4;
