import { Text, Image, HStack } from '@chakra-ui/react';

interface AmenityItemProps {
  iconSrc: string;
  label: string;
}

const AmenityItem = ({ iconSrc, label }: AmenityItemProps) => {
  return (
    <HStack gridGap="2rem" alignItems="center" pl="1rem">
      <Image width="2rem" src={iconSrc} loading="lazy" alt="" />
      <Text as="p" color="rgba(0, 0, 0, 0.8)" mb="0px">
        {label}
      </Text>
    </HStack>
  );
};

export default AmenityItem;
