import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, Button, Text, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { styles } from './guestsMenu.styled';
import GuestsForm from './GuestsForm';

interface GuestsMenuProps {
  adults: number;
  children: number;
  setAdults: (value: number) => void;
  setChildren: (value: number) => void;
}

const GuestsMenu: React.FC<GuestsMenuProps> = ({
  adults,
  children,
  setAdults,
  setChildren,
}) => {
  const [isOpen, setIsOpen] = useState(false);
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
      <GuestsForm
        adults={adults}
        setAdults={setAdults}
        children={children}
        setChildren={setChildren}
      />
    </Menu>
  );
};

export default GuestsMenu;
