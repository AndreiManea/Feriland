import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, Button, Text, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { styles } from './guestsMenu.styled';
import GuestsForm from './GuestsForm';
import { useAppSelector } from '../../../../../../redux/hooks';

const GuestsMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { adults, children } = useAppSelector(
    state => state.bookings.selectedPersons
  );
  const totalGuests = adults + children;

  return (
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
        <Text sx={styles.guestsText}>Guests</Text>
        <Text sx={styles.totalGuestsText}>
          {totalGuests === 1 ? `${totalGuests} guest` : `${totalGuests} guests`}
        </Text>
      </MenuButton>
      <GuestsForm />
    </Menu>
  );
};

export default GuestsMenu;
