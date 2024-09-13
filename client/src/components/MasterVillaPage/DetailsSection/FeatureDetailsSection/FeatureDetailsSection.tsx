import { VStack } from '@chakra-ui/react';
import DetailsFeatureIcon from './DetailsFeatureIcon';
import { Feature } from '../../../../utils/types';

type FeatureDetailsProps = {
  featuresArray: Feature[];
};

const FeatureDetailsSection = ({ featuresArray }: FeatureDetailsProps) => {
  return (
    <VStack alignItems="flex-start" justifyContent="center" gridGap="2rem">
      {featuresArray.map((feature, index) => (
        <DetailsFeatureIcon
          key={index}
          iconSrc={feature.iconSrc}
          boldText={feature.boldText}
          smallText={feature.smallText}
        />
      ))}
    </VStack>
  );
};

export default FeatureDetailsSection;
