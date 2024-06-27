import { Button, MenuItem, MenuList, VStack, Text } from '@chakra-ui/react';
import Counter from '../Counter/Counter';
import { styles } from './guestsMenu.styled';

interface GuestsFormProps {
  adults: number;
  setAdults: (value: number) => void;
  children: number;
  setChildren: (value: number) => void;
}

const GuestsForm: React.FC<GuestsFormProps> = ({
  adults,
  setAdults,
  children,
  setChildren,
}) => {
  return (
    <MenuList sx={styles.menuList}>
      <VStack sx={styles.vStack}>
        <Counter label="Adults" value={adults} setValue={setAdults} />
        <Counter label="Children" value={children} setValue={setChildren} />
      </VStack>
      <Text sx={styles.infoText}>
        This place has a maximum of 6 guests, not including infants. Pets aren't
        allowed.
      </Text>
      <MenuItem as={Button} sx={styles.menuItem}>
        <Text sx={styles.closeButtonText}>Close</Text>
      </MenuItem>
    </MenuList>
  );
};

export default GuestsForm;
