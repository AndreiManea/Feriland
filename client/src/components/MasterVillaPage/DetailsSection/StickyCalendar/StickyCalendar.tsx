import { VStack, Button, Box } from '@chakra-ui/react';
import './stickyCalendar.css';
import { useAppSelector } from '../../../../redux/hooks';
import StickyCalendarHeader from './StickyCalendarHeader';
import TotalPrice from './TotalPrice';

const StickyCalendar = () => {
  // Global state
  const { selectedDates, selectedNights } = useAppSelector(
    state => state.bookings
  );
  const startDate = new Date(selectedDates[0].startDate as string);
  const endDate = new Date(selectedDates[0].endDate as string);
  // Local state

  return (
    <div id="calendarId" className="sticky-calendar">
      <Box maxW="md" borderRadius="lg" overflow="visible" p={4} bg="white">
        <VStack spacing={4}>
          <StickyCalendarHeader
            startDate={startDate}
            endDate={endDate}
            pricePerNight={1500}
          />

          <Button size="md" background="#547c39" color="white" width="100%">
            Reserve
          </Button>
          <TotalPrice pricePerNight={1500} selectedNights={selectedNights} />
        </VStack>
      </Box>
    </div>
  );
};

export default StickyCalendar;
