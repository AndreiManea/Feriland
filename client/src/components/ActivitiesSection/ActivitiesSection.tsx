import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import ActivityDivider from './ActivityDivider';
import ActivitiesSlider from './ActivitiesSlider';
import { useTranslation } from 'react-i18next';

export const ActivitiesSection = () => {
  const { t } = useTranslation();
  return (
    <Box as="section" pb={{ base: '5rem', md: '7.5rem', lg: '10rem' }}>
      <VStack
        justifyContent="center"
        alignItems="center"
        width="100%"
        mb="2.5rem"
      >
        <ActivityDivider />
        <VStack maxWidth="500px" spacing="2rem">
          <Heading
            as="h2"
            size={{ base: 'h3', md: 'h2', lg: 'h1' }}
            fontWeight="400"
            textAlign="center"
          >
            {t('homePage.activitiesSectionHeader')}
          </Heading>
          <Text
            textAlign="center"
            fontSize={{ base: '1.2rem', lg: '1.4rem' }}
            lineHeight={{ base: '2rem', lg: '2.5rem' }}
          >
            {t('homePage.activitiesSectionText')}
          </Text>
        </VStack>
      </VStack>
      <ActivitiesSlider />
    </Box>
  );
};
