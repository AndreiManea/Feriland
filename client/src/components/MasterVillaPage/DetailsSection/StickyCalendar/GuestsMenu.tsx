import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';
import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  VStack,
  MenuItem,
  Text,
  Icon,
} from '@chakra-ui/react';
import Counter from './Counter/Counter';
import { useState } from 'react';

const GuestsMenu = ({
  adults,
  children,
  setAdults,
  setChildren,
}: {
  adults: number;
  children: number;
  setAdults: (value: number) => void;
  setChildren: (value: number) => void;
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
        w="full"
        height="auto"
        position="relative"
        background="transparent"
        border={`${!isOpen ? '0' : '2px'}`}
        borderTop={` ${!isOpen ? '1px' : '2px'} solid ${!isOpen ? 'rgb(221, 221, 221)' : 'black'}`}
        borderRadius={isOpen ? '12px' : 0}
        paddingLeft={2.5}
        _hover={{
          borderBottomEndRadius: '12px',
          borderBottomLeftRadius: '12px',
          background: 'transparent',
        }}
        _active={{ background: 'transparent' }}
      >
        <Text fontSize="12px" position="absolute" top={2} left={2}>
          Guests
        </Text>
        <Text fontSize="0.875rem" textAlign="left" p="26px 36px 0px 0px">
          {totalGuests === 1 ? `${totalGuests} guest` : `${totalGuests} guests`}
        </Text>
      </MenuButton>
      <MenuList
        marginTop="-9px"
        boxShadow="rgba(0, 0, 0, 0.15) 0px 2px 6px, rgba(0, 0, 0, 0.07) 0px 0px 0px 1px"
        borderRadius="4px"
        border="none"
        paddingTop={0}
        paddingBottom="16px"
      >
        <VStack p={4}>
          <Counter label="Adults" value={adults} setValue={setAdults} />
          <Counter label="Children" value={children} setValue={setChildren} />
        </VStack>
        <Text
          color="rgb(34, 34, 34)"
          marginTop="8px"
          marginBottom="16px"
          padding="0 16px"
        >
          This place has a maximum of 6 guests, not including infants. Pets
          aren't allowed.
        </Text>
        <MenuItem
          as={Button}
          justifyContent="flex-end"
          _hover={{ background: 'transparent' }}
          _focus={{ background: 'transparent' }}
          p={0}
          paddingRight="10px"
        >
          <Text
            textDecoration="underline"
            marginBottom={0}
            _hover={{ background: '#F7F7F7', borderRadius: '8px' }}
            p="10px"
          >
            Close
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default GuestsMenu;
