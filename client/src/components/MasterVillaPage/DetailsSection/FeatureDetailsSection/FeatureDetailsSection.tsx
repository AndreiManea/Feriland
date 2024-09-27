import { VStack } from '@chakra-ui/react';
import DetailsFeatureIcon from './DetailsFeatureIcon';
import { Feature } from '../../../../utils/types';
import { useTranslation } from 'react-i18next';

type FeatureDetailsProps = {
  featuresArray: Feature[];
};

const FeatureDetailsSection = ({ featuresArray }: FeatureDetailsProps) => {
  const { t } = useTranslation();
  return (
    <VStack alignItems="flex-start" justifyContent="center" gridGap="2rem">
      {featuresArray.map((_feature, index) => {
        const iconSrc = t(`masterVilla.featuresArray.${index}.iconSrc`, { lng: 'en' });

        const boldText = t(`masterVilla.featuresArray.${index}.boldText`);
        const smallText = t(`masterVilla.featuresArray.${index}.smallText`);

        return (
          <DetailsFeatureIcon
            key={index}
            iconSrc={iconSrc}
            boldText={boldText}
            smallText={smallText}
          />
        );
      })}
    </VStack>
  );
};

export default FeatureDetailsSection;
