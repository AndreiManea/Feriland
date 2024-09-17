import { Button, MenuItem, MenuList, VStack, Text } from '@chakra-ui/react';
import Counter from '../Counter/Counter';
import { styles } from './guestsMenu.styled';
import { useAppSelector } from '../../../../../../redux/hooks';
import { useDispatch } from 'react-redux';
import { setSelectedPersons } from '../../../../../../redux/slices/bookingsSlice';

const GuestsForm: React.FC = () => {
  const { adults, children } = useAppSelector(
    state => state.bookings.selectedPersons
  );
  const dispatch = useDispatch();
  return (
    <MenuList sx={styles.menuList}>
      <VStack sx={styles.vStack}>
        <Counter
          label="Adults"
          value={adults}
          setValue={adultsNumber =>
            dispatch(setSelectedPersons({ adults: adultsNumber, children }))
          }
          minValue={1}
          maxValue={6 - children}
        />
        <Counter
          label="Children"
          value={children}
          setValue={childrenNumber =>
            dispatch(setSelectedPersons({ adults, children: childrenNumber }))
          }
          maxValue={6 - adults}
          minValue={0}
        />
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
