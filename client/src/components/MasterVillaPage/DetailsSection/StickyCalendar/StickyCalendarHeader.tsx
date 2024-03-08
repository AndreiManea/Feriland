import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Text,
  Box,
} from '@chakra-ui/react';
import { formatDate } from '../../../../utils/dates.utils';
import { useEffect, useRef, useState } from 'react';
import '../../../../utils/styles/rdrCalendar.css';
import CalendarSection from '../CalendarSection/CalendarSection';
import GuestsMenu from './GuestsMenu';

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
  const [isCheckInFocused, setIsCheckInFocused] = useState(false);
  const [isCheckOutFocused, setIsCheckOutFocused] = useState(false);

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

  return (
    <VStack spacing={4} ref={calendarRef}>
      <Text fontSize="2xl" fontWeight="semibold" alignSelf={'flex-start'}>
        {pricePerNight} lei night
      </Text>
      <VStack
        spacing={0}
        border="1px solid rgb(221, 221, 221)"
        borderRadius="12px"
      >
        <HStack justifyContent="space-between" w="full" gap="0" p={1}>
          <FormControl
            id="check-in"
            zIndex={isCheckInFocused ? 92 : 91}
            p={isCalendarOpen ? 2 : 1}
            onClick={() => {
              setIsCalendarOpen(true);
              setIsCheckInFocused(true);
              setIsCheckOutFocused(false);
            }}
            borderTop={
              isCalendarOpen
                ? isCheckInFocused
                  ? '2px solid black'
                  : '2px solid rgb(221, 221, 221)'
                : 'none'
            }
            borderBottom={
              isCalendarOpen
                ? isCheckInFocused
                  ? '2px solid black'
                  : '2px solid rgb(221, 221, 221)'
                : 'none'
            }
            borderLeft={
              isCalendarOpen
                ? isCheckInFocused
                  ? '2px solid black'
                  : '2px solid rgb(221, 221, 221)'
                : 'none'
            }
            borderRight={
              isCalendarOpen
                ? isCheckInFocused
                  ? '2px solid black'
                  : isCheckOutFocused
                    ? 'none'
                    : '2px solid rgb(221, 221, 221)'
                : '2px solid rgb(221, 221, 221)'
            }
            borderRadius={isCalendarOpen ? '8px' : 0}
            borderTopEndRadius={isCheckInFocused ? '8px' : 0}
            borderBottomEndRadius={isCheckInFocused ? '8px' : 0}
            cursor="pointer"
            marginRight={isCheckInFocused ? '-6px' : 0}
          >
            <FormLabel fontSize="12px" mb={0} cursor="pointer">
              Check-in
            </FormLabel>
            <Input
              value={`${formatDate(startDate)}`}
              fontSize="0.875rem"
              outline="none"
              border="none"
              p="0"
              height="auto"
              cursor="pointer"
              _focusVisible={{ border: 'none', boxShadow: 'none' }}
              onFocus={() => setIsCheckInFocused(true)}
              onBlur={() => setIsCheckInFocused(false)}
            />
          </FormControl>
          <FormControl
            id="check-out"
            zIndex={isCheckOutFocused ? 92 : 91}
            p={isCalendarOpen ? 2 : 1}
            onClick={() => {
              setIsCalendarOpen(true);
              setIsCheckOutFocused(true);
              setIsCheckInFocused(false);
            }}
            ml={isCalendarOpen ? 0 : 2}
            cursor="pointer"
            borderTop={
              isCalendarOpen
                ? isCheckOutFocused
                  ? '2px solid black'
                  : '2px solid rgb(221, 221, 221)'
                : 'none'
            }
            borderBottom={
              isCalendarOpen
                ? isCheckOutFocused
                  ? '2px solid black'
                  : '2px solid rgb(221, 221, 221)'
                : 'none'
            }
            borderLeft={
              isCalendarOpen
                ? isCheckOutFocused
                  ? '2px solid black'
                  : 'none'
                : 'none'
            }
            borderRight={
              isCalendarOpen
                ? isCheckOutFocused
                  ? '2px solid black'
                  : '2px solid rgb(221, 221, 221)'
                : 'none'
            }
            borderRadius={isCalendarOpen ? '8px' : 0}
            marginLeft={isCheckOutFocused ? '-6px' : 0}
            borderTopLeftRadius={isCheckOutFocused ? '8px' : 0}
            borderBottomLeftRadius={isCheckOutFocused ? '8px' : 0}
            paddingLeft={isCheckInFocused ? '12px' : 3}
          >
            <FormLabel fontSize="12px" mb={0} cursor="pointer">
              Checkout
            </FormLabel>
            <Input
              value={`${formatDate(endDate)}`}
              height="auto"
              fontSize="0.875rem"
              outline="none"
              border="none"
              p="0"
              cursor="pointer"
              _focusVisible={{ border: 'none', boxShadow: 'none' }}
              onFocus={() => setIsCheckOutFocused(true)}
              onBlur={() => setIsCheckOutFocused(false)}
            />
          </FormControl>
          <Box
            position="absolute"
            display={isCalendarOpen ? 'block' : 'none'}
            zIndex={90}
            width="661px"
            right={5}
            top={20}
            background="white"
            p="24px 32px 16px 32px"
            boxShadow="rgba(0, 0, 0, 0.2) 0px 6px 20px"
            borderRadius="16px"
          >
            <CalendarSection onSelection={() => setIsCalendarOpen(false)} />
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
