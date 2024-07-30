import { Heading, Link } from '@chakra-ui/react';

const PageLink = ({
  title,
  to = '/',
  isHovered,
  onMouseEnter,
  onMouseLeave,
}: {
  title: string;
  to?: string;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <Link
      href={to}
      opacity={isHovered ? '1' : '0.25'}
      transition="0.2s ease-in-out"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      _hover={{ border: 'none' }}
    >
      <Heading fontWeight="400" size="h3" textAlign="left" m="0">
        {title}
      </Heading>
    </Link>
  );
};

export default PageLink;
