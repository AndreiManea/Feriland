import { ChevronDownIcon } from '@chakra-ui/icons';
import {
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuDivider,
  MenuItem,
  Divider,
  Box,
  Text,
} from '@chakra-ui/react';
import { formatDate } from '../../../../utils/dates.utils';
import { useState } from 'react';
import './stickyCalendar.css';
import { useAppSelector } from '../../../../redux/hooks';
import Counter from './Counter/Counter';

const StickyCalendar = () => {
  // Global state
  const { selectedDates, selectedNights } = useAppSelector(
    state => state.bookings
  );
  const startDate = new Date(selectedDates[0].startDate as string);
  const endDate = new Date(selectedDates[0].endDate as string);
  // Local state
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  // Calculations for the total price
  const pricePerNight = 1500;
  const totalPrice = pricePerNight * selectedNights;

  return (
    <div id="calendarId" className="sticky-calendar">
      <Box maxW="md" borderRadius="lg" overflow="hidden" p={4} bg="white">
        <VStack spacing={4}>
          <Text fontSize="2xl" fontWeight="semibold" alignSelf={'flex-start'}>
            {pricePerNight} lei night
          </Text>
          <HStack justifyContent="space-between" w="full">
            <FormControl id="check-in">
              <FormLabel>Check-in</FormLabel>
              <Input
                value={`${formatDate(startDate)}`}
                placeholder="5/1/2024"
              />
            </FormControl>
            <FormControl id="check-out">
              <FormLabel>Checkout</FormLabel>
              <Input value={`${formatDate(endDate)}`} />
            </FormControl>
          </HStack>
          <Menu matchWidth>
            <MenuButton
              as={Button}
              rightIcon={<ChevronDownIcon />}
              w="full"
              color="#222"
            >
              {adults + children} Guests
            </MenuButton>
            <MenuList>
              <VStack p={4}>
                <Counter label="Adults" value={adults} setValue={setAdults} />
                <Counter
                  label="Children"
                  value={children}
                  setValue={setChildren}
                />
              </VStack>
              <MenuDivider />
              <MenuItem as={Button} justifyContent="center">
                Close
              </MenuItem>
            </MenuList>
          </Menu>
          <Button size="md" background="#547c39" color="white" width="100%">
            Reserve
          </Button>
          <HStack justifyContent="space-between" w="full">
            <Text fontSize="md">
              {pricePerNight} lei x {selectedNights} nights
            </Text>
            <Text fontSize="md">{totalPrice} lei</Text>
          </HStack>
          <Divider />
          <HStack justifyContent="space-between" pt={2} w="full">
            <Text fontSize="lg" fontWeight="semibold">
              Total
            </Text>
            <Text fontSize="lg" fontWeight="semibold">
              {totalPrice} lei
            </Text>
          </HStack>
        </VStack>
      </Box>
    </div>
  );
};

export default StickyCalendar;
