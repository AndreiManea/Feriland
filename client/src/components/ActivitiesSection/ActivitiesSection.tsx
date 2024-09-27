import { Heading, Text, VStack } from '@chakra-ui/react';
import ActivityDivider from './ActivityDivider';
import ActivitiesSlider from './ActivitiesSlider';
import { useTranslation } from 'react-i18next';

const SliderSection = () => {
  const { t } = useTranslation();
  return (
    <section style={{ paddingBottom: '10.58rem' }}>
      <VStack
        justifyContent="center"
        alignItems="center"
        width="100%"
        mb="2.5rem"
      >
        <ActivityDivider />
        <VStack maxWidth="500px" spacing="2rem">
          <Heading as="h2" size="h2" fontWeight="400" textAlign="center">
          {t('homePage.activitiesSectionHeader')}
          </Heading>
          <Text textAlign="center">
          {t('homePage.activitiesSectionText')}
          </Text>
        </VStack>
      </VStack>
      <ActivitiesSlider />
    </section>
  );
};

export default SliderSection;
