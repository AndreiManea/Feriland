import { VStack } from '@chakra-ui/react';
import DetailsFeatureIcon from './DetailsFeatureIcon';

export type Feature = {
  iconSrc: string;
  boldText: string;
  smallText: string;
};

type FeatureDetailsProps = {
  featuresArray: Feature[];
};

const FeatureDetailsSection = ({ featuresArray }: FeatureDetailsProps) => {
  return (
    <VStack alignItems="flex-start" justifyContent="center" gridGap="2rem">
      {featuresArray.map(feature => (
        <DetailsFeatureIcon
          iconSrc={feature.iconSrc}
          boldText={feature.boldText}
          smallText={feature.smallText}
        />
      ))}
    </VStack>
  );
};

export default FeatureDetailsSection;
