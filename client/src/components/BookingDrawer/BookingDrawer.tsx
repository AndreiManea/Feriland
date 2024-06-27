import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Button,
  Box,
  HStack,
} from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setBookingDrawerOpen } from '../../redux/slices/bookingsSlice';
import { useState } from 'react';
import { styles } from './bookingDrawer.styled';
import BookingFirstStep from './BookingFirstStep';
import BookingSecondStep from './BookingSecondStep';

const BookingDrawer = () => {
  // Global state
  const dispatch = useAppDispatch();
  const isBookingDrawerOpen = useAppSelector(
    state => state.bookings.isBookingDrawerOpen
  );

  const [stepsCounter, setStepsCounter] = useState(1);

  return (
    <Drawer
      placement="right"
      size="full"
      isOpen={isBookingDrawerOpen}
      onClose={() => dispatch(setBookingDrawerOpen(false))}
    >
      <DrawerOverlay />
      <DrawerContent sx={styles.drawerContent}>
        <DrawerCloseButton {...styles.closeButton} />
        <DrawerBody sx={styles.drawerBody}>
          <HStack
            w="100%"
            justifyContent="space-evenly"
            border="2px solid white"
            pt={3}
            pb={3}
            borderRadius={20}
          >
            <Box borderRadius={10} background="white" w="27.5%" h={2} />
            <Box
              borderRadius={10}
              background="white"
              w="27.5%"
              h={2}
              visibility={stepsCounter >= 2 ? 'visible' : 'hidden'}
            />
            <Box
              borderRadius={10}
              background="white"
              w="27.5%"
              h={2}
              visibility={stepsCounter === 3 ? 'visible' : 'hidden'}
            />
          </HStack>
          {stepsCounter === 1 && <BookingFirstStep />}
          {stepsCounter === 2 && <BookingSecondStep />}
          <HStack justifyContent="space-between">
            {stepsCounter > 1 && (
              <Button
                sx={styles.stepperButton}
                onClick={() => setStepsCounter(stepsCounter - 1)}
              >
                Previous
              </Button>
            )}
            {stepsCounter < 3 && (
              <Button
                sx={styles.stepperButton}
                onClick={() => setStepsCounter(stepsCounter + 1)}
              >
                Next
              </Button>
            )}
          </HStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default BookingDrawer;
