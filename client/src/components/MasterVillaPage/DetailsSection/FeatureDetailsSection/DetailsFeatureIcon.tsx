import { Box, HStack, Image, Text } from '@chakra-ui/react';

type IconDetailsProps = {
  iconSrc: string;
  boldText: string;
  smallText: string;
};

const DetailsFeatureIcon = ({
  iconSrc,
  boldText,
  smallText,
}: IconDetailsProps) => (
  <HStack gridGap="2rem" alignItems="center" pl="1rem">
    <Image width="2rem" src={iconSrc} loading="lazy" alt="" />
    <Box>
      <Text as="p" textAlign="left" mb="0" lineHeight="1.5" fontWeight="bold">
        {boldText}
      </Text>
      <Text as="p" color="rgba(0, 0, 0, 0.8)" mb="0">
        {smallText}
      </Text>
    </Box>
  </HStack>
);

export default DetailsFeatureIcon;
