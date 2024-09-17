import { useAppSelector } from '../../redux/hooks.js';
import { VStack } from '@chakra-ui/react';

import { useState } from 'react';
import NavbarCollapsed from './NavbarCollapsed.js';
import NavbarExtended from './NavbarExtended.js';

const Navbar: React.FC = () => {
  const { darkNavbar } = useAppSelector(state => state.styles);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <VStack
      zIndex="100"
      backgroundColor="rgba(0, 0, 0, 0)"
      justifyContent="center"
      alignItems="center"
      margin="0 auto"
      padding="1rem 1.75rem"
      position="fixed"
      display="block"
      top="0"
      bottom="auto"
      left="0"
      right="0"
      transition="ease-in-out 0.5s"
    >
      <VStack
        p="0.5625rem"
        backdropFilter="blur(0.5rem)"
        backgroundColor={
          !darkNavbar ? 'rgba(0, 0, 0, .25)' : 'rgba(207, 198, 187, 0.25)'
        }
        height={isMenuOpen ? '39.5rem' : '5.875rem'}
        borderRadius={isMenuOpen ? '2rem' : '5rem'}
        transition={!isMenuOpen ? '0.2s ease-in-out' : '0.3s ease-in-out'}
        gap={isMenuOpen ? '0.5rem' : 0}
      >
        <NavbarCollapsed
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <NavbarExtended isMenuOpen={isMenuOpen} />
      </VStack>
    </VStack>
  );
};

export default Navbar;
