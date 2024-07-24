import { HStack, Box, Image } from '@chakra-ui/react';

const ActivityDivider = () => {
  return (
    <HStack
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      mb="8.75rem"
    >
      <Box
        width="45%"
        height="1px"
        opacity="0.3"
        backgroundColor="rgba(0,0,0,0.3)"
      />
      <Image
        src="https://assets-global.website-files.com/65bcf5fac0f3634790a816fe/65cb736094ba4a4473a3011e_abc.svg"
        loading="lazy"
        alt="Divider Image"
        opacity="0.3"
      />
      <Box
        width="45%"
        height="1px"
        opacity="0.3"
        backgroundColor="rgba(0,0,0,0.3)"
      />
    </HStack>
  );
};

export default ActivityDivider;
