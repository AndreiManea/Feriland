import { Text } from '@chakra-ui/react';

const SectionLabel = ({ title }: { title: string }) => {
  return (
    <Text
      fontSize="0.75rem"
      mb="1.1875rem"
      letterSpacing="0.1rem"
      color="rgba(51, 51, 51, .7)"
    >
      {title}
    </Text>
  );
};

export default SectionLabel;
