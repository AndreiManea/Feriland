import { Box, Text, VStack } from '@chakra-ui/react';
import IconDetails from './IconDetails';
import { infoSections } from '../../../../utils/data';
import InfoSectionItem from './InfoSectionItem';

const RulesContent = () => {
  return (
    <VStack align="flex-start" spacing={4}>
      <IconDetails text="Check-in: 3:00 PM - 6:00 PM" />
      <IconDetails text="Checkout before 10:00 AM" />
      <Text fontWeight="700" fontSize="1.6em" mt="0.8rem" mb="0">
        Additional Rules
      </Text>
      <Box>
        {infoSections.map((section, index) => (
          <InfoSectionItem
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </Box>
    </VStack>
  );
};

export default RulesContent;
