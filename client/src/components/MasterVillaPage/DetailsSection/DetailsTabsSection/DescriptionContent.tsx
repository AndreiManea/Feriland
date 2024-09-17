import { VStack, Text } from '@chakra-ui/react';
import {
  descriptionText_1,
  descriptionText_2,
  descriptionText_3,
} from '../../../../utils/data';

const DescriptionContent = () => {
  return (
    <VStack align="flex-start" spacing="1rem">
      <Text fontSize="1.1rem" mb="0">
        {descriptionText_1}
      </Text>
      <Text fontWeight="800" fontSize="1.4rem">
        {descriptionText_2}
      </Text>
      <Text fontSize="1.1rem" mb="0">
        {descriptionText_3}
      </Text>
    </VStack>
  );
};

export default DescriptionContent;
