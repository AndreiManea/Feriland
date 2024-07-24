import { Heading, Text, VStack } from '@chakra-ui/react';
import ActivityDivider from './ActivityDivider';
import ActivitiesSlider from './ActivitiesSlider';

const SliderSection = () => {
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
            Activities in Feriland
          </Heading>
          <Text textAlign="center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique.
          </Text>
        </VStack>
      </VStack>
      <ActivitiesSlider />
    </section>
  );
};

export default SliderSection;
