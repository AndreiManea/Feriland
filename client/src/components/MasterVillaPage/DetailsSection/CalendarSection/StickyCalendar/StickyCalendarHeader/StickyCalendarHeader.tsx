import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
  useBreakpointValue,
} from '@chakra-ui/react';

import { useEffect, useRef, useState } from 'react';
import '../../../../../../utils/styles/rdrCalendar.css';
import GuestsMenu from '../GuestsMenu/GuestsMenu';
import { styles } from './stickyCalendarHeader.styles';
import { formatDate } from '../../../../../../utils/helperFunctions.utils';
import CalendarSection from '../../CalendarSection';

const StickyCalendarHeader = ({
  startDate,
  endDate,
  pricePerNight,
}: {
  startDate: Date;
  endDate: Date;
  pricePerNight: number;
}) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const rightValue = useBreakpointValue({
    lg: 4,
    xl: 10,
    '2xl': 20,
  });

  return (
    <VStack spacing={4} ref={calendarRef}>
      <Text sx={styles.text}>{pricePerNight} lei night</Text>
      <VStack spacing={0} sx={styles.vStackInner}>
        <HStack sx={styles.hStack}>
          <FormControl
            id="check-in"
            sx={styles.checkInFormControl(isCalendarOpen)}
            onClick={() => {
              setIsCalendarOpen(true);
            }}
          >
            <FormLabel sx={styles.formLabel}>Check-in</FormLabel>
            <Input value={`${formatDate(startDate)}`} sx={styles.input} />
          </FormControl>
          <FormControl
            id="check-out"
            onClick={() => {
              setIsCalendarOpen(true);
            }}
            sx={styles.checkOutFormControl(isCalendarOpen)}
          >
            <FormLabel sx={styles.formLabel}>Checkout</FormLabel>
            <Input value={`${formatDate(endDate)}`} sx={styles.input} />
          </FormControl>
          <Box
            className="stickyCalendar"
            sx={styles.calendarBox(isCalendarOpen, rightValue || 0)}
          >
            <CalendarSection
              customClass="stickyCalendarSection"
              onSelection={() => setIsCalendarOpen(false)}
              isSticky
            />
          </Box>
        </HStack>
        <GuestsMenu
          adults={adults}
          children={children}
          setAdults={setAdults}
          setChildren={setChildren}
        />
      </VStack>
    </VStack>
  );
};

export default StickyCalendarHeader;
