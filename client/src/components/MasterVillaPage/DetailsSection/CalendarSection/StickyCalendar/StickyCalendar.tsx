import { VStack, Button, Box } from '@chakra-ui/react';
import './stickyCalendar.css';
import { useAppDispatch, useAppSelector } from '../../../../../redux/hooks';
import StickyCalendarHeader from './StickyCalendarHeader/StickyCalendarHeader';
import TotalPrice from './TotalPrice';
import {
  setBookingDrawerOpen,
  setBookingStep,
} from '../../../../../redux/slices/bookingsSlice';
import HoverButtonWrapper from '../../../../HoverButtonWrapper/HoverButtonWrapper';

const StickyCalendar = () => {
  // Global state
  const { selectedDates, selectedNights } = useAppSelector(
    state => state.bookings
  );
  const startDate = new Date(selectedDates.startDate as string);
  const endDate = new Date(selectedDates.endDate as string);

  const dispatch = useAppDispatch();

  const onReserve = () => {
    dispatch(setBookingDrawerOpen(true));
    dispatch(setBookingStep(3));
  };

  return (
    <div id="calendarId" className="sticky-calendar">
      <Box maxW="md" borderRadius="lg" overflow="visible" p={4} bg="white">
        <VStack spacing={4}>
          <StickyCalendarHeader
            startDate={startDate}
            endDate={endDate}
            pricePerNight={1500}
          />
          <HoverButtonWrapper isRectangular isReserveButton>
            <Button
              size="md"
              background="#547c39"
              color="white"
              width="100%"
              onClick={onReserve}
              _hover={{ backgroundColor: '#547c39' }}
            >
              Reserve
            </Button>
          </HoverButtonWrapper>
          <TotalPrice pricePerNight={1500} selectedNights={selectedNights} />
        </VStack>
      </Box>
    </div>
  );
};

export default StickyCalendar;
