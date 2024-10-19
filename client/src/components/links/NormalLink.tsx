import { Link, Text } from '@chakra-ui/react';

const NormalLink = ({
  title,
  to = '/',
  isGreen,
}: {
  title: string;
  to?: string;
  isGreen?: boolean;
}) => {
  return (
    <Link
      href={to}
      position="relative"
      color={isGreen ? '#547c39' : 'black'}
      _after={{
        content: '""',
        position: 'absolute',
        bottom: -1,
        left: 0,
        height: '1px',
        bg: isGreen ? '#547c39' : 'black',
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
      <Text
        fontSize={{
          base: '0.9rem',
          md: isGreen ? '1.1rem' : '1rem',
          lg: '1rem',
        }}
        m="0"
        letterSpacing="0"
      >
        {title}
      </Text>
    </Link>
  );
};

export default NormalLink;
