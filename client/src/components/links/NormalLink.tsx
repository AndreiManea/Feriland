import { Link, Text } from '@chakra-ui/react';

const NormalLink = ({
  title,
  to = '/',
  darkNavbar,
}: {
  title: string;
  to?: string;
  darkNavbar?: boolean;
}) => {
  return (
    <Link
      href={to}
      position="relative"
      color={darkNavbar ? 'white' : 'inherit'}
      _after={{
        content: '""',
        position: 'absolute',
        bottom: -1,
        left: 0,
        height: '1px',
        bg: !darkNavbar ? 'black' : 'white',
        width: '0%',
        transition: 'width 0.4s ease-in-out',
      }}
      transition="0.3s ease-in-out"
      _hover={{
        _after: {
          width: '100%',
        },
      }}
    >
      <Text fontSize={{ base: '0.9rem', md: '1rem' }} m="0" letterSpacing="0">
        {title}
      </Text>
    </Link>
  );
};

export default NormalLink;
