import { Heading, Link } from '@chakra-ui/react';

const PageLink = ({
  title,
  to = '/',
  isHovered,
  onMouseEnter,
  onMouseLeave,
  darkNavbar,
}: {
  title: string;
  to?: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  darkNavbar?: boolean;
}) => {
  return (
    <Link
      href={to}
      opacity={isHovered ? '1' : '0.25'}
      transition="0.3s ease-in-out"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      _hover={{ border: 'none' }}
    >
      <Heading
        color={darkNavbar ? 'white' : ''}
        fontWeight="400"
        fontSize={{ base: '2rem', md: '2.625rem' }}
        size="h3"
        textAlign="left"
        m="0"
      >
        {title}
      </Heading>
    </Link>
  );
};

export default PageLink;
