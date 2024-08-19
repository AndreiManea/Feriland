import { Box, Heading, HStack } from '@chakra-ui/react';
import { SubText } from './Text';

const DetailsHeader = () => {
  return (
    <Box>
      <Heading
        as="h2"
        size="h2"
        zIndex="2"
        my="0"
        maxW="35rem"
        position="relative"
        color="black"
        textAlign="left"
        width="100%"
        fontWeight="400"
      >
        Entire Master Villa
      </Heading>
      <HStack alignItems="center">
        <SubText divider>6 Guests</SubText>
        <SubText divider>2 Bedrooms</SubText>
        <SubText divider>1.5 Baths</SubText>
        <SubText>Ciubar</SubText>
      </HStack>
    </Box>
  );
};

export default DetailsHeader;
