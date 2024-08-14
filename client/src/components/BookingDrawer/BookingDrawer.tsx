import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setBookingDrawerOpen } from '../../redux/slices/bookingsSlice';
import { styles } from './bookingDrawer.styled';
import BookingStep1 from './BookingStep1';
import BookingStep2 from './BookingStep2';
import BookingStep3 from './BookingStep3';
import BookingProgressBar from './BookingProgressBar';
import BookingStep4 from './BookingStep4';

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
      <DrawerContent sx={styles.drawerContent}>
        <DrawerCloseButton
          fontSize="1.65rem"
          boxSize="3.25rem"
          {...styles.closeButton}
        />
        <DrawerBody sx={styles.drawerBody}>
          <BookingProgressBar />
          {renderStep(bookingStep)}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default BookingDrawer;
