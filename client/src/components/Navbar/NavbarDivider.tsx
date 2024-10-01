import { Box } from '@chakra-ui/react';

const NavbarDivider = () => {
  return (
    <Box
      backgroundColor="rgba(0,0,0,.1)"
      width={{ base: '100%', md: '1px' }}
      height={{ base: '1px', md: 'auto' }}
      position={{ base: 'relative', md: 'absolute' }}
      top="0"
      bottom="0"
      left="auto"
      right="0"
    />
  );
};

export default NavbarDivider;
