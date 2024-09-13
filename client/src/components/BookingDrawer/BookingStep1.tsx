import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import CalendarSection from '../MasterVillaPage/DetailsSection/CalendarSection/CalendarSection';
import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import BookingStepButtons from './BookingStepButtons';
import InputNumberField from '../InputNumberField/InputNumberField';
import { formatDate } from '../../utils/helperFunctions.utils';

const BookingStep1 = () => {
  const [isCalendar, setIsCalendar] = useState(false);
  const { selectedDates, selectedPersons } = useAppSelector(
    state => state.bookings
  );
  const startDate = new Date(selectedDates[0].startDate as string);
  const endDate = new Date(selectedDates[0].endDate as string);

  return (
    <>
      <Heading m="1.2rem 0">Select Dates</Heading>
      <VStack alignItems="flex-start" spacing="1.2rem">
        <HStack gap={0} width="100%">
          <VStack alignItems="flex-start" width="100%" position="relative">
            <Heading fontSize="1.2rem" color="rgb(234, 229, 223)">
              Check In & Check Out
            </Heading>
            <HStack
              _focusVisible={{
                borderColor: 'rgb(234, 229, 223)',
                boxShadow: '0 0 0 1px rgb(234, 229, 223)',
              }}
              border="1px solid rgb(234, 229, 223)"
              boxShadow={isCalendar ? '0 0 0 1px rgb(234, 229, 223)' : 'none'}
              borderRadius="0.375rem"
              cursor="pointer"
              height="40px"
              width="100%"
              alignItems="center"
              p="1.25rem 0.75rem"
              onClick={() => setIsCalendar(!isCalendar)}
            >
              <Text letterSpacing="1px" fontSize="1rem" m={0}>
                {`${formatDate(startDate)} - ${formatDate(endDate)}`}
              </Text>
            </HStack>
            {isCalendar && (
              <Box position="absolute" width="100%" top="110%" zIndex="100">
                <CalendarSection
                  customClass="bookingCalendar"
                  noText
                  onSelection={() => setIsCalendar(false)}
                />
              </Box>
            )}
          </VStack>
        </HStack>
        <HStack gap="1rem" justifyContent="space-between" width="100%">
          <InputNumberField
            label="Adults"
            defaultValue={selectedPersons.adults}
            maxValue={6 - selectedPersons.children}
            minValue={1}
            customerType="adults"
          />
          <InputNumberField
            label="Children"
            defaultValue={selectedPersons.children}
            maxValue={6 - selectedPersons.adults}
            minValue={0}
            customerType="children"
          />
        </HStack>
      </VStack>
      <Text
        fontSize="0.8rem"
        m="0.5rem 0 0 0"
        color="rgb(234, 229, 223)"
        fontWeight="bold"
      >
        * A maximum of 6 persons are allowed to sleep at the Master Villa.
      </Text>
      <BookingStepButtons isValid={selectedPersons.adults >= 1} />
    </>
  );
};

export default BookingStep1;
