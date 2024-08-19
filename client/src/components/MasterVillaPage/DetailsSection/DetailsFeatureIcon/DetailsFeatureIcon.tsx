import React from 'react';
import { Box, HStack, Image, Text } from '@chakra-ui/react';

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
  <HStack gridGap="2rem" alignItems="center" pl="1rem">
    <Image width="2rem" src={iconSrc} loading="lazy" alt="" />
    <Box>
      <Text as="p" textAlign="left" mb="0px" lineHeight="1.5" fontWeight="bold">
        {boldText}
      </Text>
      <Text as="p" color="rgba(0, 0, 0, 0.8)" mb="0px">
        {smallText}
      </Text>
    </Box>
  </HStack>
);

export default DetailsFeatureIcon;
