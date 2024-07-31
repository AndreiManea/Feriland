import { useState } from 'react';
import { DateRange, RangeKeyDict } from 'react-date-range';
import { formatDate } from '../../../../utils/dates.utils';

import './calendarSection.css';
import '../../../../utils/styles/rdrCalendar.css';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import {
  setSelectedDates,
  setSelectedNights,
} from '../../../../redux/slices/bookingsSlice';
import { parse } from 'date-fns';
import { Heading, Text } from '@chakra-ui/react';

const CalendarSection = ({
  onSelection,
  customClass,
  isSticky,
}: {
  customClass: string;
  onSelection?: () => void;
  isSticky?: boolean;
}) => {
  // Global state
  const dispatch = useAppDispatch();
  const { selectedDates, selectedNights } = useAppSelector(
    state => state.bookings
  );
  const startDate = new Date(selectedDates[0].startDate as string);
  const endDate = new Date(selectedDates[0].endDate as string);

  // Local state
  const [datePreview, setDatePreview] = useState(
    `${formatDate(startDate)} - ${formatDate(endDate)}`
  );

  const handleSelect = (ranges: RangeKeyDict) => {
    const { startDate, endDate } = ranges.range1;
    // Calculate nights

    const nightsCalculated =
      ((endDate?.getTime() ?? 0) - (startDate?.getTime() ?? 0)) /
      (1000 * 3600 * 24);
    dispatch(setSelectedNights(Math.round(nightsCalculated)));
    dispatch(
      setSelectedDates([
        {
          startDate: startDate?.toISOString(),
          endDate: (endDate as Date).toISOString(),
        },
      ])
    );
    // Update date preview
    setDatePreview(
      `${formatDate(startDate as Date)} - ${formatDate(endDate as Date)}`
    );
    if (startDate?.getTime() !== endDate?.getTime()) {
      onSelection?.();
    }
  };

  // Disabled dates received from backend as strings
  const disabledDatesFromBackend = ['June 2, 2024', 'June 3, 2024'];

  const parseDateStrings = (dateStrings: string[]) => {
    return dateStrings.map(dateString =>
      parse(dateString, 'MMMM d, yyyy', new Date())
    );
  };

  const disabledDates = parseDateStrings(disabledDatesFromBackend);

  return (
    <div className="calendar">
      <Heading
        fontSize={isSticky ? '1.1rem' : '1.375rem'}
        letterSpacing="0.125rem"
      >
        {Math.round(selectedNights)} nights
      </Heading>
      <Text fontSize={isSticky ? '0.8rem' : '1.1rem'}>{datePreview}</Text>
      <DateRange
        onChange={handleSelect}
        ranges={[{ startDate, endDate }]}
        months={2}
        fixedHeight
        direction="horizontal"
        minDate={new Date()}
        disabledDates={disabledDates}
        className={customClass}
      />
    </div>
  );
};

export default CalendarSection;
