import { Box, Text } from '@chakra-ui/react';

interface InfoSectionItemProps {
  title: string;
  content: string;
}

const InfoSectionItem = ({ title, content }: InfoSectionItemProps) => (
  <Box>
    <Text
      fontSize={{ base: '1rem', md: '1.1rem' }}
      fontWeight="bold"
      mb="0.5rem"
    >
      {title}
    </Text>
    <Text fontSize={{ base: '1rem', md: '1.1rem' }}>
      {content.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}
    </Text>
  </Box>
);
export default InfoSectionItem;
