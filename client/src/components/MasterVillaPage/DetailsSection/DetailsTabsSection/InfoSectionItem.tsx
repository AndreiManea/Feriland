import { Box, Text } from '@chakra-ui/react';

interface InfoSectionItemProps {
  title: string;
  content: string;
}

const InfoSectionItem = ({ title, content }: InfoSectionItemProps) => (
  <Box>
    <Text fontSize="1rem" fontWeight="bold" mb="0.5rem">
      {title}
    </Text>
    <Text fontSize="1rem">
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
