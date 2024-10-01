import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setBookingDrawerOpen } from '../../redux/slices/bookingsSlice';
import BookingStep1 from './BookingStep1';
import BookingStep2 from './BookingStep2';
import BookingStep3 from './BookingStep3';
import BookingProgressBar from './BookingProgressBar';
import BookingStep4 from './BookingStep4';
import bookingImg from '../../assets/BookingFormBg.jpg';

const renderStep = (step: number) => {
  switch (step) {
    case 1:
      return <BookingStep1 />;
    case 2:
      return <BookingStep2 />;
    case 3:
      return <BookingStep3 />;
    case 4:
      return <BookingStep4 />;
  }
};

const BookingDrawer = () => {
  // Global state
  const dispatch = useAppDispatch();
  const { isBookingDrawerOpen, bookingStep } = useAppSelector(
    state => state.bookings
  );

  return (
    <Drawer
      placement="right"
      size="full"
      isOpen={isBookingDrawerOpen}
      onClose={() => dispatch(setBookingDrawerOpen(false))}
    >
      <DrawerOverlay />
      <DrawerContent
        bgImage={`url(${bookingImg})`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        width="100%"
        justifyContent="flex-start"
        position="relative"
        pt={{ base: '3.5rem', lg: '5rem' }}
        pb={{ base: '2rem', lg: '0' }}
        overflowY="scroll"
      >
        <DrawerCloseButton
          fontSize={{ base: '1rem', lg: '1.65rem' }}
          boxSize={{ base: '2.5rem', lg: '3.25rem' }}
          bg="white"
          color="black"
          borderRadius="5rem"
        />
        <DrawerBody
          m="0 auto"
          w={{ base: '90vw', lg: '50vw' }}
          backdropFilter="blur(20px)"
          color="white"
          bg="rgba(0,0,0, .69)"
          borderRadius="1rem"
          flex="none"
          overflow="visible"
          display="flex"
          flexDirection="column"
          pt={6}
          pb={6}
        >
          <BookingProgressBar />
          {renderStep(bookingStep)}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default BookingDrawer;
