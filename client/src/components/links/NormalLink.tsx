import { Link, Text } from '@chakra-ui/react';

const NormalLink = ({ title, to = '/' }: { title: string; to?: string }) => {
  return (
    <Link
      href={to}
      position="relative"
      _after={{
        content: '""',
        position: 'absolute',
        bottom: -1,
        left: 0,
        height: '1px',
        bg: 'black',
        width: '0%',
        transition: 'width 0.4s ease-in-out',
      }}
      _hover={{
        _after: {
          width: '100%',
        },
      }}
    >
      <Text fontSize="1rem" m="0" letterSpacing="0">
        {title}
      </Text>
    </Link>
  );
};

export default NormalLink;
