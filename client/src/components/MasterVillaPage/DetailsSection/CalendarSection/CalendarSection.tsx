import { useState } from 'react';
import { DateRange, RangeKeyDict } from 'react-date-range';
import { formatDate } from '../../../../utils/helperFunctions.utils';

import '../../../../utils/styles/rdrCalendar.css';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import {
  setSelectedDates,
  setSelectedNights,
} from '../../../../redux/slices/bookingsSlice';
import { parse } from 'date-fns';
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { enGB } from 'date-fns/locale';

const CalendarSection = ({
  onSelection,
  customClass,
  isSticky,
  noText,
}: {
  customClass: string;
  onSelection?: () => void;
  isSticky?: boolean;
  noText?: boolean;
}) => {
  // Global state
  const dispatch = useAppDispatch();
  const { selectedDates, selectedNights, bookedDates } = useAppSelector(
    state => state.bookings
  );
  const startDate = new Date(selectedDates.startDate as string);
  const endDate = new Date(selectedDates.endDate as string);

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
      setSelectedDates({
        startDate: formatDate(startDate as Date),
        endDate: formatDate(endDate as Date),
      })
    );
    // Update date preview
    setDatePreview(
      `${formatDate(startDate as Date)} - ${formatDate(endDate as Date)}`
    );
    if (startDate?.getTime() !== endDate?.getTime()) {
      onSelection?.();
    }
  };

  const parseDateStrings = (dateStrings: string[]) => {
    return dateStrings?.map(dateString =>
      parse(dateString, 'MMMM d, yyyy', new Date())
    );
  };

  const disabledDates = parseDateStrings(bookedDates);

  return (
    <VStack gap="0.25rem" width="100%" alignItems="flex-start">
      {noText ? null : (
        <Box>
          <Heading
            fontSize={isSticky ? '1.1rem' : '1.375rem'}
            letterSpacing="0.125rem"
          >
            {Math.round(selectedNights)} nights
          </Heading>
          <Text fontSize={isSticky ? '0.8rem' : '1.1rem'}>{datePreview}</Text>
        </Box>
      )}
      <DateRange
        onChange={handleSelect}
        ranges={[{ startDate, endDate }]}
        months={2}
        locale={enGB}
        fixedHeight
        direction="horizontal"
        minDate={new Date()}
        disabledDates={disabledDates}
        className={customClass}
      />
    </VStack>
  );
};

export default CalendarSection;
