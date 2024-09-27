import { VStack, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const DescriptionContent = () => {
  const {t} = useTranslation()
  return (
    <VStack align="flex-start" spacing="1rem">
      <Text fontSize="1.1rem" mb="0">
        {t('masterVilla.descriptionText_1')}
      </Text>
      <Text fontWeight="800" fontSize="1.4rem">
        {t('masterVilla.descriptionText_2')}
      </Text>
      <Text fontSize="1.1rem" mb="0">
        {t('masterVilla.descriptionText_3')}
      </Text>
    </VStack>
  );
};

export default DescriptionContent;
