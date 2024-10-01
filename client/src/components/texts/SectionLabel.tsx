import { Text } from '@chakra-ui/react';

const SectionLabel = ({
  title,
  darkNavbar,
}: {
  title: string;
  darkNavbar?: boolean;
}) => {
  return (
    <Text
      fontSize="0.75rem"
      mb={{ base: '0.5rem', md: '1.1875rem' }}
      letterSpacing="0.1rem"
      color={darkNavbar ? 'rgba(204, 204, 204, .7)' : 'rgba(51, 51, 51, 0.7)'}
    >
      {title}
    </Text>
  );
};

export default SectionLabel;
