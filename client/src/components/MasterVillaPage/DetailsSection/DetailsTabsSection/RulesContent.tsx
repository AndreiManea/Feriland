import { Box, Text, VStack } from '@chakra-ui/react';
import IconDetails from './IconDetails';
import InfoSectionItem from './InfoSectionItem';
import { useTranslation } from 'react-i18next';
import { InfoSection } from '../../../../utils/types';

const RulesContent = () => {
  const { t } = useTranslation();
  const infoSections = t('masterVilla.infoSections', { returnObjects: true }) as InfoSection[];

  return (
    <VStack align="flex-start" spacing="1rem">
      <IconDetails text={t('masterVilla.checkin')} />
      <IconDetails text={t('masterVilla.checkout')} />
      <Text fontWeight="700" fontSize="1.6rem" mt="0.8rem" mb="0">
        {t('masterVilla.rulesContentHeader')}
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
