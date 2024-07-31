import { ChevronUpIcon, ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, Button, Icon, Box, Text } from '@chakra-ui/react';
import CalendarSection from '../MasterVillaPage/DetailsSection/CalendarSection/CalendarSection';
import GuestsForm from '../MasterVillaPage/DetailsSection/CalendarSection/StickyCalendar/GuestsMenu/GuestsForm';
import { styles } from './bookingDrawer.styled';
import { useState } from 'react';

const BookingFirstStep = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [isOpen, setIsOpen] = useState(false);
  const totalGuests = adults + children;
  return (
    <>
      <Text fontSize="xx-large" mt="1rem">
        Start Booking
      </Text>
      <Box className="drawerCalendar">
        <CalendarSection customClass="sectionCalendar" />
      </Box>
      <Menu
        matchWidth
        onClose={() => setIsOpen(prev => !prev)}
        onOpen={() => setIsOpen(prev => !prev)}
      >
        <MenuButton
          as={Button}
          rightIcon={
            <Icon as={isOpen ? ChevronUpIcon : ChevronDownIcon} w={8} h={8} />
          }
          sx={styles.menuButton(isOpen)}
        >
          <Text fontSize="large" position="absolute" top={2} left={2}>
            Guests
          </Text>
          <Text sx={styles.guestText}>
            {totalGuests === 1
              ? `${totalGuests} guest`
              : `${totalGuests} guests`}
          </Text>
        </MenuButton>
        <GuestsForm
          adults={adults}
          setAdults={setAdults}
          children={children}
          setChildren={setChildren}
        />
      </Menu>
    </>
  );
};

export default BookingFirstStep;
