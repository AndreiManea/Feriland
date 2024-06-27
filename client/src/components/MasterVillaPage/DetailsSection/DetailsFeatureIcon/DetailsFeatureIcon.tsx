// IconDetailsComponent.tsx
import React from 'react';
import {
  IconDetailsContainer,
  IconDetailsTextContainer,
  BoldText,
  TextSmall,
} from '../DetailsSection.styled';

interface IconDetailsProps {
  iconSrc: string;
  boldText: string;
  smallText: string;
}

const DetailsFeatureIcon: React.FC<IconDetailsProps> = ({
  iconSrc,
  boldText,
  smallText,
}) => (
  <IconDetailsContainer>
    <img src={iconSrc} loading="lazy" alt="" />
    <IconDetailsTextContainer>
      <BoldText>{boldText}</BoldText>
      <TextSmall>{smallText}</TextSmall>
    </IconDetailsTextContainer>
  </IconDetailsContainer>
);

export default DetailsFeatureIcon;
