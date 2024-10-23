import { useState } from 'react';
import { DateRange, RangeKeyDict } from 'react-date-range';
import { formatDate } from '../../../../utils/helperFunctions.utils';

import '../../../../utils/styles/rdrCalendar.css';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import {
  setSelectedDates,
  setSelectedNights,
} from '../../../../redux/slices/bookingsFormSlice';
import { addDays, isSameDay, parse } from 'date-fns';
import {
  Box,
  Heading,
  Text,
  useBreakpointValue,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { enGB } from 'date-fns/locale';
import {
  findFirstAvailableTwoNights,
  renderDayContent,
} from '../../../../utils/calendar';

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
  const { selectedDates, selectedNights, selectedCabin } = useAppSelector(
    state => state.bookingsForm
  );

  const bookedDates = useAppSelector(
    state =>
      state.bookingsDates.bookedDates[
        selectedCabin as keyof typeof state.bookingsDates.bookedDates
      ]
  );

  const startDate = new Date(selectedDates.startDate as string);
  const endDate = new Date(selectedDates.endDate as string);

  const months = useBreakpointValue({ base: 1, md: 2 });

  // Local state
  const [datePreview, setDatePreview] = useState(
    `${formatDate(startDate)} - ${formatDate(endDate)}`
  );

  const parseDateStrings = (dateStrings: string[]) => {
    return dateStrings?.map(dateString =>
      parse(dateString, 'MMMM d, yyyy', new Date())
    );
  };

  const disabledDates = parseDateStrings(bookedDates);

  const toast = useToast(); // Chakra UI Toast for feedback

  const calculateNights = (startDate: Date, endDate: Date) => {
    return (
      ((endDate?.getTime() ?? 0) - (startDate?.getTime() ?? 0)) /
      (1000 * 3600 * 24)
    );
  };

  const handleSelect = (ranges: RangeKeyDict) => {
    const { startDate, endDate } = ranges.range1;

    if (startDate && endDate) {
      // Calculate nights
      const nightsCalculated = calculateNights(startDate, endDate);

      // Enforce a minimum of 2 nights
      if (nightsCalculated < 2 && startDate !== endDate) {
        toast({
          title: 'Minimum 2 nights required.',
          status: 'warning',
          duration: 3000,
          isClosable: true,
        });
        const isNextDayDisabled = disabledDates.some(disabledDate =>
          isSameDay(disabledDate, addDays(endDate, 1))
        );
        dispatch(
          setSelectedDates(
            isNextDayDisabled
              ? findFirstAvailableTwoNights(disabledDates)
              : {
                  startDate: formatDate(startDate as Date),
                  endDate: formatDate(addDays(endDate, 1)),
                }
          )
        );
        dispatch(setSelectedNights(2));
        // Reset the end date to enforce selection of 2 nights
        return;
      }

      // Update state and global state
      dispatch(setSelectedNights(Math.round(nightsCalculated)));
      dispatch(
        setSelectedDates({
          startDate: formatDate(startDate as Date),
          endDate: formatDate(endDate as Date),
        })
      );

      // Update the date preview
      setDatePreview(
        `${formatDate(startDate as Date)} - ${formatDate(endDate as Date)}`
      );

      // Trigger the selection callback if applicable
      if (startDate?.getTime() !== endDate?.getTime()) {
        onSelection?.();
      }
    }
  };

  return (
    <VStack gap="0.25rem" width="100%" alignItems="flex-start">
      {noText ? null : (
        <Box>
          <Heading
            fontSize={{ base: '1.2rem', md: isSticky ? '1.1rem' : '1.375rem' }}
            letterSpacing="0.125rem"
          >
            {Math.round(selectedNights)} nights
          </Heading>
          <Text
            fontSize={{ base: '0.975rem', md: isSticky ? '0.8rem' : '1.1rem' }}
          >
            {datePreview}
          </Text>
        </Box>
      )}
      <DateRange
        onChange={handleSelect}
        ranges={[
          {
            startDate: startDate,
            endDate: endDate,
          },
        ]}
        months={months}
        locale={enGB}
        fixedHeight
        direction="horizontal"
        minDate={new Date()}
        className={customClass}
        disabledDates={disabledDates}
        dayContentRenderer={day => renderDayContent(day, disabledDates)}
      />
    </VStack>
  );
};

export default CalendarSection;
