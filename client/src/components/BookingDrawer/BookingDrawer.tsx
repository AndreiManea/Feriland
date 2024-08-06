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
          {bookingStep === 1 && <BookingStep1 />}
          {bookingStep === 2 && <BookingStep2 />}
          {bookingStep === 3 && <BookingStep3 />}
          {bookingStep === 4 && <BookingStep4 />}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default BookingDrawer;
